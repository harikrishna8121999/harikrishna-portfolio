/**
 * Vercel serverless function — proxies the Vercel Web Analytics REST API so the
 * dashboard can read real traffic without ever shipping VERCEL_TOKEN to the browser.
 *
 * Required environment variables (set them in the Vercel dashboard, not in .env):
 *   VERCEL_TOKEN      — a personal access token with read access to the project
 *   VERCEL_PROJECT_ID — the project this site is deployed as
 *   VERCEL_TEAM_ID    — only when the project lives under a team
 *
 * With none of those set the endpoint responds 503 and the dashboard renders its
 * "not configured" state instead of failing.
 *
 * API reference: https://vercel.com/docs/rest-api/web-analytics
 */

interface RequestLike {
  query: Record<string, string | string[] | undefined>;
}

interface ResponseLike {
  status(code: number): ResponseLike;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
}

type Period = '24h' | '7d' | '30d';

interface SeriesPoint {
  timestamp: number;
  pageviews: number;
  visitors: number;
}

interface VercelAggregateRow {
  timestamp?: string;
  requestPath?: string;
  pageviews?: number;
  visitors?: number;
}

interface VercelAggregateResponse {
  data?: VercelAggregateRow[];
}

const PERIOD_MS: Record<Period, number> = {
  '24h': 24 * 60 * 60 * 1000,
  '7d': 7 * 24 * 60 * 60 * 1000,
  '30d': 30 * 24 * 60 * 60 * 1000,
};

const isPeriod = (value: unknown): value is Period =>
  value === '24h' || value === '7d' || value === '30d';

const buildUrl = (path: string, params: Record<string, string>, teamId?: string) => {
  const url = new URL(`https://api.vercel.com/v1/query/web-analytics/${path}`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  if (teamId) url.searchParams.set('teamId', teamId);
  return url.toString();
};

export default async function handler(req: RequestLike, res: ResponseLike) {
  const rawPeriod = Array.isArray(req.query.period) ? req.query.period[0] : req.query.period;
  const period: Period = isPeriod(rawPeriod) ? rawPeriod : '7d';

  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;

  if (!token || !projectId) {
    res.status(503).json({
      error: 'not_configured',
      message:
        'Set VERCEL_TOKEN and VERCEL_PROJECT_ID on the hosting platform to enable the analytics dashboard.',
    });
    return;
  }

  const to = Date.now();
  const from = to - PERIOD_MS[period];
  const params = {
    projectId,
    since: new Date(from).toISOString(),
    until: new Date(to).toISOString(),
  };

  const authHeaders = { Authorization: `Bearer ${token}` };

  try {
    const [timeseriesRes, pathsRes] = await Promise.all([
      fetch(buildUrl('visits/aggregate', { ...params, by: 'day' }, teamId), {
        headers: authHeaders,
      }),
      fetch(buildUrl('visits/aggregate', { ...params, by: 'requestPath', limit: '5' }, teamId), {
        headers: authHeaders,
      }),
    ]);

    if (!timeseriesRes.ok) {
      res
        .status(timeseriesRes.status)
        .json({ error: 'upstream_error', message: await timeseriesRes.text() });
      return;
    }

    const timeseries = (await timeseriesRes.json()) as VercelAggregateResponse;
    const paths = pathsRes.ok ? ((await pathsRes.json()) as VercelAggregateResponse) : { data: [] };

    const series: SeriesPoint[] = (timeseries.data ?? []).map((row) => ({
      timestamp: new Date(row.timestamp ?? to).getTime(),
      pageviews: row.pageviews ?? 0,
      visitors: row.visitors ?? 0,
    }));

    const totals = series.reduce(
      (acc, point) => ({
        pageviews: acc.pageviews + point.pageviews,
        visitors: acc.visitors + point.visitors,
      }),
      { pageviews: 0, visitors: 0 }
    );

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json({
      period,
      totals,
      series,
      topPages: (paths.data ?? []).map((row) => ({
        path: row.requestPath ?? '/',
        pageviews: row.pageviews ?? 0,
      })),
    });
  } catch (error) {
    res.status(500).json({
      error: 'fetch_failed',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

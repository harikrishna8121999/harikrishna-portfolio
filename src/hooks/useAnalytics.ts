import { useCallback, useEffect, useState } from 'react';
import type { AnalyticsPeriod, AnalyticsResponse } from '../data/analytics';

interface UseAnalyticsResult {
  data: AnalyticsResponse | null;
  loading: boolean;
  /** 'not_configured' when the deployment has no Vercel token wired up. */
  error: string | null;
  refetch: () => void;
}

export const useAnalytics = (period: AnalyticsPeriod): UseAnalyticsResult => {
  const [data, setData] = useState<AnalyticsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nonce, setNonce] = useState(0);

  const refetch = useCallback(() => setNonce((value) => value + 1), []);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/analytics?period=${period}`, {
          signal: controller.signal,
        });

        // Outside a Vercel deployment there is no serverless function, so the SPA
        // fallback answers with index.html. Treat that as "not wired up yet"
        // rather than a genuine failure.
        if (!response.headers.get('content-type')?.includes('application/json')) {
          setError('not_configured');
          setData(null);
          return;
        }

        const body: unknown = await response.json();

        if (!response.ok) {
          const message =
            typeof body === 'object' && body !== null && 'error' in body
              ? String((body as { error: unknown }).error)
              : 'request_failed';
          setError(message);
          setData(null);
          return;
        }

        setData(body as AnalyticsResponse);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setError('request_failed');
        setData(null);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void load();
    return () => controller.abort();
  }, [period, nonce]);

  return { data, loading, error, refetch };
};

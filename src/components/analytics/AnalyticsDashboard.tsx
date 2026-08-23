import { lazy, Suspense, useEffect, useState } from 'react';
import { analyticsPeriods } from '../../data/analytics';
import type { AnalyticsPeriod } from '../../data/analytics';
import { useAnalytics } from '../../hooks/useAnalytics';
import './Analytics.css';

// echarts is heavy — only pull it once there is a series worth drawing.
const AnalyticsChart = lazy(() => import('./AnalyticsChart'));

interface AnalyticsDashboardProps {
  /** Hands the parent a way to re-run the fetch. */
  onRefetch?: (refetch: () => void) => void;
}

const AnalyticsDashboard = ({ onRefetch }: AnalyticsDashboardProps) => {
  const [period, setPeriod] = useState<AnalyticsPeriod>('7d');
  const { data, loading, error, refetch } = useAnalytics(period);

  useEffect(() => {
    onRefetch?.(refetch);
  }, [onRefetch, refetch]);

  const activePeriod = analyticsPeriods.find((option) => option.value === period);

  return (
    <div className="analytics">
      <div className="analytics-head">
        <p className="analytics-subtitle">
          Live traffic for this site over {activePeriod?.description}.
        </p>

        <div className="analytics-periods" role="group" aria-label="Analytics period">
          {analyticsPeriods.map((option) => (
            <button
              key={option.value}
              className={option.value === period ? 'analytics-period active' : 'analytics-period'}
              onClick={() => setPeriod(option.value)}
              aria-pressed={option.value === period}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {loading && <p className="analytics-message">Fetching numbers…</p>}

      {!loading && error === 'not_configured' && (
        <p className="analytics-message">
          Analytics isn't wired up yet — add <code>VERCEL_TOKEN</code> and{' '}
          <code>VERCEL_PROJECT_ID</code> to the deployment to switch this on.
        </p>
      )}

      {!loading && error && error !== 'not_configured' && (
        <p className="analytics-message error">
          Couldn't load analytics right now.{' '}
          <button className="analytics-retry" onClick={refetch}>
            Try again
          </button>
        </p>
      )}

      {!loading && !error && data && (
        <>
          <div className="analytics-stats">
            <div className="analytics-stat">
              <span className="analytics-stat-label">Pageviews</span>
              <span className="analytics-stat-value">
                {data.totals.pageviews.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="analytics-stat">
              <span className="analytics-stat-label">Visitors</span>
              <span className="analytics-stat-value">
                {data.totals.visitors.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <Suspense fallback={<div className="analytics-chart" />}>
            <AnalyticsChart period={period} series={data.series} />
          </Suspense>

          {data.topPages.length > 0 && (
            <ul className="analytics-pages">
              {data.topPages.map((page) => (
                <li className="analytics-page" key={page.path}>
                  <span className="analytics-page-path">{page.path}</span>
                  <span className="analytics-page-count">
                    {page.pageviews.toLocaleString('en-IN')}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default AnalyticsDashboard;

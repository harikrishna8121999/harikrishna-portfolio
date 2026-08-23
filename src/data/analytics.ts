export type AnalyticsPeriod = '24h' | '7d' | '30d';

export interface AnalyticsSeriesPoint {
  /** epoch ms (bucket start) */
  timestamp: number;
  pageviews: number;
  visitors: number;
}

export interface AnalyticsTotals {
  pageviews: number;
  visitors: number;
}

export interface AnalyticsTopPage {
  path: string;
  pageviews: number;
}

export interface AnalyticsResponse {
  period: AnalyticsPeriod;
  totals: AnalyticsTotals;
  series: AnalyticsSeriesPoint[];
  topPages: AnalyticsTopPage[];
}

export interface AnalyticsPeriodOption {
  value: AnalyticsPeriod;
  label: string;
  /** Human description used in the dashboard subheading */
  description: string;
}

export const analyticsPeriods: AnalyticsPeriodOption[] = [
  { value: '24h', label: '24h', description: 'the last 24 hours' },
  { value: '7d', label: '7d', description: 'the last 7 days' },
  { value: '30d', label: '30d', description: 'the last 30 days' },
];

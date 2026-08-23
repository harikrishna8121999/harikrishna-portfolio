import { useEffect, useRef } from 'react';
// Modular echarts imports — pulling the full `echarts` barrel adds ~1.1 MB to the bundle.
// Aliased: echarts' `use` collides with React's hook naming rules in eslint.
import { init, use as registerECharts } from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import type { AnalyticsPeriod, AnalyticsSeriesPoint } from '../../data/analytics';

registerECharts([LineChart, GridComponent, TooltipComponent, LegendComponent, SVGRenderer]);

interface AnalyticsChartProps {
  period: AnalyticsPeriod;
  series: AnalyticsSeriesPoint[];
}

const labelFor = (timestamp: number, period: AnalyticsPeriod) => {
  const date = new Date(timestamp);
  return period === '24h'
    ? date.toLocaleTimeString('en-IN', { hour: '2-digit', hour12: false })
    : date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
};

const AnalyticsChart = ({ period, series }: AnalyticsChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chart = init(container, undefined, { renderer: 'svg' });

    chart.setOption({
      backgroundColor: 'transparent',
      grid: { top: 24, right: 12, bottom: 24, left: 40 },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#1a1b1c',
        borderColor: '#444444',
        textStyle: { color: '#ffffff', fontFamily: 'Figtree, sans-serif', fontSize: 11 },
      },
      legend: {
        data: ['Pageviews', 'Visitors'],
        textStyle: { color: '#b3b3b3', fontFamily: 'Figtree, sans-serif', fontSize: 11 },
        icon: 'roundRect',
        itemWidth: 8,
        itemHeight: 8,
        top: 0,
        right: 0,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: series.map((point) => labelFor(point.timestamp, period)),
        axisLine: { lineStyle: { color: '#444444' } },
        axisLabel: { color: '#666666', fontFamily: 'JetBrains Mono, monospace', fontSize: 10 },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.06)' } },
        axisLabel: { color: '#666666', fontFamily: 'JetBrains Mono, monospace', fontSize: 10 },
      },
      series: [
        {
          name: 'Pageviews',
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { color: '#ffffff', width: 2 },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(255,255,255,0.18)' },
                { offset: 1, color: 'rgba(255,255,255,0)' },
              ],
            },
          },
          data: series.map((point) => point.pageviews),
        },
        {
          name: 'Visitors',
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { color: '#8c8c8c', width: 2, type: 'dashed' },
          data: series.map((point) => point.visitors),
        },
      ],
    });

    const resize = () => chart.resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      chart.dispose();
    };
  }, [period, series]);

  return <div className="analytics-chart" ref={containerRef} />;
};

export default AnalyticsChart;

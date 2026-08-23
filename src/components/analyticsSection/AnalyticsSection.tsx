import SectionTitle from '../sectionTitle/SectionTitle';
import AnalyticsDashboard from '../analytics/AnalyticsDashboard';

/** Home page analytics teaser — the same dashboard the /analytics page renders. */
const AnalyticsSection = () => {
  return (
    <section className="analytics-section" id="analytics">
      <SectionTitle>Analytics</SectionTitle>
      <div className="section-content">
        <AnalyticsDashboard />
      </div>
    </section>
  );
};

export default AnalyticsSection;

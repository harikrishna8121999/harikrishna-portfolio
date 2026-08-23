import SectionTitle from '../../components/sectionTitle/SectionTitle';
import AnalyticsDashboard from '../../components/analytics/AnalyticsDashboard';
import Footer from '../../components/footer/Footer';

const AnalyticsLayout = () => {
  return (
    <main className="container page">
      <section className="analytics-page">
        <SectionTitle>Analytics</SectionTitle>

        <div className="section-content">
          <AnalyticsDashboard />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AnalyticsLayout;

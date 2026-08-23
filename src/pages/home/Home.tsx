import HeroSection from '../../components/heroSection/HeroSection';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import SkillSection from '../../components/skillSection/SkillSection';
import Experience from '../../components/experience/Experience';
import Calendar from '../../components/calendar/Calendar';
import Projects from '../../components/projects/Projects';
import UsesSection from '../../components/uses/UsesSection';
import AnalyticsSection from '../../components/analyticsSection/AnalyticsSection';
import ContactMe from '../../components/contactMe/ContactMe';
import Footer from '../../components/footer/Footer';

/**
 * Section order is fixed by AGENTS.md:
 * Hero → Skills → Experience → Projects → Uses → Analytics → Contact → Footer
 */
const Home = () => {
  return (
    <main className="container page">
      <HeroSection />

      <section className="skills-section" id="skills">
        <SectionTitle>Skills &amp; Tools</SectionTitle>
        <div className="section-content">
          <SkillSection />
        </div>
      </section>

      <section className="experience-section" id="experience">
        <SectionTitle>Experience</SectionTitle>
        <div className="section-content">
          <Experience />
          <Calendar />
        </div>
      </section>

      <section className="projects-section" id="projects">
        <SectionTitle>Projects</SectionTitle>
        <div className="section-content">
          <Projects />
        </div>
      </section>

      <section className="uses-section" id="uses">
        <SectionTitle>Uses</SectionTitle>
        <div className="section-content">
          <UsesSection />
        </div>
      </section>

      <AnalyticsSection />

      <section className="contact-section" id="contact">
        <SectionTitle>Contact</SectionTitle>
        <div className="section-content">
          <ContactMe />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;

import SectionTitle from '../components/sectionTitle/SectionTitle';
import AllProjects from '../components/projects/AllProjects';
import Footer from '../components/footer/Footer';

const ProjectsLayout = () => {
  return (
    <main className="container page">
      <section className="projects-section">
        <SectionTitle>All Projects</SectionTitle>
        <div className="section-content">
          <AllProjects />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsLayout;

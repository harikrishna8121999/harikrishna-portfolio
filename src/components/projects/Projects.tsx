import { Link } from 'react-router';
import { HiArrowRight } from 'react-icons/hi2';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../../data/projects';
import './Projects.css';

/** Featured projects grid shown on the home page. */
const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <Link className="view-all-link projects-view-all" to="/projects">
        More Projects <HiArrowRight />
      </Link>
    </div>
  );
};

export default Projects;

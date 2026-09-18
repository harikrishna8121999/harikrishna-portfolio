import { Link } from 'react-router';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import ProjectCard from './ProjectCard';
import { allProjects } from '../../data/projects';
import './Projects.css';

/** Every project — rendered on the /projects page. */
const AllProjects = () => {
  return (
    <div className="projects">
      <div className="projects-grid">
        {allProjects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <div className="projects-page-links">
        <Link className="view-all-link" to="/">
          <HiArrowLeft /> Back Home
        </Link>
        <a
          className="view-all-link"
          href="https://github.com/harikrishna8121999"
          target="_blank"
          rel="noreferrer"
        >
          More on GitHub <HiArrowRight />
        </a>
      </div>
    </div>
  );
};

export default AllProjects;

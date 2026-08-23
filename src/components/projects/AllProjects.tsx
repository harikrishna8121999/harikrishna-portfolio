import { Link } from 'react-router';
import { HiArrowLeft } from 'react-icons/hi2';
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

      <Link className="view-all-link projects-view-all" to="/">
        <HiArrowLeft /> Back Home
      </Link>
    </div>
  );
};

export default AllProjects;

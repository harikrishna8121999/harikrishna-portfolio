import { Link } from 'react-router';
import { HiArrowRight } from 'react-icons/hi2';
import './UsesSection.css';

/** Teaser card that links to the full /uses page. */
const UsesSection = () => {
  return (
    <div className="uses-teaser">
      <p className="uses-teaser-text">
        The editors, terminals, and gear I reach for every day — from IntelliJ and Spring Boot to
        the small tools that keep a release calm.
      </p>

      <Link className="uses-teaser-link" to="/uses">
        See what I use <HiArrowRight />
      </Link>
    </div>
  );
};

export default UsesSection;

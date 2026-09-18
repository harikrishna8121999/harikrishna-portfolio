import { NavLink } from 'react-router';
import { FaStar } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/blogs', label: 'Blogs', end: false },
  { to: '/resume', label: 'Resume', end: false },
];

const REPO_URL = 'https://github.com/harikrishna8121999/harikrishna-portfolio';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a className="navbar-star" href={REPO_URL} target="_blank" rel="noreferrer">
          <FaStar className="navbar-star-icon" />
          <span>Star</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

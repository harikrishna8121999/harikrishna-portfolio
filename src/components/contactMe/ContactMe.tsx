import { Link } from 'react-router';
import { FiExternalLink } from 'react-icons/fi';
import { socialLinks } from '../../data/socialLinks';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-card">
      <h3 className="contact-title">Let's build something</h3>
      <p className="contact-desc">
        Open to interesting backend and full-stack problems, and always happy to talk shop about
        Java, email infrastructure, or AI tooling. Pick whichever inbox suits you.
      </p>

      <ul className="contact-links">
        {socialLinks.map((link) => {
          const isInternal = link.url.startsWith('/');
          const content = (
            <>
              <span className="contact-link-icon" style={{ color: link.color }}>
                {link.icon}
              </span>
              <span className="contact-link-name">{link.name}</span>
              {!isInternal && <FiExternalLink className="contact-link-out" />}
            </>
          );

          return (
            <li key={link.name}>
              {isInternal ? (
                <Link className="contact-link" to={link.url}>
                  {content}
                </Link>
              ) : (
                <a className="contact-link" href={link.url} target="_blank" rel="noreferrer">
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactMe;

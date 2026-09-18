import type { ReactNode } from 'react';
import './Experience.css';

interface ExperienceCardProps {
  logo?: ReactNode;
  logoUrl?: string;
  company: string;
  links?: { url: string; icon: ReactNode }[];
  status: string;
  role: string;
  dates: string;
  location: string;
  description: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const ExperienceCard = ({
  logo,
  logoUrl,
  company,
  links,
  status,
  role,
  dates,
  location,
  description,
  isExpanded,
  onToggle,
}: ExperienceCardProps) => {
  const hasDescription = description.length > 0;

  return (
    <li className="experience-item">
      <span className={`experience-dot ${status}`} aria-hidden="true" />

      <div className="experience-card">
        <div className="experience-head">
          <div className="experience-logo">
            {logo ?? (logoUrl ? <img src={logoUrl} alt={`${company} logo`} /> : null)}
          </div>

          <div className="experience-headings">
            <div className="experience-company-row">
              <h3 className="experience-company">{company}</h3>
              {links?.map((link) => (
                <a
                  key={link.url}
                  className="experience-company-link"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${company} website`}
                >
                  {link.icon}
                </a>
              ))}
              <span className={`experience-status ${status}`}>{status}</span>
            </div>
            <p className="experience-role">{role}</p>
            <p className="experience-meta">
              {dates} <span className="experience-meta-sep">—</span> {location}
            </p>
          </div>
        </div>

        {hasDescription && (
          <>
            <div className={isExpanded ? 'experience-body expanded' : 'experience-body'}>
              <div className="experience-body-inner">
                <ul className="experience-points">
                  {description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="experience-toggle" onClick={onToggle} aria-expanded={isExpanded}>
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default ExperienceCard;

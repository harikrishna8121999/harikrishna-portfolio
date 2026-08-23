import { useState } from 'react';
import type { IconType } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { LuConstruction } from 'react-icons/lu';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import Tooltip from '../tooltip/Tooltip';
import './Projects.css';

interface ProjectCardProps {
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  sponsor?: { icon: IconType };
  stats?: string;
}

const ProjectCard = ({
  banner,
  name,
  desc,
  tech,
  github,
  live,
  demoWarning,
  isUnderDevelopment,
  isPrivate,
  sponsor,
  stats,
}: ProjectCardProps) => {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const SponsorIcon = sponsor?.icon;

  return (
    <article className="project-card">
      <div className="project-banner-wrap">
        {!bannerLoaded && <span className="project-banner-skeleton" />}
        <img
          className="project-banner"
          src={banner}
          alt={`${name} preview`}
          loading="lazy"
          // A cached image can finish before React attaches onLoad, which would
          // leave the skeleton up forever — the ref catches that case.
          ref={(node) => {
            if (node?.complete) setBannerLoaded(true);
          }}
          onLoad={() => setBannerLoaded(true)}
          onError={() => setBannerLoaded(true)}
        />
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-name">{name}</h3>

          {stats && <span className="project-badge">{stats}</span>}

          {SponsorIcon && (
            <span className="project-badge">
              <SponsorIcon /> Sponsored
            </span>
          )}

          {isUnderDevelopment && (
            <Tooltip text="Still being built" position="top">
              <span className="project-flag under-development">
                <LuConstruction /> WIP
              </span>
            </Tooltip>
          )}

          {isPrivate && (
            <Tooltip text="Source code is private" position="top">
              <span className="project-flag private">
                <RiGitRepositoryPrivateLine /> Private
              </span>
            </Tooltip>
          )}
        </div>

        <p className="project-desc">{desc}</p>

        <ul className="project-tech">
          {tech.map((item) => (
            <li className="project-tech-pill" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <div className="project-links">
          {!isPrivate && (
            <a className="action-button" href={github} target="_blank" rel="noreferrer">
              <FaGithub size={12} /> Code
            </a>
          )}

          {live &&
            (demoWarning ? (
              <Tooltip text="The demo may be sleeping — give it a moment" position="top">
                <a className="action-button" href={live} target="_blank" rel="noreferrer">
                  <FiExternalLink size={12} /> Live
                </a>
              </Tooltip>
            ) : (
              <a className="action-button" href={live} target="_blank" rel="noreferrer">
                <FiExternalLink size={12} /> Live
              </a>
            ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

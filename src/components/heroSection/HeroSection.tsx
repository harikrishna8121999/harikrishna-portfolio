import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { LuTimer } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { userImages } from '../../data/images';
import { heroSocialLinks, twitterProfile, githubProfile } from '../../data/socialLinks';
import { getDailyDecoration } from '../../utils/ImageDecoration';
import './HeroSection.css';

const NAME = 'HariKrishna V Shetty';
const EMAIL = 'harikrishnavshetty@gmail.com';

const formatIST = (date: Date) =>
  date.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

const HeroSection = () => {
  const [time, setTime] = useState(() => formatIST(new Date()));
  const [imgLoaded, setImgLoaded] = useState(false);
  const [decorationInfo] = useState(() => getDailyDecoration());

  useEffect(() => {
    const id = setInterval(() => setTime(formatIST(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-top">
        <div className="hero-profile">
          <div className="hero-avatar-wrap">
            {!imgLoaded && <span className="hero-avatar-skeleton" />}
            <img
              className="hero-avatar"
              src={userImages.profile.avatar}
              alt={NAME}
              // A cached image can finish before React attaches onLoad, which would
              // leave the skeleton up forever — the ref catches that case.
              ref={(node) => {
                if (node?.complete) setImgLoaded(true);
              }}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgLoaded(true)}
              width={96}
              height={96}
            />
          </div>

          <div className="hero-info">
            <h1 className="hero-name">
              {NAME}
              <RiVerifiedBadgeFill className="hero-verified" aria-label="Verified" />
            </h1>

            <div className="hero-status">
              <span className="hero-status-dot" />
              <span>Building</span>
              <a
                className="hero-status-link"
                href="https://letro.ai"
                target="_blank"
                rel="noreferrer"
              >
                letro.ai
              </a>
            </div>

            <div className="hero-meta">
              <span className="hero-meta-item">
                <GrLocation className="hero-meta-icon" />
                Bengaluru, India
              </span>
              <span className="hero-meta-sep">—</span>
              <span className="hero-meta-item">
                <LuTimer className="hero-meta-icon" />
                {time} IST
              </span>
            </div>
          </div>
        </div>

        <img
          className="hero-decoration"
          src={decorationInfo.src}
          alt={decorationInfo.alt}
          aria-hidden="true"
        />
      </div>

      <ul className="hero-bio">
        <li>
          Full-Stack Software Engineer <strong>(SDE-2)</strong> with <strong>5+ years</strong>{' '}
          shipping production-grade SaaS across frontend and backend.
        </li>
        <li>
          Currently at <strong>Poppulo</strong>, building the email content platform behind
          enterprise communications, covering templates, personalization, and deliverability at
          scale.
        </li>
        <li>
          Interested in <strong>email infrastructure</strong> and always learning{' '}
          <strong>AI concepts</strong> as the space evolves.
        </li>
      </ul>

      <div className="hero-social-cards">
        <div className="hero-social-card">
          <span className="hero-social-avatar">
            <FaXTwitter />
          </span>
          <div className="hero-social-info">
            <span className="hero-social-name">
              <span className="hero-social-name-text">{NAME}</span>
              <RiVerifiedBadgeFill className="hero-social-verified" aria-label="Verified" />
            </span>
            <span className="hero-social-handle">@{twitterProfile.handle}</span>
          </div>
          <a
            className="action-button hero-social-follow"
            href={twitterProfile.url}
            target="_blank"
            rel="noreferrer"
          >
            Follow
          </a>
        </div>

        <div className="hero-social-card">
          <span className="hero-social-avatar">
            <FaGithub />
          </span>
          <div className="hero-social-info">
            <span className="hero-social-name">
              <span className="hero-social-name-text">GitHub</span>
            </span>
            <span className="hero-social-handle">@{githubProfile.handle}</span>
          </div>
          <a
            className="action-button hero-social-follow"
            href={githubProfile.url}
            target="_blank"
            rel="noreferrer"
          >
            Follow
          </a>
        </div>
      </div>

      <div className="hero-icon-row">
        <a className="action-button hero-email" href={`mailto:${EMAIL}`}>
          <FaEnvelope size={12} />
          Email me
        </a>
        <span className="hero-icon-divider" aria-hidden="true" />
        {heroSocialLinks.map((link) => {
          const isInternal = link.url.startsWith('/');
          return isInternal ? (
            <Link
              key={link.name}
              className="hero-icon-link"
              to={link.url}
              aria-label={link.name}
              style={{ color: link.color }}
            >
              {link.icon}
            </Link>
          ) : (
            <a
              key={link.name}
              className="hero-icon-link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              style={{ color: link.color }}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;

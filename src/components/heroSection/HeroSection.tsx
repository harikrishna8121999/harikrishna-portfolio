import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineQrCode } from 'react-icons/hi2';
import { LuTimer } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';
import { userImages } from '../../data/images';
import { heroSocialLinks } from '../../data/socialLinks';
import { getDailyDecoration } from '../../utils/ImageDecoration';
import Tooltip from '../tooltip/Tooltip';
import './HeroSection.css';

const NAME = 'HariKrishna V Shetty';
const USERNAME = 'harikrishna8121999';
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
  const [showQR, setShowQR] = useState(false);
  const [decorationInfo] = useState(() => getDailyDecoration());

  useEffect(() => {
    const id = setInterval(() => setTime(formatIST(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-top">
        <div className="hero-avatar-wrap">
          {!imgLoaded && <span className="hero-avatar-skeleton" />}
          <img
            className="hero-avatar"
            src={showQR ? userImages.profile.qrCode : userImages.profile.avatar}
            alt={showQR ? `QR code linking to ${NAME}'s portfolio` : NAME}
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
          <Tooltip text={showQR ? 'Show photo' : 'Show QR code'} position="right">
            <button
              className="hero-qr-toggle"
              onClick={() => setShowQR((prev) => !prev)}
              aria-label={showQR ? 'Show photo' : 'Show QR code'}
            >
              <HiOutlineQrCode size={16} />
            </button>
          </Tooltip>
        </div>

        <img
          className="hero-decoration"
          src={decorationInfo.src}
          alt={decorationInfo.alt}
          aria-hidden="true"
        />
      </div>

      <h1 className="hero-name">
        {NAME}
        <RiVerifiedBadgeFill className="hero-verified" aria-label="Verified" />
      </h1>

      <a
        className="hero-username"
        href={`https://github.com/${USERNAME}`}
        target="_blank"
        rel="noreferrer"
      >
        @{USERNAME}
      </a>

      <div className="hero-status">
        <span className="hero-status-dot" />
        <span>Building</span>
        <a
          className="hero-status-link"
          href="https://www.npmjs.com/package/antigravity-workflows"
          target="_blank"
          rel="noreferrer"
        >
          antigravity-workflows
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

      <ul className="hero-bio">
        <li>
          Full-Stack Software Engineer <strong>(SDE-2)</strong> with <strong>4+ years</strong>{' '}
          shipping production-grade SaaS across frontend and backend.
        </li>
        <li>
          Currently at <strong>Poppulo</strong>, building an enterprise email content platform —
          drag-and-drop builders, templates, and microsites.
        </li>
        <li>
          Off the clock I ship <strong>open-source AI developer tooling</strong>: MCP servers, agent
          workflows, and small SaaS products.
        </li>
      </ul>

      <div className="hero-links">
        {heroSocialLinks.map((link) => {
          const isInternal = link.url.startsWith('/');
          const content = (
            <>
              <span className="hero-link-icon" style={{ color: link.color }}>
                {link.icon}
              </span>
              {link.name}
            </>
          );

          return isInternal ? (
            <Link key={link.name} className="hero-link" to={link.url}>
              {content}
            </Link>
          ) : (
            <a
              key={link.name}
              className="hero-link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </a>
          );
        })}
      </div>

      <a className="action-button hero-email" href={`mailto:${EMAIL}`}>
        <FaEnvelope size={12} />
        Email me
      </a>
    </section>
  );
};

export default HeroSection;

import type { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaNpm } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

export interface SocialLink {
  /** Platform display name (e.g. "GitHub") */
  name: string;
  /** Profile URL or mailto: link */
  url: string;
  /** react-icons component */
  icon: ReactNode;
  /** Brand color hex (used for hover effects) */
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/harikrishna8121999',
    icon: <FaGithub />,
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harikrishna-v-shetty-56b43215a/',
    icon: <FaLinkedin />,
    color: '#0077b5',
  },
  {
    name: 'npm',
    url: 'https://www.npmjs.com/~harikrishna8121999',
    icon: <FaNpm />,
    color: '#cb3837',
  },
  {
    name: 'Resume',
    url: '/resume',
    icon: <HiOutlineDocumentText />,
    color: '#f59e0b',
  },
  {
    name: 'Email',
    url: 'mailto:harikrishnavshetty@gmail.com',
    icon: <FaEnvelope />,
    color: '#22c55e',
  },
];

/** Subset rendered as icon buttons inside the hero card. */
export const heroSocialLinks = socialLinks.filter((link) =>
  ['GitHub', 'LinkedIn', 'npm', 'Resume'].includes(link.name)
);

import type { IconType } from 'react-icons';
import { userImages } from './images';

export interface ProjectData {
  /** Image URL for the project banner/screenshot */
  banner: string;
  /** Display name of the project */
  name: string;
  /** Short description (1-2 sentences) */
  desc: string;
  /** Technology tags shown as pills */
  tech: string[];
  /** GitHub repository URL */
  github: string;
  /** Live demo URL (optional) */
  live?: string;
  /** Show warning that demo may not work */
  demoWarning?: boolean;
  /** Show "under development" badge */
  isUnderDevelopment?: boolean;
  /** Show "private project" badge (no code available) */
  isPrivate?: boolean;
  /** Sponsor badge with icon */
  sponsor?: { icon: IconType };
  /** Stats badge text (e.g. "4k+ downloads") */
  stats?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    banner: userImages.projects.project1,
    name: 'antigravity-workflows',
    desc: 'Community-driven workflows for Antigravity AI — reusable prompts and automation for AI coding assistants, shipped as an npm package.',
    tech: ['JavaScript', 'Node.js', 'npm', 'LLM Tooling'],
    github: 'https://github.com/harikrishna8121999/antigravity-workflows',
    live: 'https://www.npmjs.com/package/antigravity-workflows',
    stats: '177+ stars',
  },
  {
    banner: userImages.projects.project2,
    name: 'CleanupAI',
    desc: 'Production AI image SaaS for object removal, background removal, and headshot generation, backed by the Replicate API (LAMA, FLUX, BRIA).',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Firebase'],
    github: 'https://github.com/harikrishna8121999/cleanup-ai-online',
    live: 'https://www.cleanupai.online/',
  },
  {
    banner: userImages.projects.project3,
    name: 'email-design-mcp',
    desc: 'MCP server that designs and generates responsive, brand-aware email templates with MJML — works in Claude, Cursor, and VS Code with no API keys.',
    tech: ['TypeScript', 'MCP', 'MJML', 'Node.js'],
    github: 'https://github.com/harikrishna8121999/email-design-mcp',
    live: 'https://www.npmjs.com/package/email-design-mcp',
    stats: 'npm package',
  },
  {
    banner: userImages.projects.project4,
    name: 'JobPilot AI',
    desc: 'Job search automation that lives in a spreadsheet: finds, matches, and applies to roles using Google Sheets, the Gemini API, and Gmail.',
    tech: ['Google Apps Script', 'Gemini API', 'Gmail API', 'JavaScript'],
    github: 'https://github.com/harikrishna8121999/jobpilot-ai',
  },
];

export const additionalProjects: ProjectData[] = [
  {
    banner: userImages.projects.project5,
    name: 'EmailTestLab',
    desc: 'SaaS tool that validates and previews email HTML across devices and clients, built and iterated on with early user feedback.',
    tech: ['React', 'TypeScript', 'Node.js', 'Email Rendering'],
    github: 'https://github.com/harikrishna8121999',
    live: 'https://www.emailtestlab.info/',
    isPrivate: true,
  },
  {
    banner: userImages.projects.project6,
    name: 'Reddit Clone',
    desc: 'Full-stack Reddit clone with Spring Boot REST APIs, JWT auth, subreddits, posts, votes, and comment threads.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
    github: 'https://github.com/harikrishna8121999/redditclone',
  },
  {
    banner: userImages.projects.project7,
    name: 'Amazon Clone',
    desc: 'E-commerce front end with product listing, cart state, and checkout flow — an early React and Firebase build.',
    tech: ['React', 'JavaScript', 'Firebase'],
    github: 'https://github.com/harikrishna8121999/amazon-clone1',
  },
  {
    banner: userImages.projects.project8,
    name: 'Java Design Patterns',
    desc: 'Worked examples of the classic GoF design patterns in Java, written as a reference while preparing for system design interviews.',
    tech: ['Java', 'Design Patterns', 'OOP'],
    github: 'https://github.com/harikrishna8121999/JavaDesignPatterns',
  },
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];

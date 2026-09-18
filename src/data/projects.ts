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
  /** GitHub repository URL, if public */
  github?: string;
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
    banner: userImages.projects.letro,
    name: 'letro.ai',
    desc: 'AI-powered email designer that generates brand-perfect MJML, lets you refine it visually, and exports ready-to-send HTML.',
    tech: ['AI Email Design', 'MJML', 'Visual Editor', 'HTML Export'],
    live: 'https://letro.ai',
    isUnderDevelopment: true,
  },
  {
    banner: userImages.projects.antigravityWorkflows,
    name: 'antigravity-workflows',
    desc: 'Community-driven workflows for Antigravity AI — reusable prompts and automation for AI coding assistants, shipped as an npm package.',
    tech: ['JavaScript', 'Node.js', 'npm', 'LLM Tooling'],
    github: 'https://github.com/harikrishna8121999/antigravity-workflows',
    live: 'https://www.npmjs.com/package/antigravity-workflows',
    stats: '182 stars',
  },
  {
    banner: userImages.projects.mcpRedTeamJunit,
    name: 'MCP RedTeam JUnit',
    desc: 'JUnit-native security testing for MCP servers and MCP-connected Java agents, covering tool poisoning, schema poisoning, tool shadowing, and canary exfiltration.',
    tech: ['Java', 'MCP Security', 'JUnit 5', 'Maven'],
    github: 'https://github.com/mcpredteam/mcp-redteam-junit',
    live: 'https://central.sonatype.com/artifact/io.github.mcpredteam/mcp-redteam-junit',
    stats: 'Open source',
  },
  {
    banner: userImages.projects.agenticMigrationHarness,
    name: 'agentic-migration-harness',
    desc: 'A hands-free AI harness for migrating legacy test suites, demonstrated with a Protractor-to-Playwright migration and verifiable dry run.',
    tech: ['JavaScript', 'Playwright', 'Protractor', 'AI Agents'],
    github: 'https://github.com/harikrishna8121999/agentic-migration-harness',
  },
  {
    banner: userImages.projects.emailTestLab,
    name: 'EmailTestLab',
    desc: 'SaaS tool for validating and previewing email HTML across devices and email clients.',
    tech: ['React', 'TypeScript', 'Node.js', 'Email Rendering'],
    live: 'https://www.emailtestlab.info/',
    isPrivate: true,
  },
  {
    banner: userImages.projects.cleanupAi,
    name: 'CleanupAI',
    desc: 'Production AI image SaaS for object removal, background removal, and headshot generation, backed by the Replicate API (LAMA, FLUX, BRIA).',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Firebase'],
    github: 'https://github.com/harikrishna8121999/cleanup-ai-online',
    live: 'https://www.cleanupai.online/',
  },
  {
    banner: userImages.projects.jobpilotAi,
    name: 'JobPilot AI',
    desc: 'Job search automation that lives in a spreadsheet: finds, matches, and applies to roles using Google Sheets, the Gemini API, and Gmail.',
    tech: ['Google Apps Script', 'Gemini API', 'Gmail API', 'JavaScript'],
    github: 'https://github.com/harikrishna8121999/jobpilot-ai',
  },
  {
    banner: userImages.projects.emailDesignMcp,
    name: 'email-design-mcp',
    desc: 'MCP server that designs and generates responsive, brand-aware email templates with MJML — works in Claude, Cursor, and VS Code with no API keys.',
    tech: ['TypeScript', 'MCP', 'MJML', 'Node.js'],
    github: 'https://github.com/harikrishna8121999/email-design-mcp',
    live: 'https://www.npmjs.com/package/email-design-mcp',
    stats: 'npm package',
  },
];

export const additionalProjects: ProjectData[] = [];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];

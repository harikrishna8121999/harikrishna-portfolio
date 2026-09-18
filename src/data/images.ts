/**
 * Every image path used across the site. See CONTENT_SCHEMA.md → `userImages`.
 * Project banners use GitHub's Open Graph renderer so the card art stays in sync
 * with each repository's README/social preview.
 */
const ghSocial = (repo: string) =>
  `https://opengraph.githubassets.com/1/harikrishna8121999/${repo}`;

export const userImages = {
  profile: {
    avatar: '/images/profile/pfp-latest.jpg',
  },
  projects: {
    letro: 'https://letro.ai/images/og-card.jpg',
    emailTestLab: '/images/projects/emailtestlab.svg',
    antigravityWorkflows: ghSocial('antigravity-workflows'),
    agenticMigrationHarness: ghSocial('agentic-migration-harness'),
    cleanupAi: ghSocial('cleanup-ai-online'),
    emailDesignMcp: ghSocial('email-design-mcp'),
    jobpilotAi: ghSocial('jobpilot-ai'),
    mcpRedTeamJunit: 'https://opengraph.githubassets.com/1/mcpredteam/mcp-redteam-junit',
  },
  decorations: {
    soulLeavingBody: '/images/decorations/soul-leaving-body.svg',
    candlelightDark: '/images/decorations/candlelight-dark.svg',
    shy: '/images/decorations/shy.svg',
    blossomBurst: '/images/decorations/blossom-burst.svg',
  },
  misc: {
    poppulo: '/images/misc/poppulo.svg',
    sacumen: '/images/misc/sacumen.png',
    synechron: '/images/misc/synechron.png',
  },
};

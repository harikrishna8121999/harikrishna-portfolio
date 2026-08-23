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
    qrCode: '/images/profile/qr-code.svg',
  },
  projects: {
    project1: ghSocial('antigravity-workflows'),
    project2: ghSocial('cleanup-ai-online'),
    project3: ghSocial('email-design-mcp'),
    project4: ghSocial('jobpilot-ai'),
    project5: '/images/projects/emailtestlab.svg',
    project6: ghSocial('redditclone'),
    project7: ghSocial('amazon-clone1'),
    project8: ghSocial('JavaDesignPatterns'),
  },
  decorations: {
    soulLeavingBody: '/images/decorations/soul-leaving-body.svg',
    cyberKatana: '/images/decorations/cyber-katana.svg',
    candlelightDark: '/images/decorations/candlelight-dark.svg',
    shy: '/images/decorations/shy.svg',
    blossomBurst: '/images/decorations/blossom-burst.svg',
  },
  misc: {
    poppulo: '/images/misc/poppulo.svg',
    sacumen: '/images/misc/sacumen.svg',
    synechron: '/images/misc/synechron.svg',
  },
};

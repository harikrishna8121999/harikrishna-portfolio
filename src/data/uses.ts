export interface UsesItem {
  /** What category this item belongs to (e.g. "Keyboard") */
  label: string;
  /** Product/tool name */
  name: string;
  /** Optional purchase/info link */
  link?: string;
}

export interface UsesCategory {
  /** Section heading (e.g. "Software", "Hardware") */
  category: string;
  /** Items in this category */
  items: UsesItem[];
}

export const usesData: UsesCategory[] = [
  {
    category: 'Software',
    items: [
      { label: 'Editor', name: 'IntelliJ IDEA Ultimate', link: 'https://www.jetbrains.com/idea/' },
      { label: 'Editor', name: 'VS Code', link: 'https://code.visualstudio.com/' },
      { label: 'AI Pair', name: 'Claude Code', link: 'https://claude.com/claude-code' },
      { label: 'Terminal', name: 'Windows Terminal + PowerShell' },
      { label: 'API Client', name: 'Postman', link: 'https://www.postman.com/' },
      { label: 'Containers', name: 'Docker Desktop', link: 'https://www.docker.com/' },
      {
        label: 'Database',
        name: 'MySQL Workbench',
        link: 'https://www.mysql.com/products/workbench/',
      },
      { label: 'Testing', name: 'Playwright', link: 'https://playwright.dev/' },
      { label: 'Load Testing', name: 'JMeter', link: 'https://jmeter.apache.org/' },
      { label: 'Code Quality', name: 'SonarQube', link: 'https://www.sonarsource.com/' },
      { label: 'Browser', name: 'Google Chrome', link: 'https://www.google.com/chrome/' },
      { label: 'Notes', name: 'Notion', link: 'https://www.notion.so/' },
      { label: 'Design', name: 'Figma', link: 'https://www.figma.com/' },
      { label: 'Hosting', name: 'Vercel', link: 'https://vercel.com/' },
    ],
  },
  {
    // TODO: swap these for your actual gear — these are placeholders, not verified.
    category: 'Hardware',
    items: [
      { label: 'Laptop', name: 'Work-issue Windows laptop' },
      { label: 'Monitor', name: 'External 24" 1080p display' },
      { label: 'Keyboard', name: 'Mechanical keyboard' },
      { label: 'Mouse', name: 'Wireless mouse' },
      { label: 'Audio', name: 'Over-ear headphones' },
      { label: 'Phone', name: 'Android' },
    ],
  },
];

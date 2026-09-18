import { useState } from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import './BlogLayout.css';

export interface BlogPost {
  url: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  coverImage: string;
}

export const posts: BlogPost[] = [
  {
    url: 'https://dev.to/harikrishnavshetty/i-built-a-hands-free-ai-harness-for-migrating-legacy-tests-3pab',
    title: 'I Built a Hands-Free AI Harness for Migrating Legacy Tests',
    excerpt:
      'Point it at a test spec. Agents do the migration; the harness independently verifies the evidence before a change can ship.',
    date: '2026-09-12',
    readingTime: '7 min read',
    tags: ['AI', 'Testing', 'Playwright', 'Automation'],
    coverImage:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwdya3al28qmhrsnzraas.png',
  },
  {
    url: 'https://dev.to/harikrishnavshetty/the-email-headers-that-actually-stop-out-of-office-auto-replies-d27',
    title: 'The Email Headers That Actually Stop Out-of-Office Auto-Replies',
    excerpt:
      'Which header actually suppresses OOF auto-replies on marketing and transactional email, which ones are only best-effort, and when not to use them at all.',
    date: '2026-09-07',
    readingTime: '8 min read',
    tags: ['Email', 'API', 'SMTP', 'SES'],
    coverImage:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fgypwo6p0rpj02fxdaflu.png',
  },
  {
    url: 'https://dev.to/harikrishnavshetty/i-built-the-standard-ai-agent-hijack-demo-it-failed-20-out-of-20-times-27c1',
    title: 'I Built the Standard AI Agent Hijack Demo. It Failed 20 Out of 20 Times.',
    excerpt:
      "The caricatured 'ignore all previous instructions' payload scored 0/20 against a local model. A boring tool schema with an apiKey field scored 20/20 — if your agent security test only fires the dramatic payload, you're measuring the payload.",
    date: '2026-08-26',
    readingTime: '9 min read',
    tags: ['Java', 'Security', 'AI', 'MCP'],
    coverImage:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fvpxisbcoa0ot2krcm05d.png',
  },
];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const BlogCard = ({ post }: { post: BlogPost }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <a className="blog-card" href={post.url} target="_blank" rel="noopener noreferrer">
      <div className="blog-card-image-wrap">
        {!imageLoaded && <span className="blog-card-image-skeleton" />}
        <img
          className="blog-card-image"
          src={post.coverImage}
          alt=""
          loading="lazy"
          // A cached image can finish before React attaches onLoad, which would
          // leave the skeleton up forever — the ref catches that case.
          ref={(node) => {
            if (node?.complete) setImageLoaded(true);
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>

      <div className="blog-card-body">
        <div className="blog-card-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="blog-card-sep">—</span>
          <span>{post.readingTime}</span>
          <span className="blog-card-sep">—</span>
          <span>dev.to</span>
        </div>

        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>

        <ul className="blog-card-tags">
          {post.tags.map((tag) => (
            <li className="blog-card-tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

const BlogLayout = () => {
  return (
    <main className="container page">
      <section className="blogs-page">
        <SectionTitle>Blogs</SectionTitle>

        <p className="blogs-intro">
          Notes from building production SaaS and open-source developer tooling. Written when
          something was hard enough to be worth writing down.
        </p>

        <ul className="blogs-list">
          {posts.map((post) => (
            <li key={post.url}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
};

export default BlogLayout;

import { Link } from 'react-router';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import './BlogLayout.css';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    slug: 'shipping-an-mcp-server',
    title: 'Shipping an MCP server that people actually install',
    excerpt:
      'What I learned publishing email-design-mcp to npm — picking a tool surface, keeping it key-free, and the small details that decide whether anyone keeps it installed.',
    date: '2026-03-09',
    readingTime: '6 min read',
    tags: ['MCP', 'TypeScript', 'Developer Tools'],
  },
];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

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
            <li key={post.slug}>
              <Link className="blog-card" to={`/blogs/${post.slug}`}>
                <div className="blog-card-meta">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="blog-card-sep">—</span>
                  <span>{post.readingTime}</span>
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
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
};

export default BlogLayout;

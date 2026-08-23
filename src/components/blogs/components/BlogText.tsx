import type { ReactNode } from 'react';
import './Blog.css';

interface BlogTextProps {
  children: ReactNode;
}

export const BlogTitle = ({ children }: BlogTextProps) => (
  <h1 className="blog-title">{children}</h1>
);

export const BlogHeader = ({ children }: BlogTextProps) => (
  <h2 className="blog-header">{children}</h2>
);

export const BlogDesc = ({ children }: BlogTextProps) => <p className="blog-desc">{children}</p>;

export const BlogParagraph = ({ children }: BlogTextProps) => (
  <p className="blog-paragraph">{children}</p>
);

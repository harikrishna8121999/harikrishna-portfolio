import type { ReactNode } from 'react';
import './Blog.css';

interface BlogTextLineProps {
  icon: ReactNode;
  children: ReactNode;
}

const BlogTextLine = ({ icon, children }: BlogTextLineProps) => (
  <p className="blog-text-line">
    <span className="blog-text-line-icon">{icon}</span>
    {children}
  </p>
);

export default BlogTextLine;

import type { ReactNode } from 'react';
import './Blog.css';

interface BlogListProps {
  items: ReactNode[];
}

export const BlogOrderedList = ({ items }: BlogListProps) => (
  <ol className="blog-list ordered">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ol>
);

export const BlogUnorderedList = ({ items }: BlogListProps) => (
  <ul className="blog-list unordered">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

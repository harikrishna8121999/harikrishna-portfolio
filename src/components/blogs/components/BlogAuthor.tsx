import type { ReactNode } from 'react';
import './Blog.css';

interface BlogAuthorProps {
  name?: string;
  avatar?: string;
  children: ReactNode;
}

const BlogAuthor = ({
  name = 'HariKrishna V Shetty',
  avatar = 'https://github.com/harikrishna8121999.png',
  children,
}: BlogAuthorProps) => (
  <div className="blog-author">
    <img className="blog-author-avatar" src={avatar} alt={name} loading="lazy" />
    <div>
      <p className="blog-author-name">{name}</p>
      <div className="blog-author-reply">{children}</div>
    </div>
  </div>
);

export default BlogAuthor;

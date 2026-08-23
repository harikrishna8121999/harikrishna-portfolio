import type { ReactNode } from 'react';
import { FiCheck } from 'react-icons/fi';
import { LuConstruction } from 'react-icons/lu';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import './Blog.css';

interface AlertProps {
  title?: string;
  children: ReactNode;
}

export const BlogTip = ({ title = 'Tip', children }: AlertProps) => (
  <aside className="blog-alert tip">
    <p className="blog-alert-title">
      <FiCheck className="blog-alert-icon" /> {title}
    </p>
    <div className="blog-alert-body">{children}</div>
  </aside>
);

export const BlogWarn = ({ title = 'Warning', children }: AlertProps) => (
  <aside className="blog-alert warn">
    <p className="blog-alert-title">
      <LuConstruction className="blog-alert-icon" /> {title}
    </p>
    <div className="blog-alert-body">{children}</div>
  </aside>
);

export const BlogDontDo = ({ title = "Don't Do This", children }: AlertProps) => (
  <aside className="blog-alert dont">
    <p className="blog-alert-title">
      <RiGitRepositoryPrivateLine className="blog-alert-icon" /> {title}
    </p>
    <div className="blog-alert-body">{children}</div>
  </aside>
);

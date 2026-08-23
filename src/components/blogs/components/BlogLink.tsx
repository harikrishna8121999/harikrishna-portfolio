import type { ReactNode } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import './Blog.css';

interface BlogLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export const BlogLink = ({ href, children, external = true }: BlogLinkProps) => (
  <a
    className="blog-link"
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
  >
    {children}
    {external && <FiExternalLink className="blog-link-icon" />}
  </a>
);

interface BlogButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
}

export const BlogButton = ({ href, onClick, children, icon }: BlogButtonProps) => {
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  return href ? (
    <a className="blog-button" href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <button className="blog-button" onClick={onClick}>
      {content}
    </button>
  );
};

interface BlogButtonsContainerProps {
  children: ReactNode;
  direction?: 'row' | 'column';
}

export const BlogButtonsContainer = ({
  children,
  direction = 'row',
}: BlogButtonsContainerProps) => <div className={`blog-buttons ${direction}`}>{children}</div>;

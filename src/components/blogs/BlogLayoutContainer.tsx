import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { HiArrowLeft } from 'react-icons/hi2';
import Footer from '../footer/Footer';
import './BlogLayoutContainer.css';

interface BlogLayoutContainerProps {
  children: ReactNode;
}

/** Wraps an individual blog post with the standard container and a nav footer. */
const BlogLayoutContainer = ({ children }: BlogLayoutContainerProps) => {
  return (
    <main className="container page blog-post">
      <Link className="view-all-link blog-post-back" to="/blogs">
        <HiArrowLeft /> All posts
      </Link>

      <article className="blog-post-body">{children}</article>

      <Footer />
    </main>
  );
};

export default BlogLayoutContainer;

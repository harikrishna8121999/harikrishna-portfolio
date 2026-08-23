import type { ReactNode } from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: ReactNode;
}

/** Decorated section heading with corner accents. */
const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <span className="section-title-corner top-left" />
      <span className="section-title-corner top-right" />
      <span className="section-title-corner bottom-left" />
      <span className="section-title-corner bottom-right" />
      <h2 className="section-title-text">{children}</h2>
    </div>
  );
};

export default SectionTitle;

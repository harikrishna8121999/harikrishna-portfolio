import type { ReactNode } from 'react';
import './Blog.css';

interface HighlightProps {
  children: ReactNode;
}

export const WhiteBoldHighlight = ({ children }: HighlightProps) => (
  <span className="blog-highlight white-bold">{children}</span>
);

export const NormalHighlight = ({ children }: HighlightProps) => (
  <span className="blog-highlight normal">{children}</span>
);

interface CustomColorHighlightProps extends HighlightProps {
  color: string;
}

export const CustomColorHighlight = ({ color, children }: CustomColorHighlightProps) => (
  <span className="blog-highlight normal" style={{ color }}>
    {children}
  </span>
);

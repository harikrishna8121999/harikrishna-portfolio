import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
  className?: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ text, position = 'top', children, className = '' }, ref) => {
    return (
      <div ref={ref} className={`tooltip-wrapper ${className}`.trim()}>
        {children}
        <span className={`tooltip-bubble tooltip-${position}`} role="tooltip">
          {text}
        </span>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;

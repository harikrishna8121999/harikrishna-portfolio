import { useState } from 'react';
import { FiCopy, FiCheck, FiTerminal } from 'react-icons/fi';
import './Blog.css';

interface BlogTerminalProps {
  commands: string[];
  title?: string;
}

const BlogTerminal = ({ commands, title = 'Terminal' }: BlogTerminalProps) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    void navigator.clipboard.writeText(commands.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="blog-terminal">
      <div className="blog-terminal-head">
        <span className="blog-terminal-dots">
          <i className="dot red" />
          <i className="dot yellow" />
          <i className="dot green" />
        </span>
        <span className="blog-terminal-title">
          <FiTerminal /> {title}
        </span>
        <button className="blog-copy" onClick={copy} aria-label="Copy commands">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>

      <pre className="blog-terminal-body">
        {commands.map((command) => (
          <code key={command}>
            <span className="blog-terminal-prompt">$</span> {command}
          </code>
        ))}
      </pre>
    </div>
  );
};

export default BlogTerminal;

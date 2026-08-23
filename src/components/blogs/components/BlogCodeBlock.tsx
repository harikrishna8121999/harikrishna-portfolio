import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './Blog.css';

interface BlogCodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

const BlogCodeBlock = ({ code, filename, language }: BlogCodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    void navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="blog-code">
      <div className="blog-code-head">
        {filename && <span className="blog-code-filename">{filename}</span>}
        {language && <span className="blog-code-language">{language}</span>}
        <button className="blog-copy" onClick={copy} aria-label="Copy code">
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>

      <pre className="blog-code-body">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default BlogCodeBlock;

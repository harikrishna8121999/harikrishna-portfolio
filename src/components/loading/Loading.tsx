import './Loading.css';

/**
 * Full-screen SVG loading animation — a chip with circuit traces that flow
 * outward. Used as the Suspense fallback for every route.
 */
const Loading = () => {
  const traces = [
    'M100 60 H40 V20',
    'M100 60 H160 V20',
    'M100 140 H40 V180',
    'M100 140 H160 V180',
    'M60 100 H10',
    'M140 100 H190',
  ];

  return (
    <div className="loading-screen" role="status" aria-label="Loading">
      <svg className="loading-svg" viewBox="0 0 200 200" aria-hidden="true">
        {traces.map((d, i) => (
          <g key={d}>
            <path className="loading-trace-bg" d={d} />
            <path className="loading-trace" d={d} style={{ animationDelay: `${i * 0.15}s` }} />
          </g>
        ))}

        <rect className="loading-chip" x="70" y="70" width="60" height="60" rx="6" />
        <rect className="loading-chip-core" x="86" y="86" width="28" height="28" rx="3" />
      </svg>

      <p className="loading-text">Compiling something nice…</p>
    </div>
  );
};

export default Loading;

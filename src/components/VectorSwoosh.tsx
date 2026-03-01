const VectorSwoosh = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 30 Q100 30 200 20 Q300 10 360 12 L380 6 L370 14 L400 10"
      stroke="url(#swoosh-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="380" cy="6" r="3" fill="hsl(187 92% 43%)">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    <defs>
      <linearGradient id="swoosh-gradient" x1="0" y1="20" x2="400" y2="10">
        <stop offset="0%" stopColor="hsl(224 76% 53%)" stopOpacity="0.1" />
        <stop offset="50%" stopColor="hsl(224 76% 53%)" stopOpacity="0.6" />
        <stop offset="100%" stopColor="hsl(187 92% 43%)" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

export default VectorSwoosh;

export default function SuccessIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <linearGradient
        id="success-icon-fill"
        x1="100%"
        x2="0%"
        y1="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#ff6a3a" />
        <stop offset="100%" stopColor="#ff527b" />
      </linearGradient>
      <circle cx="32" cy="32" r="32" fill="url(#success-icon-fill)" />
      <path
        d="m18.286 34.686 8.334 7.98 19.094-18.285"
        stroke="white"
        strokeWidth="4"
      />
    </svg>
  );
}

export default function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      width="21"
      height="21"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" />
      <path d="M6 11.381 8.735 14 15 8" stroke="white" strokeWidth="2" />
    </svg>
  );
}

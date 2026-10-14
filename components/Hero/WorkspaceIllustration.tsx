/** Decorative two-figures-at-a-desk illustration, copied verbatim from the source SVG. */
export function WorkspaceIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="400" height="250" rx="8" fill="#E5E2D8" />
      <rect x="50" y="150" width="300" height="12" rx="2" fill="#1E293B" />
      <rect x="70" y="162" width="10" height="60" fill="#475569" />
      <rect x="320" y="162" width="10" height="60" fill="#475569" />
      <rect x="160" y="115" width="80" height="32" rx="2" fill="#94A3B8" />
      <path d="M150 148H250L245 150H155L150 148Z" fill="#64748B" />
      <circle cx="100" cy="100" r="22" fill="#B45309" />
      <path d="M80 148C80 130 90 120 100 120C110 120 120 130 120 148H80Z" fill="#1E293B" />
      <circle cx="300" cy="100" r="22" fill="#475569" />
      <path d="M280 148C280 130 290 120 300 120C310 120 320 130 320 148H280Z" fill="#1E293B" />
      <rect x="110" y="140" width="30" height="8" rx="1" fill="#FFFFFF" />
      <rect x="260" y="140" width="30" height="8" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

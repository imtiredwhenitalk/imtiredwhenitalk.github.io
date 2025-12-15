import React from 'react';

// Simple inline SVG so the project is 100% self-contained.
export default function Logo({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer badge */}
      <path
        d="M32 6c10.5 0 20.1 6.2 24.2 15.8 4.1 9.6 1.8 20.7-5.8 27.9C44.3 56.9 34 59.5 24 56.6 14 53.6 6.7 45.6 5 35.3 3.3 25 7.6 14.9 16.1 9.7 20.7 6.9 26.3 6 32 6Z"
        fill="hsl(var(--accent) / 0.18)"
        stroke="hsl(var(--accent) / 0.55)"
        strokeWidth="2"
      />
      {/* Cat-ish face */}
      <path
        d="M22 27c0-5 4.1-9 10-9s10 4 10 9c0 6-4.5 10.8-10 10.8S22 33 22 27Z"
        fill="hsl(var(--accent) / 0.22)"
        stroke="hsl(var(--fg) / 0.55)"
        strokeWidth="2"
      />
      <path d="M26 22l-3-4" stroke="hsl(var(--fg) / 0.65)" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 22l3-4" stroke="hsl(var(--fg) / 0.65)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="28" cy="27" r="2" fill="hsl(var(--fg) / 0.75)" />
      <circle cx="36" cy="27" r="2" fill="hsl(var(--fg) / 0.75)" />
      <path d="M32 29c1.6 0 3 1.1 3 2.5 0 1.7-1.9 3.2-3 3.2s-3-1.5-3-3.2c0-1.4 1.4-2.5 3-2.5Z" fill="hsl(var(--fg) / 0.55)" />
    </svg>
  );
}

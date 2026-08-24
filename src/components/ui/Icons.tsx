import React from 'react';

export function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function BehanceIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-2.029 3-4.971 3-3.405 0-5.676-2.312-5.676-5.575 0-3.372 2.37-5.625 5.579-5.625 3.237 0 5.197 2.091 5.197 5.375 0 .394-.059.816-.077.938h-8.083c.121 1.602 1.408 2.695 3.064 2.695 1.508 0 2.406-.713 2.766-1.508l2.201.7zm-7.973-3.613h5.451c-.15-1.41-1.143-2.277-2.604-2.277-1.545 0-2.625.918-2.847 2.277zM4.75 6H0v12h5.127c2.906 0 4.675-1.416 4.675-3.664 0-1.285-.688-2.293-1.898-2.775 1.059-.449 1.637-1.391 1.637-2.457C9.541 7.234 8.01 6 4.75 6zm-2.062 4.406V8.125h2.246c1.199 0 1.945.547 1.945 1.434 0 .848-.746 1.447-1.945 1.447H2.688zm0 5.469v-3.344h2.461c1.379 0 2.215.633 2.215 1.672 0 1.039-.836 1.672-2.215 1.672H2.688z" />
    </svg>
  );
}

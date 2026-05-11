import React from 'react';

type TechLogo = {
  name: string;
  logo: React.ReactNode;
};

const techItems: TechLogo[] = [
  {
    name: 'Swift',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#F05138" />
        <path
          d="M47.5 44.2c-4.9 5.9-13.5 5.7-21.8.7-5.3-3.1-9.9-7.6-13.2-12.3 3.6 2.8 7.7 5.1 11.7 6.4-5.8-4.8-10.8-11.3-13.6-17.5 8.1 7.7 17.5 13.8 25.3 16.1-5.5-4.6-10.4-10.6-13.2-16.6 8.5 8.5 19.8 16.5 24.8 23.2Z"
          fill="white"
        />
      </svg>
    )
  },
  {
    name: 'Xcode',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#147EFB" />
        <path d="M18 47 42 17" stroke="white" strokeWidth="7" strokeLinecap="round" />
        <path d="M26 17h14l-7 9z" fill="#BEE7FF" />
        <path d="M23 42h18" stroke="#BEE7FF" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'Apple Frameworks',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#111111" />
        <path
          d="M41.4 33.8c-.1-6 4.9-8.9 5.1-9-2.8-4.1-7.1-4.6-8.6-4.7-3.7-.4-7.2 2.1-9.1 2.1s-4.8-2-7.9-1.9c-4.1.1-7.9 2.4-10 6.1-4.3 7.5-1.1 18.6 3.1 24.7 2.1 3 4.5 6.3 7.7 6.2 3.1-.1 4.3-2 8-2s4.8 2 8.1 1.9c3.3-.1 5.4-3 7.5-6 2.4-3.5 3.3-6.8 3.4-7-.1-.1-6.5-2.6-6.6-10.4Z"
          fill="#F5F5F5"
        />
        <path d="M35.5 16.2c1.7-2.1 2.9-5 2.6-7.9-2.5.1-5.5 1.7-7.3 3.8-1.6 1.8-3 4.8-2.6 7.6 2.8.2 5.6-1.4 7.3-3.5Z" fill="#F5F5F5" />
      </svg>
    )
  },
  {
    name: 'React',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#111827" />
        <circle cx="32" cy="32" r="4.5" fill="#61DAFB" />
        <ellipse cx="32" cy="32" rx="23" ry="8.5" fill="none" stroke="#61DAFB" strokeWidth="3" />
        <ellipse cx="32" cy="32" rx="23" ry="8.5" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="23" ry="8.5" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 32 32)" />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#3178C6" />
        <path d="M13 31h23v5h-8v19h-7V36h-8zM39 53v-7c2.2 1.7 4.9 2.6 7.8 2.6 2.2 0 3.3-.7 3.3-2.1 0-.7-.3-1.2-.9-1.6-.6-.4-1.9-1-3.8-1.8-4.2-1.7-6.3-4.1-6.3-7.4 0-2.5 1-4.5 3-5.9 2-1.4 4.6-2.1 7.8-2.1 2.7 0 5 .4 6.8 1.2v6.5c-1.9-1.2-4.1-1.8-6.6-1.8-2.2 0-3.3.7-3.3 2.1 0 .7.3 1.2.9 1.6.6.4 1.8 1 3.7 1.7 4.3 1.7 6.5 4.2 6.5 7.6 0 2.6-1 4.6-3.1 6-2.1 1.4-4.9 2.1-8.4 2.1-3.1 0-5.8-.5-8.1-1.6Z" fill="white" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#F7DF1E" />
        <path d="M18 49c1.4 2.4 3.3 4.1 7 4.1 4.2 0 7-2.2 7-7.1V27h-7v18.9c0 1.8-.7 2.3-1.8 2.3-1.2 0-2.1-.8-3-2.3zM36 48.4c2 3.2 5 4.7 9.3 4.7 4.8 0 8.4-2.5 8.4-7.1 0-4.2-2.4-6-7.4-8.1l-1.3-.5c-2.5-1.1-3.6-1.8-3.6-3.1 0-1.1.9-2 2.4-2 1.7 0 2.8.7 3.9 2.4l5.2-3.3c-2-3.5-4.9-4.8-9.1-4.8-5 0-8.3 3.1-8.3 7 0 4.3 2.6 6.2 6.7 8l1.3.6c2.7 1.2 4.1 1.8 4.1 3.4 0 1.3-1.2 2.2-3.1 2.2-2.2 0-3.5-1-4.8-3z" fill="#111111" />
      </svg>
    )
  },
  {
    name: 'HTML5',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#E44D26" />
        <path d="M18 11h28l-2.6 38.4L32 53l-11.4-3.6z" fill="#F16529" />
        <path d="M32 16v31.5l7-2.2 1.8-24.2z" fill="#FF8A4C" />
        <path d="M23 21h18l-.4 5H28.4l.3 5h11.5l-1 11-7.2 2.2-7.2-2.2-.5-6h5l.2 2.1 2.5.8 2.5-.8.3-2.4H24z" fill="white" />
      </svg>
    )
  },
  {
    name: 'CSS3',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#1572B6" />
        <path d="M18 11h28l-2.6 38.4L32 53l-11.4-3.6z" fill="#33A9DC" />
        <path d="M32 16v31.5l7-2.2 1.8-24.2z" fill="#5EC3F0" />
        <path d="M23 21h18l-.4 5H28.2l.3 4.2h11.8l-1 11.8-7.3 2.2-7.3-2.2-.5-6h5.1l.2 2.1 2.5.8 2.7-.8.3-3.1H24.1z" fill="white" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#0F172A" />
        <path d="M17 30c2-8 7-12 15-12 4.8 0 8.4 1.8 10.8 5.5 1.4 2.2 3.1 3.5 5.2 3.8 2.1.3 4.1-.5 6-2.3-2 8-7 12-15 12-4.8 0-8.4-1.8-10.8-5.5-1.4-2.2-3.1-3.5-5.2-3.8-2.1-.3-4.1.5-6 2.3Zm-7 14c2-8 7-12 15-12 4.8 0 8.4 1.8 10.8 5.5 1.4 2.2 3.1 3.5 5.2 3.8 2.1.3 4.1-.5 6-2.3-2 8-7 12-15 12-4.8 0-8.4-1.8-10.8-5.5-1.4-2.2-3.1-3.5-5.2-3.8-2.1-.3-4.1.5-6 2.3Z" fill="#38BDF8" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#1F2937" />
        <path d="M32 8 53 20v24L32 56 11 44V20z" fill="#68A063" />
        <path d="M24 43V23h5.5l9 12.7V23H44v20h-5.4l-9.1-12.8V43z" fill="white" />
      </svg>
    )
  },
  {
    name: 'Git',
    logo: (
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#F05032" />
        <path d="M32 9 55 32 32 55 9 32z" fill="#F05032" stroke="white" strokeWidth="4" />
        <circle cx="25" cy="25" r="4" fill="white" />
        <circle cx="39" cy="39" r="4" fill="white" />
        <circle cx="39" cy="25" r="4" fill="white" />
        <path d="M28 25h11M28 27l9 9" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }
];

const TechLogoItem: React.FC<TechLogo> = ({ name, logo }) => (
  <span className="inline-flex items-center gap-3 whitespace-nowrap" title={name}>
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm shadow-sm">
      {logo}
    </span>
    <span className="text-sm font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
      {name}
    </span>
  </span>
);

export const TechStack: React.FC = () => {
  return (
    <section
      className="grid grid-cols-12 grid-border-b py-12 overflow-hidden relative"
      aria-labelledby="tech-stack-heading"
    >
      <div className="col-span-12 md:col-span-2 flex items-center mb-6 md:mb-0">
        <h3
          id="tech-stack-heading"
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-400 uppercase"
        >
          Stack principal
        </h3>
      </div>

      <div
        className="col-span-12 md:col-span-10 marquee-container relative flex items-center overflow-hidden mask-image-gradient"
        tabIndex={0}
        aria-label="Lista rolante de tecnologias"
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="animate-marquee flex gap-12 pr-12 items-center"
            aria-hidden={group === 1}
          >
            {techItems.map((tech) => (
              <TechLogoItem key={`${group}-${tech.name}`} {...tech} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

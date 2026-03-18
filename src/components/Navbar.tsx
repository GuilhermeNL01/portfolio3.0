import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav
      className="grid grid-cols-12 grid-border-b py-6 animate-fade-in"
      aria-label="Main Navigation"
    >
      <div className="col-span-6 md:col-span-4 flex items-center">
        <span className="text-xl font-semibold tracking-tighter uppercase" aria-hidden="true">
          GL
        </span>
        <span className="sr-only">Guilherme Lobo</span>
      </div>
      <div className="col-span-6 md:col-span-8 flex justify-end items-center gap-6 text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
        <a
          href="#projects"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};


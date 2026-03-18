import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Timeline } from './components/Timeline';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const id = decodeURIComponent(href.slice(1));
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      history.pushState(null, '', `#${encodeURIComponent(id)}`);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <main
      id="main-content"
      className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 md:px-8"
    >
      <a
        href="#main-sections"
        className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 z-50 bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 px-4 py-2 text-sm font-semibold tracking-tight rounded-sm outline-none ring-2 ring-neutral-500 shadow-xl"
      >
        Skip to main content
      </a>

      <div className="bg-grid-12" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} />
        ))}
      </div>

      <div id="main-sections">
        <Navbar />
        <Hero />
        <TechStack />
        <Timeline />
        <ProjectsGrid />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};


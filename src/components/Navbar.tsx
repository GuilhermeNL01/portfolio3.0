import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  // 1. Add state to handle the open/close action of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // 2. Added a relative container so the dropdown can sit absolutely below it
    <header className="relative z-50">
      <nav
        className="grid grid-cols-4 md:grid-cols-12 grid-border-b py-6 px-4 md:px-8 animate-fade-in bg-white dark:bg-neutral-950"
        aria-label="Main Navigation"
      >
        <div className="col-span-2 md:col-span-4 flex items-center">
          <span className="text-xl font-semibold tracking-tighter uppercase" aria-hidden="true">
            GL
          </span>
          <span className="sr-only">Guilherme Lobo</span>
        </div>

        <div className="col-span-2 md:col-span-8 flex justify-end items-center text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
          
          {/* 3. Desktop Menu (Hidden on mobile, flex on md and up) */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm">
              Projects
            </a>
            <a href="#experience" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm">
              Experience
            </a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm">
              Contact
            </a>
          </div>

          {/* 4. Mobile Hamburger Button (Visible on mobile, hidden on md and up) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 -mr-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              // Close "X" Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Menu Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* 5. Mobile Menu Dropdown Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-950 grid-border-b shadow-lg animate-fade-in">
          <div className="flex flex-col px-4 py-6 gap-6 text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
            {/* Added onClick={toggleMenu} so the menu closes when a user clicks a link */}
            <a href="#projects" onClick={toggleMenu} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              Projects
            </a>
            <a href="#experience" onClick={toggleMenu} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              Experience
            </a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
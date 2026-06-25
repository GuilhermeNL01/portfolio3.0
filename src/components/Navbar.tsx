import React, { useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';
import { smoothScrollToId } from '../utils/smoothScroll';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { targetId: 'about', label: 'Sobre' },
  { targetId: 'projects', label: 'Projetos' },
  { targetId: 'experience', label: 'Experiência' },
  { targetId: 'contact', label: 'Contato' }
] as const;

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen((currentState) => !currentState);
  const navigateToSection = (targetId: string) => {
    setIsMenuOpen(false);
    smoothScrollToId(targetId);
  };

  return (
    <header className="relative z-50">
      <nav
        className="grid grid-cols-4 md:grid-cols-12 grid-border-b py-6 px-4 md:px-8 animate-fade-in bg-white/95 dark:bg-[#131311]/95 backdrop-blur-md"
        aria-label="Navegação principal"
      >
        <div className="col-span-2 md:col-span-4 flex items-center">
          <img
            src={theme === 'dark' ? '/Logo branca.svg' : '/Logo preta.svg'}
            alt="Guilherme Lobo"
            className="h-8 w-auto object-contain"
          />
        </div>

        <div className="col-span-2 md:col-span-8 flex justify-end items-center gap-4 text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300">
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.targetId}
                type="button"
                onClick={() => navigateToSection(item.targetId)}
                className="bg-transparent p-0 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-900/15 dark:border-[#C5DCDC]/25 text-neutral-900 dark:text-[#C5DCDC] hover:bg-neutral-900/5 dark:hover:bg-[#C5DCDC]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 dark:focus-visible:ring-[#C5DCDC]"
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 -mr-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#131311] grid-border-b shadow-lg animate-fade-in"
        >
          <div className="flex flex-col px-4 py-6 gap-6 text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300">
            {navItems.map((item) => (
              <button
                key={item.targetId}
                type="button"
                onClick={() => navigateToSection(item.targetId)}
                className="bg-transparent p-0 text-left hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

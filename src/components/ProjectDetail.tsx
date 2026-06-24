import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';
import { CodeSnippet, ProjectData } from '../data/projectsData';

// ─── Shared SVG ───────────────────────────────────────────────────────────────

const ArrowLeft: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 12H5" />
    <path d="m11 6-6 6 6 6" />
  </svg>
);

// ─── Code block ───────────────────────────────────────────────────────────────

const CodeBlock: React.FC<{ snippet: CodeSnippet }> = ({ snippet }) => (
  <div className="mt-8 rounded-sm overflow-hidden border border-neutral-200 dark:border-neutral-700 reveal-on-scroll">
    {/* Window chrome */}
    <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500" />
      </div>
      <span className="ml-3 text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 truncate">
        {snippet.filename}
      </span>
      <span className="ml-auto flex-shrink-0 text-[10px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
        {snippet.language}
      </span>
    </div>

    {/* Code body */}
    <pre className="bg-[#0e0e0e] px-6 py-5 overflow-x-auto text-sm leading-7 font-mono">
      <code className="text-neutral-200">{snippet.code}</code>
    </pre>

    {/* Caption */}
    {snippet.caption && (
      <div className="px-4 py-3 bg-neutral-50 dark:bg-[#1B1B18] border-t border-neutral-200 dark:border-neutral-700">
        <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
          {snippet.caption}
        </p>
      </div>
    )}
  </div>
);

// ─── Disclaimer banner ────────────────────────────────────────────────────────

const DisclaimerBanner: React.FC<{ status: ProjectData['status'] }> = ({ status }) => {
  if (status === 'web') return null;

  const isExpired = status === 'signature-expired';

  return (
    <div className="grid-border-b">
      <div className="flex gap-3 items-start py-5">
        {/* Icon */}
        <div className={`flex-shrink-0 mt-0.5 ${isExpired ? 'text-amber-500' : 'text-blue-500'}`}>
          {isExpired ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          )}
        </div>

        {/* Text */}
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isExpired ? 'text-amber-600 dark:text-amber-400' : 'text-blue-600 dark:text-blue-400'}`}
          >
            {isExpired ? 'Disponibilidade Limitada' : 'Em Desenvolvimento'}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            {isExpired
              ? 'Este app foi desenvolvido com uma conta Apple Developer pessoal. A assinatura expirou e o app não pode ser instalado em novos dispositivos sem nova assinatura — disponível via TestFlight ou Xcode mediante solicitação.'
              : 'Este projeto está em desenvolvimento ativo. Algumas funcionalidades podem estar incompletas ou sujeitas a mudanças nas próximas versões.'}
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

type Props = {
  project: ProjectData;
  onBack: () => void;
};

type Theme = 'light' | 'dark';

export const ProjectDetail: React.FC<Props> = ({ project, onBack }) => {
  const [activeSection, setActiveSection] = useState(project.sections[0]?.id ?? '');
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setActiveSection(project.sections[0]?.id ?? '');

    // ── TOC active-section observer ──────────────────────────────────────────
    const tocObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id) setActiveSection(id);
          }
        }
      },
      { rootMargin: '0px 0px -75% 0px', threshold: 0 }
    );

    project.sections.forEach((s) => {
      const el = document.getElementById(`section-${s.id}`);
      if (el) tocObserver.observe(el);
    });

    // ── Scroll-reveal observer ───────────────────────────────────────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    // Slight delay so initial paint completes before we start observing
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => revealObserver.observe(el));
    }, 60);

    return () => {
      tocObserver.disconnect();
      revealObserver.disconnect();
      clearTimeout(timer);
    };
  }, [project]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ──────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white dark:bg-[#131311]">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#131311]/95 backdrop-blur-md grid-border-b">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-5">
            {/* ← Back */}
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
              aria-label="Voltar para projetos"
            >
              <ArrowLeft />
              <span className="hidden sm:inline">Projetos</span>
            </button>

            {/* GL — clicks back to home */}
            <button
              type="button"
              onClick={onBack}
              className="text-xl font-semibold tracking-tighter uppercase hover:opacity-60 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
              aria-label="Voltar para o início"
              title="Voltar para o início"
            >
              GL
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-neutral-900/15 dark:border-[#C5DCDC]/25 text-neutral-900 dark:text-[#C5DCDC] hover:bg-neutral-900/5 dark:hover:bg-[#C5DCDC]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 dark:focus-visible:ring-[#C5DCDC]"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-4 w-4" />
              ) : (
                <MoonIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* ── Hero ── */}
        <div className="grid-border-b pt-10 pb-10 md:pt-14 md:pb-12 animate-fade-in">
          {/* Status pill + tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {project.status !== 'web' && (
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-tight px-2 py-1 rounded-sm border ${
                  project.status === 'signature-expired'
                    ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700/40 text-amber-700 dark:text-amber-400'
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/40 text-blue-700 dark:text-blue-400'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    project.status === 'signature-expired' ? 'bg-amber-500' : 'bg-blue-500'
                  }`}
                />
                {project.status === 'signature-expired'
                  ? 'Assinatura Expirada'
                  : 'Em Desenvolvimento'}
              </span>
            )}
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold tracking-tight px-2 py-1 bg-neutral-50 dark:bg-[#1B1B18] border border-neutral-900/15 dark:border-[#C5DCDC]/20 text-neutral-700 dark:text-neutral-300 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100 mb-5 leading-[0.95]">
            {project.title}
          </h1>

          <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* ── Project Banner ── */}
        <div className="grid-border-b overflow-hidden bg-neutral-50 dark:bg-[#1B1B18]">
          <div
            className="flex items-center justify-center py-14 md:py-20 animate-fade-in"
            style={{ animationDelay: '120ms' }}
          >
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-25 dark:opacity-15 bg-neutral-300 dark:bg-neutral-400 scale-150"
                aria-hidden="true"
              />
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="relative z-10 max-h-44 md:max-h-60 max-w-full object-contain"
                onError={(e) => {
                  (
                    e.currentTarget.closest('div[class*="flex items"]') as HTMLElement | null
                  )?.remove();
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <DisclaimerBanner status={project.status} />

        {/* ── Tech Stack ── */}
        <div className="grid-border-b py-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-6">
            Stack
          </p>
          <div className="flex flex-wrap gap-5">
            {project.techStack.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex flex-col items-center gap-2 reveal-on-scroll"
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                <div className="w-12 h-12 rounded-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center p-2.5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                  <img
                    src={`${DEVICON_BASE}${tech.devicon}.svg`}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    loading="eager"
                    onError={(e) => {
                      // Show first letter as fallback
                      const el = e.currentTarget;
                      const parent = el.parentElement;
                      if (parent) {
                        el.style.display = 'none';
                        const fallback = document.createElement('span');
                        fallback.textContent = tech.name.charAt(0);
                        fallback.className = 'text-sm font-semibold text-neutral-500';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <span
                  className="text-[11px] font-medium text-neutral-500 dark:text-neutral-500 text-center leading-tight"
                  style={{ maxWidth: '56px' }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Content grid: TOC sidebar + article ── */}
        <div className="grid grid-cols-12">
          {/* Sidebar — desktop, sticky with self-start */}
          <aside className="hidden lg:block lg:col-span-3 self-start sticky top-[78px]">
            <div className="py-10 pr-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-5">
                Neste projeto
              </p>
              <nav aria-label="Seções do projeto">
                {project.sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`block text-left w-full text-sm font-medium tracking-tight py-2.5 pl-4 mb-1 border-l-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-r-sm ${
                      activeSection === section.id
                        ? 'border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100'
                        : 'border-transparent text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="col-span-12 lg:col-span-9 detail-article">
            {/* Mobile TOC — horizontal pills */}
            <div className="lg:hidden overflow-x-auto border-b border-[var(--border-color)] py-4">
              <div className="flex gap-2 min-w-max">
                {project.sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`text-xs font-semibold tracking-tight px-3 py-1.5 rounded-sm border transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 ${
                      activeSection === section.id
                        ? 'bg-neutral-900 dark:bg-neutral-100 border-neutral-900 dark:border-neutral-100 text-white dark:text-neutral-900'
                        : 'bg-transparent border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Sections */}
            {project.sections.map((section, index) => (
              <section
                key={section.id}
                id={`section-${section.id}`}
                data-section-id={section.id}
                className={`py-12 md:py-16 ${
                  index < project.sections.length - 1 ? 'border-b border-[var(--border-color)]' : ''
                }`}
                aria-labelledby={`heading-${section.id}`}
              >
                {/* Title + body text */}
                <div className="max-w-2xl reveal-on-scroll">
                  <h2
                    id={`heading-${section.id}`}
                    className="text-2xl md:text-3xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100 mb-5"
                  >
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>

                {/* Code snippet */}
                {section.codeSnippet && (
                  <div className="max-w-2xl">
                    <CodeBlock snippet={section.codeSnippet} />
                  </div>
                )}

                {/* Section image */}
                {section.image && (
                  <div className="mt-10 max-w-2xl reveal-on-scroll rounded-sm overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={section.image}
                      alt={section.imageAlt ?? section.title}
                      className="w-full object-contain max-h-72"
                      onError={(e) => {
                        (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </section>
            ))}

            {/* Bottom back navigation */}
            <div className="border-t border-[var(--border-color)] py-10">
              <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
              >
                <ArrowLeft />
                Voltar para Projetos
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

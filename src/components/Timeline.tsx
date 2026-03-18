import React, { useEffect, useRef } from 'react';

const certifications = [
  {
    title: 'Swift Certified User',
    subtitle: 'Apple (2025)',
    href: 'https://www.credly.com/badges/9178a425-2bc5-4b6c-9b6a-4f3367595053/linked_in_profile'
  },
  {
    title: 'EF SET English Certificate',
    subtitle: '(C2 Proficient)',
    href: 'https://cert.efset.org/en/uiCjkR'
  }
] as const;

export const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const dots = Array.from(el.querySelectorAll<HTMLElement>('.node-dot'));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('dot-inview');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.6 }
    );

    dots.forEach((dot) => observer.observe(dot));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="grid grid-cols-12 grid-border-b"
      aria-labelledby="timeline-heading"
    >
      <div className="col-span-12 md:col-span-4 p-8 md:grid-border-r bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md z-10">
        <div className="flex flex-col justify-start">
        <h2
          id="timeline-heading"
          className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100 leading-none"
        >
          Timeline
        </h2>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-500 font-medium tracking-tight max-w-xs">
          A chronological map of education, certifications, and technical development.
        </p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 p-8 md:p-16 relative">
        <div
          className="absolute left-8 md:left-16 top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-800/50"
          aria-hidden="true"
        >
          <div className="w-full h-full bg-neutral-900 dark:bg-neutral-500" />
        </div>

        <div className="space-y-24">
          <div className="relative pl-12 group">
            <div
              className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100 ring-4 ring-neutral-50 dark:ring-neutral-950 transition-transform group-hover:scale-150 node-dot"
              style={{ animationDelay: '0.5s' }}
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-tight text-neutral-500">
                2023 – 2024
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-200">
                Apple Developer Academy
              </h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400 font-medium">
                App Development for Apple Platforms
              </p>
            </div>
          </div>

          <div className="relative pl-12 group">
            <div
              className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 ring-4 ring-neutral-50 dark:ring-neutral-950 transition-transform group-hover:scale-150 node-dot"
              style={{ animationDelay: '1.2s' }}
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-tight text-neutral-500">
                2022 – 2025
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-200">
                Computer Science Bachelor&apos;s
              </h3>
              <p className="text-base text-neutral-600 dark:text-neutral-400 font-medium">
                Universidade Católica de Brasília (UCB)
              </p>
            </div>
          </div>

          <div className="relative pl-12 group">
            <div
              className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 ring-4 ring-neutral-50 dark:ring-neutral-950 transition-transform group-hover:scale-150 node-dot"
              style={{ animationDelay: '1.8s' }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-200 flex items-center gap-2">
                  <iconify-icon
                    icon="solar:diploma-linear"
                    style={{ strokeWidth: 1.5 as unknown as string }}
                    aria-hidden="true"
                  ></iconify-icon>
                  Certifications
                </h3>
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert.title}>
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-sm bg-white dark:bg-neutral-900/20 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950"
                        aria-label={`Open certification: ${cert.title}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold tracking-tight text-neutral-800 dark:text-neutral-300">
                              {cert.title}
                            </p>
                            <p className="text-xs text-neutral-500 mt-1">{cert.subtitle}</p>
                          </div>
                          <iconify-icon
                            icon="solar:arrow-right-up-linear"
                            className="text-neutral-400 dark:text-neutral-600 mt-0.5 shrink-0"
                            aria-hidden="true"
                          ></iconify-icon>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-200 flex items-center gap-2">
                  <iconify-icon
                    icon="solar:global-linear"
                    style={{ strokeWidth: 1.5 as unknown as string }}
                    aria-hidden="true"
                  ></iconify-icon>
                  Languages
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800/50 pb-2">
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-300">
                      English
                    </span>
                    <span className="text-xs font-semibold tracking-tight text-neutral-500">
                      Advanced
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800/50 pb-2">
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-300">
                      Spanish
                    </span>
                    <span className="text-xs font-semibold tracking-tight text-neutral-500">
                      Basic
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800/50 pb-2">
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-300">
                      Portuguese
                    </span>
                    <span className="text-xs font-semibold tracking-tight text-neutral-500">
                      Native
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


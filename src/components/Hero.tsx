import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      className="grid grid-cols-12 grid-border-b pt-24 pb-12"
      aria-labelledby="hero-heading"
    >
      <div className="col-span-12 md:col-span-8 md:grid-border-r pr-0 md:pr-12 flex flex-col justify-end">
        <div className="animate-fade-in delay-100 space-y-4">
          <p className="text-sm font-medium tracking-tight text-neutral-500 uppercase flex items-center gap-2">
            <iconify-icon
              icon="solar:apple-linear"
              style={{ strokeWidth: 1.5 as unknown as string }}
              aria-hidden="true"
            ></iconify-icon>
            Software Developer
          </p>
          <h1
            id="hero-heading "
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-none text-neutral-900 dark:text-neutral-100"
          >
            Guilherme <br /> Lobo
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-600 dark:text-neutral-400 mt-2">
             Developer
          </h2>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 pl-0 md:pl-12 pt-12 md:pt-0 flex flex-col justify-end animate-fade-in delay-200">
        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md font-medium">
        I’m a software developer focused on building scalable, clean, and user-friendly applications.

        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="/misc/CVENGuilherme.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 text-sm font-semibold tracking-tight rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
          >
            View CV
            <iconify-icon
              icon="solar:document-linear"
              style={{ strokeWidth: 1.5 as unknown as string }}
              aria-hidden="true"
            ></iconify-icon>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 text-sm font-semibold tracking-tight rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
          >
            View Projects
            <iconify-icon
              icon="solar:arrow-right-linear"
              style={{ strokeWidth: 1.5 as unknown as string }}
              aria-hidden="true"
            ></iconify-icon>
          </a>
        </div>
      </div>

      <div className="col-span-12 mt-16 md:mt-24 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-[#0a0a0a] shadow-xl dark:shadow-2xl animate-fade-in delay-300 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <div className="h-10 bg-neutral-50 dark:bg-[#121212] border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          <div className="ml-auto flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-500 font-mono">
            <iconify-icon icon="logos:swift"></iconify-icon> Portfolio.swift
          </div>
        </div>
        <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 overflow-x-auto">
          <div className="code-line delay-400">
            <span className="text-[#d83879] dark:text-[#ff7ab2]">import</span> SwiftUI
          </div>
          <div className="code-line delay-500 mt-4">
            <span className="text-[#d83879] dark:text-[#ff7ab2]">@main</span>
          </div>
          <div className="code-line delay-600">
            <span className="text-[#d83879] dark:text-[#ff7ab2]">struct</span>{' '}
            <span className="text-[#5b21b6] dark:text-[#dabafe]">GuilhermeLoboApp</span>:{' '}
            <span className="text-[#7e22ce] dark:text-[#b281eb]">App</span> {'{'}
          </div>
          <div className="code-line delay-700 pl-4 md:pl-8">
            <span className="text-[#d83879] dark:text-[#ff7ab2]">var</span> body:{' '}
            <span className="text-[#d83879] dark:text-[#ff7ab2]">some</span>{' '}
            <span className="text-[#7e22ce] dark:text-[#b281eb]">Scene</span> {'{'}
          </div>
          <div className="code-line delay-800 pl-8 md:pl-16">
            <span className="text-[#7e22ce] dark:text-[#b281eb]">WindowGroup</span> {'{'}
          </div>
          <div className="code-line delay-900 pl-12 md:pl-24">
            <span className="text-[#5b21b6] dark:text-[#dabafe]">ContentView</span>()
          </div>
          <div className="code-line delay-1000 pl-16 md:pl-32">
            .preferredColorScheme(.dark)
          </div>
          <div className="code-line delay-1100 pl-8 md:pl-16">{'}'}</div>
          <div className="code-line delay-1200 pl-4 md:pl-8">{'}'}</div>
          <div className="code-line delay-1200">{'}'}</div>
          <div className="code-line mt-4 inline-block" style={{ animationDelay: '1300ms' }}>
            <span className="w-2.5 h-5 bg-neutral-400 inline-block animate-pulse align-middle" />
          </div>
        </div>
      </div>
    </section>
  );
};


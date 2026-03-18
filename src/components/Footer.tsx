import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="grid grid-cols-12 py-8 text-sm font-medium tracking-tight text-neutral-500"
      role="contentinfo"
    >
      <div className="col-span-12 md:col-span-6 flex items-center justify-center md:justify-start">
        © 2026 Guilherme Lobo. All rights reserved.
      </div>
      <div className="col-span-12 md:col-span-6 flex items-center justify-center md:justify-end gap-6 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/in/guilherme-nunes-lobo-12967b258/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] rounded-sm"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/GuilhermeNL01"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-200 rounded-sm"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/g_nlobo"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#E1306C] dark:hover:text-[#E1306C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C] rounded-sm"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};


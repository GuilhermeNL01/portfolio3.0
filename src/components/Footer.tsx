import React from 'react';
import { socialLinks } from '../utils/constants';

const hoverClass: Record<string, string> = {
  LinkedIn: 'hover:text-[#0A66C2] dark:hover:text-[#0A66C2] focus-visible:ring-[#0A66C2]',
  GitHub:
    'hover:text-neutral-900 dark:hover:text-neutral-100 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-200',
  Instagram: 'hover:text-[#E1306C] dark:hover:text-[#E1306C] focus-visible:ring-[#E1306C]'
};

export const Footer: React.FC = () => {
  return (
    <footer
      className="grid grid-cols-12 py-8 text-sm font-medium tracking-tight text-neutral-500"
      role="contentinfo"
    >
      <div className="col-span-12 md:col-span-6 flex items-center justify-center md:justify-start">
        © 2026 Guilherme Lobo. Todos os direitos reservados.
      </div>
      <div className="col-span-12 md:col-span-6 flex items-center justify-center md:justify-end gap-6 mt-4 md:mt-0">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`transition-colors focus-visible:outline-none focus-visible:ring-2 rounded-sm ${hoverClass[link.label] ?? ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

import React from 'react';

export const TechStack: React.FC = () => {
  return (
    <section
      className="grid grid-cols-12 grid-border-b py-12 overflow-hidden relative"
      aria-labelledby="tech-stack-heading"
    >
      <div className="col-span-12 md:col-span-2 flex items-center mb-6 md:mb-0">
        <h3
          id="tech-stack-heading"
          className="text-sm font-medium tracking-tight text-neutral-500 uppercase"
        >
          Core Stack
        </h3>
      </div>

      <div
        className="col-span-12 md:col-span-10 marquee-container relative flex items-center overflow-hidden mask-image-gradient"
        tabIndex={0}
        aria-label="Scrolling list of technologies"
      >
        <div className="animate-marquee flex gap-16 pr-16 items-center">
          <iconify-icon icon="logos:swift" height="32" title="Swift"></iconify-icon>
          <iconify-icon icon="devicon:xcode" height="32" title="Xcode"></iconify-icon>
          <iconify-icon
            icon="logos:apple"
            height="32"
            class="dark:invert dark:grayscale dark:contrast-200"
            title="Apple Frameworks"
          ></iconify-icon>
          <iconify-icon icon="logos:react" height="32" title="React"></iconify-icon>
          <iconify-icon
            icon="logos:typescript-icon"
            height="32"
            title="TypeScript"
          ></iconify-icon>
          <iconify-icon icon="logos:javascript" height="32" title="JavaScript"></iconify-icon>
          <iconify-icon icon="logos:html-5" height="32" title="HTML5"></iconify-icon>
          <iconify-icon icon="logos:css-3" height="32" title="CSS3"></iconify-icon>
          <iconify-icon
            icon="devicon:tailwindcss"
            height="32"
            title="Tailwind CSS"
          ></iconify-icon>
          <iconify-icon icon="logos:nodejs-icon" height="32" title="Node.js"></iconify-icon>
          <iconify-icon icon="logos:git-icon" height="32" title="Git"></iconify-icon>
        </div>
        <div className="animate-marquee flex gap-16 pr-16 items-center" aria-hidden="true">
          <iconify-icon icon="logos:swift" height="32"></iconify-icon>
          <iconify-icon icon="devicon:xcode" height="32"></iconify-icon>
          <iconify-icon
            icon="logos:apple"
            height="32"
            class="dark:invert dark:grayscale dark:contrast-200"
          ></iconify-icon>
          <iconify-icon icon="logos:react" height="32"></iconify-icon>
          <iconify-icon icon="logos:typescript-icon" height="32"></iconify-icon>
          <iconify-icon icon="logos:javascript" height="32"></iconify-icon>
          <iconify-icon icon="logos:html-5" height="32"></iconify-icon>
          <iconify-icon icon="logos:css-3" height="32"></iconify-icon>
          <iconify-icon icon="devicon:tailwindcss" height="32"></iconify-icon>
          <iconify-icon icon="logos:nodejs-icon" height="32"></iconify-icon>
          <iconify-icon icon="logos:git-icon" height="32"></iconify-icon>
        </div>
      </div>
    </section>
  );
};


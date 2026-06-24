import React from 'react';
import { DEVICON_BASE_URL } from '../utils/constants';

type TechLogo = {
  name: string;
  logoSrc: string;
};

const techItems: TechLogo[] = [
  {
    name: 'Swift',
    logoSrc: `${DEVICON_BASE_URL}swift/swift-original.svg`
  },
  {
    name: 'Xcode',
    logoSrc: `${DEVICON_BASE_URL}xcode/xcode-original.svg`
  },
  {
    name: 'Apple Frameworks',
    logoSrc: `${DEVICON_BASE_URL}apple/apple-original.svg`
  },
  {
    name: 'React',
    logoSrc: `${DEVICON_BASE_URL}react/react-original.svg`
  },
  {
    name: 'TypeScript',
    logoSrc: `${DEVICON_BASE_URL}typescript/typescript-original.svg`
  },
  {
    name: 'JavaScript',
    logoSrc: `${DEVICON_BASE_URL}javascript/javascript-original.svg`
  },
  {
    name: 'HTML5',
    logoSrc: `${DEVICON_BASE_URL}html5/html5-original.svg`
  },
  {
    name: 'CSS3',
    logoSrc: `${DEVICON_BASE_URL}css3/css3-original.svg`
  },
  {
    name: 'Tailwind CSS',
    logoSrc: `${DEVICON_BASE_URL}tailwindcss/tailwindcss-original.svg`
  },
  {
    name: 'Node.js',
    logoSrc: `${DEVICON_BASE_URL}nodejs/nodejs-original.svg`
  },
  {
    name: 'Git',
    logoSrc: `${DEVICON_BASE_URL}git/git-original.svg`
  }
];

const TechLogoItem: React.FC<TechLogo> = ({ name, logoSrc }) => (
  <span className="inline-flex items-center gap-3 whitespace-nowrap" title={name}>
    <span className="inline-flex h-9 w-9 items-center justify-center">
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </span>
    <span className="text-sm font-semibold tracking-tight text-neutral-700 dark:text-neutral-300">
      {name}
    </span>
  </span>
);

export const TechStack: React.FC = () => {
  return (
    <section
      className="grid grid-cols-12 grid-border-b py-12 overflow-hidden relative"
      aria-labelledby="tech-stack-heading"
    >
      <div className="col-span-12 md:col-span-2 flex items-center mb-6 md:mb-0">
        <h3
          id="tech-stack-heading"
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-400 uppercase"
        >
          Stack principal
        </h3>
      </div>

      <div
        className="col-span-12 md:col-span-10 marquee-container relative flex items-center overflow-hidden mask-image-gradient"
        tabIndex={0}
        aria-label="Lista rolante de tecnologias"
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="animate-marquee flex gap-12 pr-12 items-center"
            aria-hidden={group === 1}
          >
            {techItems.map((tech) => (
              <TechLogoItem key={`${group}-${tech.name}`} {...tech} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

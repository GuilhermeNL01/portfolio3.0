import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRightIcon, CodeIcon, DocumentIcon } from './Icons';

type CodeSegment = {
  text: string;
  className?: string;
};

type CodeSnippet = {
  fileName: string;
  logoSrc: string;
  lines: CodeSegment[][];
};

const deviconBaseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const syntax = {
  keyword: 'text-[#d83879] dark:text-[#ff7ab2]',
  type: 'text-[#5b21b6] dark:text-[#dabafe]',
  functionName: 'text-[#7e22ce] dark:text-[#b281eb]',
  string: 'text-[#047857] dark:text-[#9ad8d0]',
  property: 'text-[#b45309] dark:text-[#ffd28a]',
  punctuation: 'text-neutral-500 dark:text-neutral-500'
} as const;

const codeSnippets: CodeSnippet[] = [
  {
    fileName: 'Portfolio.swift',
    logoSrc: `${deviconBaseUrl}/swift/swift-original.svg`,
    lines: [
      [
        { text: 'import', className: syntax.keyword },
        { text: ' SwiftUI' }
      ],
      [],
      [
        { text: '@main', className: syntax.keyword }
      ],
      [
        { text: 'struct', className: syntax.keyword },
        { text: ' GuilhermeLoboApp', className: syntax.type },
        { text: ': ', className: syntax.punctuation },
        { text: 'App', className: syntax.functionName },
        { text: ' {' }
      ],
      [
        { text: '  var', className: syntax.keyword },
        { text: ' body', className: syntax.property },
        { text: ': ', className: syntax.punctuation },
        { text: 'some', className: syntax.keyword },
        { text: ' Scene', className: syntax.functionName },
        { text: ' {' }
      ],
      [
        { text: '    WindowGroup', className: syntax.functionName },
        { text: ' {' }
      ],
      [
        { text: '      PortfolioView', className: syntax.type },
        { text: '()' }
      ],
      [
        { text: '        .preferredColorScheme', className: syntax.property },
        { text: '(.dark)' }
      ],
      [{ text: '    }' }],
      [{ text: '  }' }],
      [{ text: '}' }]
    ]
  },
  {
    fileName: 'portfolio.ts',
    logoSrc: `${deviconBaseUrl}/typescript/typescript-original.svg`,
    lines: [
      [
        { text: 'type', className: syntax.keyword },
        { text: ' Project', className: syntax.type },
        { text: ' = {' }
      ],
      [
        { text: '  name', className: syntax.property },
        { text: ': string;' }
      ],
      [
        { text: '  stack', className: syntax.property },
        { text: ': string[];' }
      ],
      [{ text: '};' }],
      [],
      [
        { text: 'const', className: syntax.keyword },
        { text: ' portfolio', className: syntax.property },
        { text: ': ', className: syntax.punctuation },
        { text: 'Project', className: syntax.type },
        { text: ' = {' }
      ],
      [
        { text: '  name', className: syntax.property },
        { text: ': ', className: syntax.punctuation },
        { text: "'Guilherme Lobo'", className: syntax.string },
        { text: ',' }
      ],
      [
        { text: '  stack', className: syntax.property },
        { text: ': [', className: syntax.punctuation },
        { text: "'React'", className: syntax.string },
        { text: ', ' },
        { text: "'TypeScript'", className: syntax.string },
        { text: ', ' },
        { text: "'Swift'", className: syntax.string },
        { text: ']' }
      ],
      [{ text: '};' }],
      [],
      [
        { text: 'export default', className: syntax.keyword },
        { text: ' portfolio;' }
      ]
    ]
  },
  {
    fileName: 'styles.css',
    logoSrc: `${deviconBaseUrl}/css3/css3-original.svg`,
    lines: [
      [
        { text: '.portfolio', className: syntax.type },
        { text: ' {' }
      ],
      [
        { text: '  display', className: syntax.property },
        { text: ': grid;' }
      ],
      [
        { text: '  gap', className: syntax.property },
        { text: ': 2rem;' }
      ],
      [
        { text: '  color', className: syntax.property },
        { text: ': ', className: syntax.punctuation },
        { text: '#C5DCDC', className: syntax.string },
        { text: ';' }
      ],
      [{ text: '}' }],
      [],
      [
        { text: '.project-card', className: syntax.type },
        { text: ' {' }
      ],
      [
        { text: '  transition', className: syntax.property },
        { text: ': transform 220ms ease;' }
      ],
      [{ text: '}' }],
      [],
      [
        { text: '.project-card:hover', className: syntax.type },
        { text: ' {' }
      ],
      [
        { text: '  transform', className: syntax.property },
        { text: ': translateY(-4px);' }
      ],
      [{ text: '}' }]
    ]
  }
];

const getLineLength = (line: CodeSegment[]) =>
  line.reduce((total, segment) => total + segment.text.length, 0);

const getSnippetLength = (snippet: CodeSnippet) =>
  snippet.lines.reduce(
    (total, line, index) => total + getLineLength(line) + (index < snippet.lines.length - 1 ? 1 : 0),
    0
  );

const getVisibleLineLength = (snippet: CodeSnippet, visibleChars: number, lineIndex: number) => {
  const previousLength = snippet.lines
    .slice(0, lineIndex)
    .reduce((total, line) => total + getLineLength(line) + 1, 0);

  return Math.min(Math.max(visibleChars - previousLength, 0), getLineLength(snippet.lines[lineIndex]));
};

const getCursorLineIndex = (snippet: CodeSnippet, visibleChars: number) => {
  let consumedChars = 0;

  for (let index = 0; index < snippet.lines.length; index += 1) {
    const lineLength = getLineLength(snippet.lines[index]);

    if (visibleChars <= consumedChars + lineLength) {
      return index;
    }

    consumedChars += lineLength + 1;
  }

  return snippet.lines.length - 1;
};

const renderLineSegments = (line: CodeSegment[], visibleLength: number) => {
  let consumedChars = 0;

  return line.map((segment, index) => {
    const remainingChars = visibleLength - consumedChars;
    consumedChars += segment.text.length;

    if (remainingChars <= 0) return null;

    return (
      <span key={`${segment.text}-${index}`} className={segment.className}>
        {segment.text.slice(0, remainingChars)}
      </span>
    );
  });
};

export const Hero: React.FC = () => {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeSnippet = codeSnippets[activeSnippetIndex];
  const snippetLength = useMemo(() => getSnippetLength(activeSnippet), [activeSnippet]);
  const cursorLineIndex = getCursorLineIndex(activeSnippet, visibleChars);

  useEffect(() => {
    const typingDelay = 26;
    const deletingDelay = 12;
    const completedDelay = 1300;
    const nextSnippetDelay = 320;

    if (!isDeleting && visibleChars < snippetLength) {
      const timeout = window.setTimeout(() => {
        setVisibleChars((currentLength) => Math.min(currentLength + 1, snippetLength));
      }, typingDelay);

      return () => window.clearTimeout(timeout);
    }

    if (!isDeleting && visibleChars === snippetLength) {
      const timeout = window.setTimeout(() => setIsDeleting(true), completedDelay);

      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && visibleChars > 0) {
      const timeout = window.setTimeout(() => {
        setVisibleChars((currentLength) => Math.max(currentLength - 2, 0));
      }, deletingDelay);

      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && visibleChars === 0) {
      const timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setActiveSnippetIndex((currentIndex) => (currentIndex + 1) % codeSnippets.length);
      }, nextSnippetDelay);

      return () => window.clearTimeout(timeout);
    }

    return undefined;
  }, [isDeleting, snippetLength, visibleChars]);

  return (
    <section
      className="grid grid-cols-12 grid-border-b pt-24 pb-12"
      aria-labelledby="hero-heading"
    >
      <div className="col-span-12 md:col-span-8 md:grid-border-r pr-0 md:pr-12 flex flex-col justify-end">
        <div className="animate-fade-in delay-100 space-y-4">
          <p className="text-sm font-medium tracking-tight text-neutral-500 uppercase flex items-center gap-2">
            <CodeIcon className="inline-icon h-4 w-4" />
            Desenvolvedor de Software
          </p>
          <h1
            id="hero-heading"
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-none text-neutral-900 dark:text-neutral-100"
          >
            Guilherme <br /> Lobo
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-600 dark:text-neutral-400 mt-2">
            Desenvolvedor
          </h2>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 pl-0 md:pl-12 pt-12 md:pt-0 flex flex-col justify-end animate-fade-in delay-200">
        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md font-medium">
          Sou desenvolvedor de software focado em criar aplicações escaláveis, limpas e fáceis de usar.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="/curriculo.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 text-sm font-semibold tracking-tight rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
          >
            Ver currículo
            <DocumentIcon className="inline-icon h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 text-sm font-semibold tracking-tight rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
          >
            Ver projetos
            <ArrowRightIcon className="inline-icon h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="col-span-12 mt-16 md:mt-24 border border-neutral-900/15 dark:border-[#C5DCDC]/20 rounded-lg bg-white dark:bg-[#131311] shadow-xl dark:shadow-2xl animate-fade-in delay-300 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <div className="h-10 bg-neutral-50 dark:bg-[#1B1B18] border-b border-neutral-900/15 dark:border-[#C5DCDC]/20 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          <div className="ml-auto flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-500 font-mono">
            <img
              src={activeSnippet.logoSrc}
              alt=""
              aria-hidden="true"
              decoding="async"
              className="h-4 w-4 object-contain"
            />
            {activeSnippet.fileName}
          </div>
        </div>
        <div
          className="min-h-[22rem] p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 overflow-x-auto"
          aria-label={`Código animado em ${activeSnippet.fileName}`}
        >
          {activeSnippet.lines.map((line, index) => {
            const visibleLineLength = getVisibleLineLength(activeSnippet, visibleChars, index);

            return (
              <div key={`${activeSnippet.fileName}-${index}`} className="min-h-[1.5em] whitespace-pre">
                {renderLineSegments(line, visibleLineLength)}
                {cursorLineIndex === index && (
                  <span className="ml-0.5 inline-block h-5 w-2.5 animate-pulse align-middle bg-neutral-400 dark:bg-[#C5DCDC]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

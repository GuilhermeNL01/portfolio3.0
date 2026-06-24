import React from 'react';

export const About: React.FC = () => {
  const highlights = [
    { label: 'FORMAÇÃO', value: 'Apple Developer Academy' },
    { label: 'GRADUAÇÃO', value: 'Ciência da Computação — UCB' },
    { label: 'CERTIFICAÇÃO', value: 'Swift Certified User — Apple' },
    { label: 'IDIOMAS', value: 'Português • Inglês C2' }
  ];

  return (
    <section id="about" className="grid grid-cols-12 grid-border-b" aria-labelledby="about-heading">
      {/* Photo — 5 cols desktop, full width mobile */}
      <div className="col-span-12 md:col-span-5 md:grid-border-r overflow-hidden">
        <div className="min-h-[320px] md:h-full bg-neutral-100 dark:bg-neutral-900 relative">
          <img
            src="/about-photo.jpg"
            alt="Guilherme Lobo"
            className="w-full h-full object-cover object-top absolute inset-0"
          />
        </div>
      </div>

      {/* Content — 7 cols desktop, full width mobile */}
      <div className="col-span-12 md:col-span-7 p-8 md:p-16 flex flex-col justify-center">
        <h2
          id="about-heading"
          className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100 leading-none"
        >
          Sobre mim
        </h2>

        <p className="mt-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
          Sou desenvolvedor de software com experiência no desenvolvimento de aplicações mobile, web
          e soluções full-stack. Recém-graduado em Ciência da Computação pela UCB e ex-participante
          da Apple Developer Academy, tenho interesse em construir produtos que resolvam problemas
          reais por meio de soluções eficientes, escaláveis e bem estruturadas. Valorizo código
          limpo, boas práticas de desenvolvimento e a criação de experiências intuitivas para os
          usuários.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="border border-neutral-900/10 dark:border-[#C5DCDC]/15 rounded-sm p-4 bg-white dark:bg-[#1B1B18]"
            >
              <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                {h.label}
              </p>
              <p className="text-sm font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 leading-snug">
                {h.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

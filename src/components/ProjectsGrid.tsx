import React from 'react';

type Project = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
};
const projects: Project[] = [
  {
    title: 'Reelstack',
    description: 'Uma plataforma baseada em gestos de deslizar para fãs de cinema descobrirem o próximo filme para assistir.',
    imageSrc: '/projects/reel_logo.png',
    imageAlt: 'Prévia do projeto Reelstack',
    tags: ['React', 'TypeScript', 'Vite']
  },
  {
    title: 'Este Portfólio',
    description: 'Meu site de portfólio atual, por onde você está navegando agora.',
    imageSrc: '/projects/portfolio_logo.png',
    imageAlt: 'Prévia do projeto Portfólio',
    tags: ['Tailwind CSS', 'React', 'TypeScript', 'Vite']
  },
  {
    title: 'Study in Gray',
    description: 'Um jogo investigativo para iPad, inspirado em pistas e dedução, que usa machine learning de forma inovadora.',
    imageSrc: '/projects/study_logo.png',
    imageAlt: 'Prévia do projeto Study in Gray',
    tags: ['CoreML', 'UIKit', 'AVFoundation','Xcode']
  },
  {
    title: 'Hermes Tracking',
    description: 'Centraliza o rastreamento de encomendas, com atualizações em tempo real e notificações automáticas.',
    imageSrc: '/projects/hermes_logo.png',
    imageAlt: 'Prévia do projeto Hermes Tracking',
    tags: ['UIKit', 'MVC', 'Coordinator']
  },
  {
    title: 'Step Quest',
    description:
      'Um app para watchOS que transforma caminhadas diárias em missões de espionagem com desafios.',
    imageSrc: '/projects/step_logo.png',
    imageAlt: 'Prévia do projeto Step Quest',
    tags: ['watchOS', 'SwiftUI', 'HealthKit']
  },
  {
    title: 'Planetarium',
    description:
      'Um app de realidade aumentada para iPad que permite explorar o sistema solar posicionando planetas em ambientes reais.',
    imageSrc: '/projects/planetarium_logo.png',
    imageAlt: 'Prévia do projeto Planetarium',
    tags: ['ARKit', 'RealityKit']
  },
  {
    title: 'Shyne',
    description:
      'Um app criado para desenvolver habilidades sociais com exercícios interativos e acompanhamento diário.',
    imageSrc: '/projects/shyne_logo.png',
    imageAlt: 'Prévia do projeto Shyne',
    tags: ['UIKit', 'MVVM-C', 'CoreData']
  },
  {
    title: 'Collapse',
    description:
      'Um jogo de plataforma 2D em que jogadores exploram um mundo em colapso e dominam mecânicas de movimento para sobreviver.',
    imageSrc: '/projects/collapse_logo.png',
    imageAlt: 'Prévia do projeto Collapse',
    tags: ['SpriteKit', 'GameplayKit']
  },
  {
    title: 'My Card Collection',
    description:
      'Um gerenciador de coleção de cartas de Magic: The Gathering com busca e recursos de organização.',
    imageSrc: '/projects/mycard_logo.png',
    imageAlt: 'Prévia do projeto My Card Collection',
    tags: ['SwiftUI', 'SwiftData', 'REST API']
  }
];

export const ProjectsGrid: React.FC = () => {
  return (
    <section
      id="projects"
      className="grid grid-cols-12 grid-border-b"
      aria-labelledby="projects-heading"
    >
      <div className="col-span-12 p-8 grid-border-b bg-white dark:bg-[#131311] z-10 sticky top-0 md:relative flex justify-between items-end">
        <h2
          id="projects-heading"
          className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100"
        >
          Projetos
        </h2>
        <span className="text-sm font-medium tracking-tight text-neutral-500 uppercase hidden md:block">
          Projetos selecionados
        </span>
      </div>

      {projects.map((project, index) => {
        const colClasses =
          'project-card col-span-12 md:col-span-6 lg:col-span-4 p-8 grid-border-b block';
        const borderRight =
          index === 0 || index === 1 || index === 3 || index === 4 ? ' grid-border-r' : '';
 
        return (
          <div
            key={project.title}
            className={colClasses + borderRight}
          >
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm mb-6 overflow-hidden relative flex items-center justify-center project-img">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/50 dark:from-neutral-800/20 to-transparent pointer-events-none" />
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-200">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium mb-6 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold tracking-tight px-2 py-1 bg-neutral-50 dark:bg-[#1B1B18] border border-neutral-900/15 dark:border-[#C5DCDC]/20 text-neutral-700 dark:text-neutral-300 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

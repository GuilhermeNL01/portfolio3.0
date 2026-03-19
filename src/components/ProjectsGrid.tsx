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
    description: 'A swipe based platform for film enjoyers to discover their next movie to watch.',
    imageSrc: '/projects/reel_logo.png',
    imageAlt: 'Reelstack project preview',
    tags: ['React', 'Typescript', 'Vite']
  },
  {
    title: 'This Portfolio',
    description: 'My current portfolio website, where you are currently browsing.',
    imageSrc: '/projects/portfolio_logo.png',
    imageAlt: 'Portfolio project preview',
    tags: ['Tailwind CSS', 'React', 'Typescript', 'Vite']
  },
  {
    title: 'Study in Gray',
    description: 'A ipad investigation clue-like game that uses machine learning in a inovative way.',
    imageSrc: '/projects/study_logo.png',
    imageAlt: 'Study in Gray project preview',
    tags: ['CoreML', 'UIKit', 'AVFoundation','Xcode']
  },
  {
    title: 'Hermes Tracking',
    description: 'Centralizes package tracking, providing real-time updates and automatic notifications.',
    imageSrc: '/projects/hermes_logo.png',
    imageAlt: 'Hermes Tracking project preview',
    tags: ['UIKit', 'MVC', 'Coordinator']
  },
  {
    title: 'Step Quest',
    description:
      'A WatchOS app that turns daily walking into spy missions where users complete challenges.',
    imageSrc: '/projects/step_logo.png',
    imageAlt: 'Step Quest project preview',
    tags: ['WatchOS', 'SwiftUI', 'HealthKit']
  },
  {
    title: 'Planetarium',
    description:
      'An AR-based iPad app allowing users to explore the solar system by placing planets in real-world environments.',
    imageSrc: '/projects/planetarium_logo.png',
    imageAlt: 'Planetarium project preview',
    tags: ['ARKit', 'RealityKit']
  },
  {
    title: 'Shyne',
    description:
      'An app designed to improve social skills through interactive exercises and daily tracking.',
    imageSrc: '/projects/shyne_logo.png',
    imageAlt: 'Shyne project preview',
    tags: ['UIKit', 'MVVM-C', 'CoreData']
  },
  {
    title: 'Collapse',
    description:
      'A 2D platformer where players navigate a collapsing world and master movement mechanics to survive.',
    imageSrc: '/projects/collapse_logo.png',
    imageAlt: 'Collapse project preview',
    tags: ['SpriteKit', 'GameplayKit']
  },
  {
    title: 'My Card Collection',
    description:
      'A Magic: The Gathering card collection manager with search and organization features.',
    imageSrc: '/projects/mycard_logo.png',
    imageAlt: 'My Card Collection project preview',
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
      <div className="col-span-12 p-8 grid-border-b bg-neutral-50 dark:bg-neutral-950 z-10 sticky top-0 md:relative flex justify-between items-end">
        <h2
          id="projects-heading"
          className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100"
        >
          Projects
        </h2>
        <span className="text-sm font-medium tracking-tight text-neutral-500 uppercase hidden md:block">
          Selected Works
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
                  className="text-xs font-semibold tracking-tight px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-sm"
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
 
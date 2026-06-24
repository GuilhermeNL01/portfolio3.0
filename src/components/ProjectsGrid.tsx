import React from 'react';
import { projectsData, ProjectData } from '../data/projectsData';

type Props = {
  onProjectSelect: (project: ProjectData) => void;
};

export const ProjectsGrid: React.FC<Props> = ({ onProjectSelect }) => {
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

      {projectsData.map((project, index) => {
        const colClasses =
          'project-card col-span-12 md:col-span-6 lg:col-span-4 p-8 grid-border-b cursor-pointer text-left bg-transparent';
        const borderRight =
          index % 3 !== 2 && index + 1 < projectsData.length ? ' grid-border-r' : '';

        return (
          <button
            key={project.id}
            type="button"
            className={colClasses + borderRight}
            onClick={() => onProjectSelect(project)}
            aria-label={`Ver detalhes de ${project.title}`}
          >
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm mb-6 overflow-hidden relative flex items-center justify-center project-img">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/50 dark:from-neutral-800/20 to-transparent pointer-events-none" />
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
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
          </button>
        );
      })}
    </section>
  );
};

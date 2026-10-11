import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<Project["category"], string> = {
  sistema: "Sistema",
  rede: "Rede",
  infraestrutura: "Infraestrutura",
  suporte: "Suporte",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-lg hover:shadow-teal/10">
      <span className="w-fit rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber">
        {categoryLabels[project.category]}
      </span>

      <h3 className="mt-4 text-lg font-semibold text-text">{project.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => {
          return (
            <span
              key={tech}
              className="rounded-lg bg-bg-alt px-2 py-1 text-xs text-text-muted"
            >
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
}

import { Container } from "../components/Container";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projetos" className="bg-bg-alt py-14 sm:py-20">
      <Container>
        <h2 className="text-3xl font-bold text-text">Projetos</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </Container>
    </section>
  );
}

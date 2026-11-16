import { projects } from "../data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects">
      <h2 id="projects-title">Publications and Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

import { useLanguage } from "../context/LanguageContext";
import useSeo from "../hooks/useSeo";
import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  useSeo("projects", "/projects");
  const { t } = useLanguage();

  return (
    <>
      <section className="page-header panel-grid">
        <div className="container-rahat">
          <h1>{t.projects.title}</h1>
          <p>{t.projects.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-rahat">
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-12 col-sm-6 col-lg-4" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

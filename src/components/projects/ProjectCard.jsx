import { useLanguage } from "../../context/LanguageContext";

export default function ProjectCard({ project }) {
  const { t } = useLanguage();

  return (
    <div className="card-rahat h-100">
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.hasData ? project.title : t.projects.comingSoon} 
          className="card-rahat__image mb-3"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'grid';
          }}
        />
      ) : null}
      <div className="card-rahat__placeholder mb-3" style={{ display: project.image ? 'none' : 'grid' }}>
        <i className="bi bi-sun" aria-hidden="true"></i>
      </div>
      {project.hasData ? (
        <>
          <h3>{project.title}</h3>
          <p className="badge-rahat mb-2">{project.location}</p>
          {project.capacity && <p className="text-muted-custom">{project.capacity}</p>}
          <p className="text-muted-custom mb-0">{project.description}</p>
        </>
      ) : (
        <>
          <h3>{t.projects.comingSoon}</h3>
          <p className="text-muted-custom mb-0">{t.projects.placeholderNote}</p>
        </>
      )}
    </div>
  );
}

// src/pages/Project.jsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import "../assets/styles/details.css"

export default function Project() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <section className="project">
        <h1>Project not found</h1>
        <p>We couldn’t find that case study.</p>
        <Link className="btn btn-outline" to="/work">Back to Portfolio</Link>
      </section>
    );
  }

  return (
    <section className="project">
      <Link className="back-link" to="/Portfolio">← Back to Portfolio</Link>

      <h1 className="project-title">{project.title}</h1>
      <p className="project-meta">
        {project.year} • {project.tags.join(" • ")}
      </p>

      {project.hero ? (
        <img className="project-hero" src={project.hero} alt={project.title} loading="lazy" />
      ) : (
        <img className="project-hero" src={project.image} alt={project.title} loading="lazy" />
      )}

      <p className="project-summary">{project.summary || project.blurb}</p>

      {project.deliverables?.length > 0 && (
        <div className="project-deliverables">
          <h3>Deliverables</h3>
          <ul>
            {project.deliverables.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}
    </section>
  );
}

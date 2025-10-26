// src/pages/Project.jsx
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "../assets/styles/details.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // build a clean image list: remove falsy entries, dedupe, keep sensible max
  const raw = project?.images ?? (project ? [project.image] : []);
  const images = Array.isArray(raw)
    ? [...new Set(raw.filter(Boolean))].slice(0, 12) // dedupe & cap
    : raw
    ? [raw]
    : [];

  const [selected, setSelected] = useState(images[0] || null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) return <div style={{ padding: 24 }}>Project not found.</div>;

  return (
    <div className="project-page">
      <div className="project">
        <Link to="/Portfolio" className="back-link">← Back to Portfolio</Link>
        <h1 className="project-title">{project.title}</h1>
        <div className="project-meta">{project.year} • {project.tags?.join(", ")}</div>

        <div className="gallery">
          <button
            className="main-img-btn"
            onClick={() => setLightboxOpen(true)}
            aria-label="Open image"
          >
            <img
              src={selected}
              alt={project.title}
              className="project-hero main-img"
            />
          </button>

          <div className="thumbs" role="list">
            {images.map((src) => (
              <button
                key={src}
                className={`thumb ${src === selected ? "active" : ""}`}
                onClick={() => setSelected(src)}
                aria-label="Show image"
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="project-deliverables">
          <h3>Deliverables</h3>
          <ul>
            {project.deliverables?.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="lightbox" onClick={() => setLightboxOpen(false)}>
            <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">✕</button>
              <img src={selected} alt={project.title} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

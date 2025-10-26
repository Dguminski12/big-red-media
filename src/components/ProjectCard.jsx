import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { id, title, image, tags, blurb } = project;

  return (
    <article className="card">
      <Link to={`/Portfolio/${id}`} className="card-link" aria-label={`Open ${title}`}>
        <img src={image} alt={title} loading="lazy" />
      </Link>

      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/Portfolio/${id}`} className="card-link">{title}</Link>
        </h3>

        <p className="card-text">{blurb}</p>

        <div className="card-tags">{Array.isArray(tags) ? tags.join(" • ") : tags}</div>

        {/* Always render View button */}
        <div>
          <Link to={`/Portfolio/${id}`} className="btn" aria-label={`View ${title}`}>View</Link>
        </div>
      </div>
    </article>
  );
}

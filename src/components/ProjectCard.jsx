import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { id, title, image, tags, blurb, url } = project;

  return (
    <article className="card">
      <Link to={`/work/${id}`} className="card-link" aria-label={`Open ${title}`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
      />
      </Link>
      <div className="card-body">
        <h3 className="card-title"><Link to={`/work/${id}`} className="card-link">{title}</Link></h3>
        <p className="card-text">{blurb}</p>
        <div className="card-tags">{Array.isArray(tags) ? tags.join(" • ") : tags}</div>
        {url && (
          <a
            className="btn"
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 10, display: "inline-block" }}
          >
           <Link to={`/Portfolio/${id}`} className="card-link"> View </Link>
          </a>
        )}
      </div>
    </article>
  );
}

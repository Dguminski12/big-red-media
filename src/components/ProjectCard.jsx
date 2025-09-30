
export default function ProjectCard({ project }) {
  const { title, image, tags, blurb, url } = project;

  return (
    <article className="card">
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
      />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
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
            View
          </a>
        )}
      </div>
    </article>
  );
}

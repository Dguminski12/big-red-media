import "../assets/styles/portfolio.css"
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Work() {
  return (
    <section className="work-page">
      <h1>My Work</h1>
      <p className="work-intro">
        A selection of projects across logo design, photo editing, and digital media. Click "View" below to see details and more images.
      </p>

      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

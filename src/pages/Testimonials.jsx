import { Link } from "react-router-dom";
import "../assets/styles/testimonials.css";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <div className="testimonials-hero-text">
          <h1>Brands that trust Big Red Media</h1>
          <p>
            Clubs, startups, and community organisers lean on quick-turn graphics, social kits, and
            full brand systems that keep them visible and consistent.
          </p>
          <div className="testimonials-hero-tags">
            <span>Sports & events</span>
            <span>Logos & identity</span>
            <span>Social campaigns</span>
          </div>
        </div>
        <aside className="testimonials-hero-note">
          <h2>Working together</h2>
          <ul>
            <li>Clear milestones with check-in previews</li>
            <li>Organised handovers with editable source files</li>
            <li>Fast tweaks so launches never stall</li>
          </ul>
          <Link to="/Contact" className="testimonials-cta">
            Start a project
          </Link>
        </aside>
      </section>

      <section className="testimonials-section">
        <header>
          <h2>Trusted results</h2>
          <p>Snapshot feedback from recent collaborations across branding, campaigns, and event promos.</p>
        </header>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.client}>
              <div className="testimonial-client">
                <h3>{item.client}</h3>
                <span>{item.role}</span>
              </div>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <ul className="testimonial-deliverables">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section testimonials-contact">
        <div className="testimonials-contact-card">
          <h2>Need fresh graphics?</h2>
          <p>
            Whether you need a logo refresh, a launch kit, or retainer support, I can tailor a package that
            keeps your visuals sharp and on-brand.
          </p>
          <Link to="/Contact" className="testimonials-contact-link">
            Book a discovery call
          </Link>
        </div>
      </section>
    </div>
  );
}

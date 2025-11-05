import "../assets/styles/pricing.css";
import { pricing } from "../data/pricing";

function FeatureList({ items }) {
  return (
    <ul className="pricing-card-features">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function PricingCard({ plan, label }) {
  return (
    <article className={`pricing-card ${plan.highlight ? "is-featured" : ""}`}>
      {plan.highlight && <span className="pricing-card-badge">Most booked</span>}
      <header className="pricing-card-header">
        <h3>{plan.name}</h3>
        <span className="pricing-card-price">{plan.price}</span>
      </header>
      <p className="pricing-card-blurb">{plan.blurb}</p>
      <FeatureList items={plan.features} />
      {label && <p className="pricing-card-label">{label}</p>}
    </article>
  );
}

export default function Pricing() {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-hero-main">
          <h1>{pricing.hero.title}</h1>
          <p>{pricing.hero.subtitle}</p>
          <div className="pricing-hero-badges">
            {pricing.hero.badges.map((badge, index) => (
              <span className="pricing-hero-badge" key={index}>
                {badge}
              </span>
            ))}
          </div>
        </div>
        <aside className="pricing-hero-note">
          <h2>How it works</h2>
          <p>{pricing.hero.note}</p>
        </aside>
      </section>

      <section className="pricing-section">
        <header className="pricing-section-header">
          <h2>Brand identity kits</h2>
          <p>Logo suites, palettes, and launch graphics built for clarity and consistency.</p>
        </header>
        <div className="pricing-grid">
          {pricing.identity.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="pricing-section">
        <header className="pricing-section-header">
          <h2>Social media & campaign design</h2>
          <p>Keep your feed cohesive, launch a new idea, or plan a multi-platform rollout.</p>
        </header>
        <div className="pricing-grid">
          {pricing.social.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="pricing-section">
        <header className="pricing-section-header">
          <h2>Promo & event graphics</h2>
          <p>From posters and signage to packaging and merch concepts.</p>
        </header>
        <div className="pricing-grid">
          {pricing.promo.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="pricing-section pricing-addons">
        <header className="pricing-section-header">
          <h2>Add-ons & extras</h2>
          <p>Mix and match extras to round out any package.</p>
        </header>
        <ul className="pricing-addons-list">
          {pricing.addOns.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pricing-section">
        <header className="pricing-section-header">
          <h2>Retainer options</h2>
          <p>Reserve ongoing creative support so your visuals never stall.</p>
        </header>
        <div className="pricing-retainers">
          {pricing.retainers.map((retainer) => (
            <article className="retainer-card" key={retainer.name}>
              <div className="retainer-card-header">
                <h3>{retainer.name}</h3>
                <span>{retainer.price}</span>
              </div>
              <p>{retainer.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="pricing-section pricing-notes">
        <header className="pricing-section-header">
          <h2>The fine print</h2>
        </header>
        <ul>
          {pricing.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

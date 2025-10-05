import { useState } from "react";
import "../assets/styles/contact.css";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData(e.target);
      const res = await fetch("/Contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="contact">
      <h1>Contact</h1>
      <p className="contact-intro">
        Tell me about your project — logos, photo edits, social posts, banners, or ads.
      </p>

      <form
        name="contact"
        method="POST"
        action="/Contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="form"
        onSubmit={handleSubmit}
      >
        {/* Hidden input required by Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot trap (hidden from humans) */}
        <p className="hp">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" onChange={() => {}} />
          </label>
        </p>

        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="input"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <div className="field">
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            name="message"
            className="textarea"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="What do you need? Timeline? Links to any examples?"
          />
        </div>

        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        <div className="form-status" aria-live="polite">
          {status === "sent" && <span className="ok">Thanks! I’ll reply shortly.</span>}
          {status === "error" && <span className="err">Something went wrong — please try again.</span>}
        </div>
      </form>
    </section>
  );
}

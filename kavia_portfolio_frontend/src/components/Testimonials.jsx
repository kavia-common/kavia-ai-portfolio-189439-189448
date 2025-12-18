import React from "react";

const TESTIMONIALS = [
  {
    name: "Amina R.",
    role: "Product Manager",
    text: "Kavia turns messy notes into crisp summaries and next steps. It’s like having a second brain that never forgets context."
  },
  {
    name: "Diego S.",
    role: "Founder",
    text: "The writing quality is excellent—fast drafts, clean tone, and it keeps the output practical. Our team ships faster now."
  },
  {
    name: "Priya K.",
    role: "Support Lead",
    text: "We use Kavia to draft responses and create playbooks. It keeps things consistent and helps new team members ramp up quickly."
  }
];

function initials(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
}

// PUBLIC_INTERFACE
export default function Testimonials() {
  /** Testimonials section highlighting social proof. */
  return (
    <section id="testimonials" className="section" aria-label="Testimonials">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Testimonials</span>
          <h2 className="section-title">Loved by builders and teams</h2>
          <p className="section-subtitle">
            A few words from people using Kavia to write, plan, and communicate more effectively.
          </p>
        </header>

        <div className="grid grid-3" role="list" aria-label="Testimonials list">
          {TESTIMONIALS.map((t) => (
            <article className="card" role="listitem" key={t.name}>
              <div className="quote-mark" aria-hidden="true">
                “
              </div>
              <p className="quote">{t.text}”</p>

              <div className="person">
                <div className="avatar" aria-hidden="true">
                  {initials(t.name)}
                </div>
                <div className="person-meta">
                  <span className="person-name">{t.name}</span>
                  <span className="person-role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

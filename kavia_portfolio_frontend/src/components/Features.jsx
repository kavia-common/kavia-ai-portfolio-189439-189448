import React from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "Fast, clear answers",
    desc: "Quick responses with structured takeaways so you can act immediately."
  },
  {
    icon: "🧠",
    title: "Context-aware chat",
    desc: "Maintains conversation context and adapts tone for your audience and intent."
  },
  {
    icon: "🧩",
    title: "Workflow automation",
    desc: "Turns requests into checklists, drafts, summaries, and repeatable templates."
  },
  {
    icon: "🛡️",
    title: "Safe-by-default",
    desc: "Designed to reduce ambiguity and encourage verification for critical decisions."
  }
];

// PUBLIC_INTERFACE
export default function Features() {
  /** Features section presenting core capabilities. */
  return (
    <section id="features" className="section section--alt" aria-label="Features">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Features</span>
          <h2 className="section-title">A toolkit for modern work</h2>
          <p className="section-subtitle">
            Kavia blends helpful UX with powerful AI capabilities—focused on clarity, speed, and usefulness.
          </p>
        </header>

        <div className="grid grid-4" role="list" aria-label="Feature list">
          {FEATURES.map((f) => (
            <article className="card" role="listitem" key={f.title}>
              <div className="icon" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

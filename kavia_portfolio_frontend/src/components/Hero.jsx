import React from "react";

// PUBLIC_INTERFACE
export default function Hero() {
  /** Hero/Introduction section for Kavia AI. */
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div>
          <div className="hero-eyebrow">
            <span className="pill-dot" aria-hidden="true" />
            Built for helpful, safe, fast conversations
          </div>

          <h1 className="hero-title">
            Meet <span className="accent">Kavia</span>, your modern AI chatbot.
          </h1>

          <p className="hero-desc">
            Kavia helps teams and individuals get answers, draft content, and automate repetitive work—while keeping
            responses clear, grounded, and easy to act on.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a className="btn" href="#features">
              View features
            </a>
          </div>

          <div className="hero-meta" aria-label="Highlights">
            <span>
              <strong>Instant</strong> answers
            </span>
            <span>
              <strong>Context-aware</strong> assistance
            </span>
            <span>
              <strong>Secure</strong> by design
            </span>
          </div>
        </div>

        <aside className="hero-card" aria-label="Kavia preview">
          <h3>Preview</h3>
          <div className="chat-preview" role="region" aria-label="Chat preview">
            <div className="bubble user">Summarize last week’s updates and suggest next steps.</div>
            <div className="bubble kavia">
              I can do that. Share your notes or paste the update thread and I’ll:
              <br />
              <strong>1)</strong> extract key themes, <strong>2)</strong> list decisions & blockers, and{" "}
              <strong>3)</strong> propose a concise plan for next week.
            </div>
            <div className="bubble user">Also draft a quick message for the team.</div>
            <div className="bubble kavia">
              Done—here’s a friendly draft with action items, owners, and a clear timeline.
            </div>
          </div>

          <div className="badges" aria-label="Capability badges">
            <span className="badge">Reasoning</span>
            <span className="badge">Summaries</span>
            <span className="badge">Drafting</span>
            <span className="badge">Automation</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

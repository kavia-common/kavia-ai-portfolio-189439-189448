import React from "react";

// PUBLIC_INTERFACE
export default function NavBar() {
  /** Sticky top navigation with anchor links to sections. */
  return (
    <header className="nav" aria-label="Top navigation">
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="Kavia AI home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">
            <span className="brand-name">Kavia</span>
            <span className="brand-tagline">AI chatbot portfolio</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-cta">
          <a className="btn btn-ghost" href="#features">
            Explore
          </a>
          <a className="btn btn-primary" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

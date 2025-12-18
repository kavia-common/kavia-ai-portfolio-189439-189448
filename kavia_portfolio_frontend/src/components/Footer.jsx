import React from "react";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer for the single-page Kavia portfolio site. */
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer-inner">
        <small>© {year} Kavia AI. All rights reserved.</small>

        <nav aria-label="Footer links" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <a href="#home">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}

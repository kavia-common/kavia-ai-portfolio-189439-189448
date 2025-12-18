import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// PUBLIC_INTERFACE
function App() {
  /** Main single-page portfolio app for the Kavia AI website. */
  return (
    <div className="App">
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <NavBar />

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

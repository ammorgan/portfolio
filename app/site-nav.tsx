"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className="nav shell" aria-label="Main navigation">
      <a className="wordmark" href="/" aria-label="Mandie Morgan, home">MM<span className="dot">.</span></a>
      <button className="mobileMenuButton" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="menuLine" /><span className="menuLine" /><span className="menuLine" />
      </button>
      <div className={`navLinks ${menuOpen ? "isOpen" : ""}`} id="mobile-navigation">
        <ThemeToggle />
        <a href="/experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="/amanda-morgan-resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Résumé ↗</a>
        <a className="navCta" href="mailto:amanda01cj@icloud.com?subject=Let%27s%20start%20a%20conversation" onClick={() => setMenuOpen(false)}>Let&apos;s talk ↗</a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div><span className="footerEyebrow">Technical Product &amp; Engineering Leader</span><h2>Have a complex problem worth solving?</h2></div>
        <div className="footerActions">
          <a href="mailto:amanda01cj@icloud.com?subject=Let%27s%20start%20a%20conversation">amanda01cj@icloud.com ↗</a>
          <a href="https://www.linkedin.com/in/amandammorgan/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
          <a href="https://github.com/ammorgan?tab=repositories" target="_blank" rel="noreferrer">View GitHub ↗</a>
          <a href="/amanda-morgan-resume.pdf" target="_blank" rel="noreferrer">Download résumé ↓</a>
        </div>
        <div className="footerBottom"><span>© {new Date().getFullYear()} Mandie Morgan</span><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}

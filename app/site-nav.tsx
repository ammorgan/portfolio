"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { href: "/", label: "Overview" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOutside);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuOpen]);

  return (
    <header className="siteHeader" ref={header} id="top">
      <a className="skipLink" href="#main-content">Skip to content</a>
      <nav className="nav shell" aria-label="Main navigation">
        <Link className="wordmark" href="/" onClick={() => setMenuOpen(false)} aria-label="Mandie Morgan, home">
          <span className="monogram" aria-hidden="true">MM</span>
          <span>Mandie Morgan<small>Technical Product Leader</small></span>
        </Link>
        <button ref={menuButton} className="mobileMenuButton" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menuIcon" aria-hidden="true"><span /><span /><span /></span>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div className={`navPanel ${menuOpen ? "isOpen" : ""}`} id="site-navigation">
          <div className="navLinks">
            {navigation.map(({ href, label }) => <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          </div>
          <div className="navUtilities">
            <a className="navResume" href="/mandie-morgan-resume-october-2026.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Résumé <span className="visuallyHidden">(PDF, opens in a new tab)</span></a>
            <ThemeToggle />
            <a className="button buttonSmall" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter" id="contact">
      <div className="shell">
        <div className="footerMain">
          <div className="footerIntro">
            <span className="eyebrow">Let’s connect</span>
            <h2>Good product work starts with a conversation.</h2>
            <p>My focus is Lead and Principal Technical Product Manager roles across enterprise platforms, integrations, and AI-assisted delivery.</p>
            <a className="button buttonLight" href="mailto:amanda01cj@icloud.com?subject=Let%27s%20start%20a%20conversation">Email Mandie</a>
            <a className="footerEmail" href="mailto:amanda01cj@icloud.com">amanda01cj@icloud.com</a>
          </div>
          <div className="footerColumn"><h3>Explore</h3>{navigation.map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}</div>
          <div className="footerColumn"><h3>Connect &amp; resources</h3><a href="https://www.linkedin.com/in/amandammorgan/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ammorgan?tab=repositories" target="_blank" rel="noreferrer">GitHub</a><a href="/mandie-morgan-resume-october-2026.pdf" target="_blank" rel="noreferrer">Résumé (PDF)</a><a href="/mandie-morgan-work-sample-october-2026.pdf" target="_blank" rel="noreferrer">Work sample (PDF)</a></div>
        </div>
        <div className="footerBottom"><span>© {new Date().getFullYear()} Mandie Morgan</span><span>Aubrey, Texas</span><a href="#top">Back to top</a></div>
      </div>
    </footer>
  );
}

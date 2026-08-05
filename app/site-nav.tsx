import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
  return (
    <nav className="nav shell" aria-label="Main navigation">
      <a className="wordmark" href="/" aria-label="Mandie Morgan, home">MM<span className="dot">.</span></a>
      <div className="navLinks">
        <ThemeToggle />
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/amanda-morgan-resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        <a className="navCta" href="mailto:amanda01cj@icloud.com?subject=Let%27s%20start%20a%20conversation">Let&apos;s talk ↗</a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div><span className="footerEyebrow">Technical Product &amp; Engineering Leader</span><h2>Let&apos;s build what&apos;s next.</h2></div>
        <div className="footerActions">
          <a href="mailto:amanda01cj@icloud.com?subject=Let%27s%20start%20a%20conversation">amanda01cj@icloud.com ↗</a>
          <a href="/amanda-morgan-resume.pdf" target="_blank" rel="noreferrer">Download résumé ↓</a>
        </div>
        <div className="footerBottom"><span>© {new Date().getFullYear()} Mandie Morgan</span><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}

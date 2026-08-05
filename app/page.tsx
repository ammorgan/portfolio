import { SiteFooter, SiteNav } from "./site-nav";

const metrics = [
  ["2.5M", "Quotes delivered in 2024"],
  ["53%", "Purchase increase vs. Policy Center"],
  ["60+", "Engineering dependencies managed"],
  ["92%", "Intern conversion + $150K saved"],
];

export default function Home() {
  return (
    <main id="top">
      <SiteNav />
      <section className="recruiterHero shell">
        <div className="availability"><span /> Technical Product &amp; Engineering Leader</div>
        <div className="heroGrid">
          <div>
            <h1>I turn complex<br />technology into<br /><em>clear momentum.</em></h1>
            <p className="heroSummary"><strong>Technical product leader specializing in complex problem discovery, enterprise integrations, AI-assisted analysis, and cross-functional solution design.</strong><br /><span>11+ years connecting strategy, delivery, and people to move enterprise platforms forward.</span></p>
            <div className="heroActions">
              <a className="primaryButton" href="/projects">Explore technical work ↗</a>
              <a className="textButton" href="/amanda-morgan-resume.pdf" target="_blank" rel="noreferrer">Download résumé ↓</a>
            </div>
          </div>
          <figure className="heroPortrait">
            <img src="/amanda-morgan.jpg" alt="Mandie Morgan smiling outdoors" />
            <figcaption>Austin, TX · Hybrid</figcaption>
          </figure>
        </div>
      </section>

      <section className="impactStrip">
        <div className="shell metricGrid">
          {metrics.map(([value, label]) => <div className="metric" key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="proofSection shell">
        <div className="sectionIntro"><span className="kicker">What I bring</span><h2>Leadership at the intersection of <em>product, engineering, and operations.</em></h2></div>
        <div className="proofGrid">
          <article><span>01</span><h3>Platform transformation</h3><p>Translate architecture, data flows, dependencies, and business priorities into plans teams can execute.</p></article>
          <article><span>02</span><h3>Technical product strategy</h3><p>Shape roadmaps, prioritize backlogs, and align customer outcomes with scalable engineering delivery.</p></article>
          <article><span>03</span><h3>AI-enabled delivery</h3><p>Use GitHub Copilot and LLMs to accelerate technical discovery, analysis, and requirements validation.</p></article>
          <article><span>04</span><h3>People &amp; organizations</h3><p>Build high-performing teams through coaching, operational clarity, executive communication, and influence.</p></article>
        </div>
      </section>

      <section className="featuredWork">
        <div className="shell featuredGrid">
          <div><span className="kicker light">Featured technical project</span><h2>Engineering<br />Analytics<br /><em>Platform</em></h2></div>
          <div className="featureDetails">
            <p className="featureLead">A React-based analytics platform designed to turn multi-repository GitLab activity into actionable engineering intelligence.</p>
            <ul><li>Delivery health and development activity</li><li>Defect trends and status insights</li><li>API integrations and caching strategies</li><li>AI-assisted operational analysis</li></ul>
            <a className="inverseButton" href="/projects">View project breakdown ↗</a>
          </div>
        </div>
      </section>

      <section className="quoteSection shell">
        <span className="kicker">A belief I live by</span>
        <blockquote>“A problem is just a solution<br />that <em>hasn&apos;t been found yet.</em>”</blockquote>
      </section>
      <SiteFooter />
    </main>
  );
}

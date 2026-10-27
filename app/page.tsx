import { SiteFooter, SiteNav } from "./site-nav";

const strengths = [
  { title: "Problem discovery", text: "I define ambiguous problems, challenge assumptions, and use research and repository analysis to uncover missing requirements.", detail: "Problem framing · Requirements discovery · AI-assisted analysis" },
  { title: "Systems & integrations", text: "I trace APIs, payloads, business rules, and ownership boundaries to understand how a decision affects the whole system.", detail: "API strategy · Systems mapping · Integration design" },
  { title: "Direction & prioritization", text: "I set direction and priorities, sequence work around technical dependencies, and guide program-level adjustments to align with team schedules and implementation needs.", detail: "Roadmap ownership · Dependency sequencing · Program alignment" },
  { title: "Delivery & improvement", text: "I turn decisions into testable work, identify risk early, and build tools that improve how teams prepare and deliver.", detail: "Backlog readiness · Traceability · Human-reviewed automation" },
];

export default function Home() {
  return <>
    <SiteNav />
    <main id="main-content">
      <section className="homeHero shell" aria-labelledby="home-title">
        <div className="heroCopy">
          <span className="eyebrow">Technical product leadership</span>
          <h1 id="home-title">I set product direction <span>and connect strategy to delivery.</span></h1>
          <p className="heroLead">I’m Mandie Morgan, a technical product leader connecting customer needs, enterprise systems, and engineering decisions.</p>
          <p>When the problem is ambiguous and systems are connected, I set direction and priorities. I define the order of work around technical dependencies and team schedules, and help the program adjust its plans so teams can move from discovery to delivery.</p>
          <div className="buttonRow"><a className="button" href="/experience">View my experience</a><a className="button buttonSecondary" href="/projects">Explore my projects</a></div>
          <div className="heroFacts"><span>11+ years in enterprise technology</span><span>Aubrey, Texas</span></div>
        </div>
        <figure className="heroPortrait"><img src="/mandie-morgan-professional.jpg" alt="Mandie Morgan in a gray blazer" width="825" height="1031" fetchPriority="high" /><figcaption><strong>Mandie Morgan</strong><span>Product judgment. Systems thinking. Team leadership.</span></figcaption></figure>
      </section>

      <section className="impactSection sectionMuted" aria-labelledby="impact-title">
        <div className="shell">
          <div className="sectionHeader"><div><span className="eyebrow">Selected impact</span><h2 id="impact-title">What my work has changed.</h2></div><a className="textLink" href="/experience">Read the experience behind these outcomes</a></div>
          <div className="impactGrid">
            <article><span className="impactValue">53%</span><h3>Increase in purchases</h3><p>Led a modernized agency sales experience that also increased quote starts 13% and completed quotes 17% versus the legacy platform.</p></article>
            <article><span className="impactValue">2–3 weeks</span><h3>Earlier backlog readiness</h3><p>Used code-commit analysis to identify completed vendor work and move delivery to incremental intake.</p></article>
            <article><span className="impactValue impactValueText">Program adoption</span><h3>A clearer path from requirements to delivery</h3><p>Created an internal operating model adopted by the program and originated its human-reviewed automation concept.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell" aria-labelledby="strengths-title">
        <div className="sectionHeader"><div><span className="eyebrow">What I bring</span><h2 id="strengths-title">Product leadership with technical depth.</h2><p>I connect strategy, systems, delivery, and people—especially when a problem crosses team boundaries.</p></div></div>
        <div className="strengthGrid">{strengths.map((strength, index) => <article key={strength.title}><span className="itemNumber">0{index + 1}</span><h3>{strength.title}</h3><p>{strength.text}</p><small>{strength.detail}</small></article>)}</div>
      </section>

      <section className="section sectionMuted" aria-labelledby="work-title"><div className="shell">
        <div className="sectionHeader"><div><span className="eyebrow">Work in practice</span><h2 id="work-title">From enterprise operations to a product of my own.</h2></div><a className="textLink" href="/projects">View all projects</a></div>
        <div className="featuredGrid">
          <article className="featureCard"><span className="eyebrow">Independent product · Cross-platform alpha</span><h3>RepQuest</h3><p>A learning game spanning 23 sports, with age-aware guidance, real-game clips, and progression across web and mobile.</p><p className="contribution"><strong>My contribution</strong> Product strategy, experience architecture, privacy design, hands-on implementation, and beta validation.</p><div className="tagRow"><span>React &amp; TypeScript</span><span>Expo &amp; React Native</span></div><a className="button buttonSecondary" href="/projects#repquest">Explore RepQuest</a></article>
          <article className="featureCard"><span className="eyebrow">Internal initiative · Workflow adopted</span><h3>Requirements-to-Delivery</h3><p>An operating model that connects approved requirements, testable work, design artifacts, and change history.</p><p className="contribution"><strong>My contribution</strong> Created the workflow, gained program adoption, and originated the automation concept. Automation pilot validation is pending.</p><div className="tagRow"><span>Change-impact analysis</span><span>Human review</span></div><a className="button buttonSecondary" href="/projects#requirements-to-delivery">Read the project overview</a></article>
        </div>
      </div></section>

      <section className="section shell approachPreview" aria-labelledby="approach-title">
        <div><span className="eyebrow">How I think</span><h2 id="approach-title">Understand the system before changing it.</h2><p>I’m comfortable saying “I don’t know.” Then I research, ask, test, and bring the right people into the conversation.</p><a className="textLink" href="/about">Learn how I work and lead</a></div>
        <ol className="processList"><li><span>01</span><div><h3>Find the real problem</h3><p>Understand customer needs, current behavior, and the assumptions behind the request.</p></div></li><li><span>02</span><div><h3>Connect the whole picture</h3><p>Map the systems, dependencies, ownership, and people affected by a decision.</p></div></li><li><span>03</span><div><h3>Make the work clear</h3><p>Define tradeoffs, testable requirements, and the evidence needed to move forward.</p></div></li><li><span>04</span><div><h3>Learn from delivery</h3><p>Use quality and delivery signals to improve the product and the way the team works.</p></div></li></ol>
      </section>

      <section className="resourceSection shell" aria-labelledby="resources-title"><div><span className="eyebrow">For recruiters &amp; hiring teams</span><h2 id="resources-title">A closer look at my background.</h2><p>Explore my career, review a practical work sample, or start a conversation about your team.</p></div><div className="buttonRow"><a className="button" href="/mandie-morgan-resume-october-2026.pdf" target="_blank" rel="noreferrer">View résumé (PDF)</a><a className="button buttonSecondary" href="/mandie-morgan-work-sample.pdf" target="_blank" rel="noreferrer">Read work sample (PDF)</a></div></section>
    </main>
    <SiteFooter />
  </>;
}

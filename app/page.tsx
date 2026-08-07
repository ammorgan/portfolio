import { SiteFooter, SiteNav } from "./site-nav";

const valueLanes = [
  { number: "01", title: "Discover the real problem", text: "Define ambiguous problems, challenge assumptions, and use AI-assisted repository analysis to uncover requirements that are easy to miss." },
  { number: "02", title: "Design the whole system", text: "Whiteboard complex systems and trace APIs, payloads, integrations, customer journeys, and operational constraints end to end." },
  { number: "03", title: "De-risk delivery early", text: "Partner with designers, architects, and senior engineers to identify downstream risk and shape scalable solutions before delivery begins." },
];

const impact = [
  { label: "Product growth", title: "Modernized an enterprise sales journey", text: "Led a simplified agency experience that increased quote starts 13%, completed quotes 17%, and purchases 53% versus the legacy platform." },
  { label: "Platform transformation", title: "Turned a local integration issue into a scalable strategy", text: "Redirected a vendor-specific date-and-time change into a cross-integrator approach that maintained delivery continuity without creating long-term custom code." },
  { label: "Delivery acceleration", title: "Advanced backlog readiness by 2–3 weeks", text: "Analyzed code commits across multi-story capabilities to identify completed vendor work early and shift delivery from end-of-feature handoff to incremental intake." },
];

const discoverySteps = ["Research", "AI analysis", "Current state", "Whiteboard", "Engineering", "Experience design", "Architecture", "Stories", "Delivery", "Measure"];

export default function Home() {
  return (
    <main id="top">
      <SiteNav />
      <section className="homeHero shell">
        <div className="heroCopy">
          <span className="eyebrow">Technical Product &amp; Engineering Leader · Aubrey, TX</span>
          <h1>Turning ambiguity <em>into clarity.</em></h1>
          <p><strong>I solve the technical problems that don&apos;t have obvious answers.</strong> My work combines systems thinking, engineering partnership, AI-assisted discovery, and customer-centered product leadership.</p>
          <div className="heroActions">
            <a className="primaryButton" href="/experience">See my impact <span>↗</span></a>
            <a className="textButton" href="/amanda-morgan-resume.pdf" target="_blank" rel="noreferrer">Download résumé ↓</a>
          </div>
        </div>
        <figure className="heroPortrait">
          <img src="/amanda-morgan.jpg" alt="Mandie Morgan smiling outdoors" />
          <figcaption><span>11+ years</span> connecting strategy, systems, delivery, and people.</figcaption>
        </figure>
      </section>

      <section className="coreSection">
        <div className="shell coreGrid">
          <div><span className="eyebrow">At my core</span><h2>I care more about finding the right answer than <em>being right.</em></h2></div>
          <div className="coreBeliefs">
            <article><span>01</span><h3>I’m comfortable saying “I don’t know.”</h3><p>Then I research, ask better questions, and keep going until the system makes sense.</p></article>
            <article><span>02</span><h3>I believe the room is smarter than hierarchy.</h3><p>The best solution emerges when engineers, designers, architects, operators, and business partners feel heard.</p></article>
            <article><span>03</span><h3>I challenge ideas because I care about people.</h3><p>Healthy disagreement protects teams from preventable complexity and creates space for better long-term decisions.</p></article>
          </div>
        </div>
      </section>

      <section className="valueSection shell">
        <div className="sectionHeading">
          <span className="eyebrow">Where I create the most value</span>
          <h2>Clarity is a <em>delivery advantage.</em></h2>
        </div>
        <div className="valueLanes">
          {valueLanes.map((lane) => <article key={lane.number}><span>{lane.number}</span><h3>{lane.title}</h3><p>{lane.text}</p></article>)}
        </div>
      </section>

      <section className="discoverySection shell">
        <div className="sectionHeading"><span className="eyebrow">My discovery process</span><h2>Understand the system <em>before changing it.</em></h2><p>I research production behavior, repositories, APIs, business rules, technical documentation, and customer experiences before asking teams to make decisions.</p></div>
        <ol className="discoveryFlow">{discoverySteps.map((step, index)=><li key={step}><span>{String(index + 1).padStart(2,"0")}</span><b>{step}</b></li>)}</ol>
      </section>

      <section className="impactStories">
        <div className="shell">
          <div className="sectionHeading lightHeading"><span className="eyebrow">Selected impact</span><h2>Evidence, not <em>adjectives.</em></h2></div>
          <div className="impactList">
            {impact.map((item, index) => <article key={item.title}><span className="impactNumber">0{index + 1}</span><div><span className="eyebrow">{item.label}</span><h3>{item.title}</h3></div><p>{item.text}</p></article>)}
          </div>
          <a className="inverseButton" href="/experience">Explore full experience ↗</a>
        </div>
      </section>

      <section className="featuredProject shell">
        <div className="featuredLabel"><span className="eyebrow">Featured technical work</span><span>Active development · Functional alpha</span></div>
        <div className="featuredProjectGrid">
          <h2>AI Quality<br /><em>Intelligence</em></h2>
          <div><p className="featureLead">A local-first product concept for faster, more confident release decisions through explainable automation and responsible AI.</p><div className="tagRow"><span>React</span><span>TypeScript</span><span>System design</span><span>Responsible AI</span></div><a className="textButton" href="/projects">View the case study →</a></div>
        </div>
      </section>

      <section className="pathSection shell">
        <div className="sectionHeading"><span className="eyebrow">Keep exploring</span><h2>Choose your <em>next stop.</em></h2></div>
        <div className="pathGrid">
          <a href="/experience"><span>01</span><h3>Experience</h3><p>Enterprise transformation, measurable outcomes, and leadership scope.</p><b>Explore ↗</b></a>
          <a href="/projects"><span>02</span><h3>Projects</h3><p>Technical concepts and systems that make engineering work visible and actionable.</p><b>Explore ↗</b></a>
          <a href="/about"><span>03</span><h3>About</h3><p>How I work, what I believe, and the experiences that shaped my leadership.</p><b>Explore ↗</b></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

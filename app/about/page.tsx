import { SiteFooter, SiteNav } from "../site-nav";

export const metadata = {
  title: "About & Skills | Mandie Morgan",
  description: "How Mandie Morgan thinks, works, and leads, with skills in product direction, enterprise integrations, engineering, and AI-assisted delivery.",
};

const principles = [
  { title: "Understand before deciding", text: "I ask why, trace the current behavior, and test assumptions. The first request rarely describes the whole problem." },
  { title: "Make room for the best idea", text: "Good ideas can come from anyone. I listen to engineers, designers, operators, and business partners before choosing a direction." },
  { title: "Challenge ideas with care", text: "I speak up early when something does not add up. I use evidence to challenge a decision while respecting the people making it." },
  { title: "Follow through", text: "I make ownership and expectations clear, keep my word, and stay connected to the work through delivery." },
];

const skills = [
  { title: "Product direction", skills: "Problem discovery, roadmap ownership, prioritization, dependency sequencing, backlog design, requirements, and program alignment.", practice: "I set direction and priorities, determine the order of work, and guide adjustments to program plans based on technical dependencies and team delivery schedules." },
  { title: "Systems & integration thinking", skills: "APIs, payloads, data contracts, repository analysis, systems mapping, dependencies, and ownership boundaries.", practice: "I trace how a change moves through the system and identify risks before teams commit to an approach." },
  { title: "Engineering & implementation", skills: "React, TypeScript, Expo, React Native, Cloudflare D1, GitLab, CI/CD, AWS, and MkDocs.", practice: "I build independent products and internal tools, and use that experience to ask better technical questions." },
  { title: "AI-assisted delivery", skills: "Agent workflows, requirements analysis, change-impact analysis, Gherkin scenarios, evidence tracing, and human review.", practice: "I use AI to surface gaps and prepare better work, with people responsible for the consequential decisions." },
];

export default function About() {
  return <><SiteNav /><main id="main-content">
    <header className="aboutHero shell">
      <div><span className="eyebrow">About Mandie</span><h1>Curious about systems.<br /><span>Accountable to people.</span></h1><p className="heroLead">I’m most engaged when a problem is complex, the answer is unclear, and solving it takes more than one perspective.</p><p>I bring structure to those moments by understanding how things work, asking the question nobody has answered yet, and helping people see a path forward together.</p><div className="buttonRow"><a className="button buttonSecondary" href="#skills">Explore my skills</a><a className="textLink" href="/experience">See my career experience</a></div></div>
      <img src="/mandie-morgan-professional.jpg" alt="Mandie Morgan in a gray blazer" width="825" height="1031" />
    </header>

    <section className="section sectionMuted" aria-labelledby="working-title"><div className="shell splitSection">
      <div><span className="eyebrow">How I work</span><h2 id="working-title">I start with the current state.</h2><p>Before asking a team to change a system, I want to understand its behavior, constraints, and the people who depend on it.</p></div>
      <div className="prose"><p>That means researching production behavior, repositories, APIs, business rules, technical documentation, and customer experiences. I use AI to help analyze information and surface gaps, then check the findings against evidence and people who know the system.</p><p>I whiteboard with designers, architects, and senior engineers to connect the pieces. We make assumptions visible, work through alternatives, and define where ownership and decisions belong.</p><p>I set direction and priorities, then determine the order of work based on technical dependencies and team schedules. When program plans need to change to reflect implementation needs, I explain the tradeoffs and guide those adjustments.</p><p>I translate that direction into testable requirements and stay close to delivery so the team can respond when new information changes the plan.</p></div>
    </div></section>

    <section className="section shell" aria-labelledby="principles-title"><div className="sectionHeader"><div><span className="eyebrow">How I think</span><h2 id="principles-title">The principles behind my decisions.</h2><p>I care more about finding the right answer than being right.</p></div></div><div className="principleGrid">{principles.map((principle, index) => <article key={principle.title}><span className="itemNumber">0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></section>

    <section className="section sectionMuted" id="skills" aria-labelledby="skills-title"><div className="shell"><div className="sectionHeader"><div><span className="eyebrow">Skills &amp; tools</span><h2 id="skills-title">What I bring to the table.</h2><p>Technical fluency helps me connect the product decision to what it will take to build and operate it.</p></div></div><div className="skillsGrid">{skills.map(skill => <article key={skill.title}><h3>{skill.title}</h3><p>{skill.skills}</p><div><span>How I use it</span><p>{skill.practice}</p></div></article>)}</div><a className="textLink sectionLink" href="/projects">See these skills in my projects</a></div></section>

    <section className="section shell footballSection" aria-labelledby="football-title"><div><span className="eyebrow">Beyond the job title</span><h2 id="football-title">I lead like a football center.</h2><p className="heroLead">Prepare. Read the defense. Adjust under pressure. Clear a path for someone else to score.</p><div className="personalFacts"><span>Texas Elite Spartans · Starting center</span><span>Six championship rings</span><span>Two All-American honors</span></div></div><div className="prose"><p>Playing center taught me that leadership often happens out of sight. Preparation and communication matter as much as the moment everyone sees.</p><p>I bring that same approach to product work. I want the team to understand the play, see the risk early, and trust each other enough to adjust. The team’s win matters more than the credit.</p></div></section>

    <section className="section sectionMuted" aria-labelledby="background-title"><div className="shell splitSection"><div><span className="eyebrow">Background &amp; community</span><h2 id="background-title">Helping people find their next opportunity.</h2><p>My work has also included developing early-career talent and creating access to technology experiences.</p></div><dl className="backgroundList"><div><dt>ITSMF Emerge Academy</dt><dd>2025 cohort</dd></div><div><dt>University of Texas at Dallas</dt><dd>Recruiting Lead</dd></div><div><dt>DFW Hackathons</dt><dd>Directed 25+ events engaging 7,000+ students</dd></div><div><dt>Education</dt><dd>B.S. Information Systems &amp; Accounting<br />Millikin University</dd></div><div><dt>Certification</dt><dd>Certified ScrumMaster (CSM) · Scrum Alliance</dd></div></dl></div></section>
    <aside className="personalQuote shell"><span className="eyebrow">A belief I live by</span><blockquote>“A problem is just a solution that hasn’t been found yet.”</blockquote></aside>
  </main><SiteFooter /></>;
}

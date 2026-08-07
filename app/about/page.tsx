import { SiteFooter, SiteNav } from "../site-nav";

const principles = [
  ["Curiosity", "I don’t accept a requirement until I understand why. The first request is rarely the whole problem."],
  ["Clarity", "I slow the room down long enough to make sure we are solving the right problem, then create the shared language teams need to move."],
  ["Collaboration", "The best ideas come from the room—not from hierarchy. Engineers, designers, architects, operators, and business partners all improve the solution."],
  ["Courage", "I challenge assumptions with evidence, including vendor and leadership assumptions, when the long-term decision needs another look."],
  ["Empathy", "People do their best thinking when they feel heard. I create space for questions, dissent, and different kinds of expertise."],
  ["Learning", "I’m comfortable saying I don’t know. Then I research, ask, test, and keep going until the system makes sense."],
];

export default function About() {
  return <main id="top"><SiteNav />
    <header className="aboutHero shell"><div><span className="eyebrow">How I think</span><h1>Challenge ideas. <em>Never people.</em></h1><p>I thrive in ambiguity. I’m most energized by technical problems without obvious answers—where requirements are evolving, systems are highly integrated, and teams need clarity before they can move forward.</p></div><img src="/amanda-morgan.jpg" alt="Mandie Morgan smiling outdoors" /></header>
    <section className="beliefBand"><div className="shell"><span className="eyebrow">A belief I live by</span><blockquote>“A problem is just a solution that <em>hasn&apos;t been found yet.</em>”</blockquote></div></section>
    <section className="philosophy shell"><span className="eyebrow">Professional philosophy</span><div><p>I begin by understanding the current state: production behavior, repositories, APIs, business rules, technical documentation, and customer experiences.</p><p>From there, I partner with engineers, architects, and experience designers to challenge assumptions, simplify complexity, and create scalable solutions that balance technical integrity with exceptional user experiences.</p><p>I lead with curiosity, empathy, and evidence—because I’m not driven by being right. I’m driven by finding the right answer.</p></div></section>
    <section className="principles shell"><div className="sectionHeading"><span className="eyebrow">What guides me</span><h2>Good solutions begin with <em>better questions.</em></h2></div><div className="principleGrid">{principles.map(([title,text], index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="backgroundSection"><div className="shell backgroundGrid"><div><span className="eyebrow">Beyond the roadmap</span><h2>Developing people and <em>expanding access.</em></h2></div><div className="backgroundList"><div><h3>ITSMF Emerge Academy</h3><p>2025 cohort</p></div><div><h3>University of Dallas</h3><p>Recruiting Lead</p></div><div><h3>DFW Hackathons</h3><p>Directed 25+ events engaging 7,000+ students</p></div><div><h3>Education</h3><p>B.S. Information Systems &amp; Accounting · Millikin University</p></div><div><h3>Certification</h3><p>Certified ScrumMaster (CSM) · Scrum Alliance</p></div></div></div></section>
    <SiteFooter />
  </main>;
}

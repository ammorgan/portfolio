import { SiteFooter, SiteNav } from "../site-nav";
import { projects, type Project } from "../project-data";

export const metadata = {
  title: "Projects & Technical Work | Mandie Morgan",
  description: "Explore RepQuest, AI Quality Intelligence, and internal delivery initiatives, with Mandie Morgan’s contribution and each project’s current stage.",
};

function ProjectCase({ project }: { project: Project }) {
  return <article className="projectCase" id={project.id}>
    <div className="projectMeta"><span className="eyebrow">{project.kind}</span><span className="statusBadge">{project.status}</span></div>
    <h3>{project.title}</h3>
    <p className="projectSummary">{project.summary}</p>
    <div className="projectContribution"><h4>My contribution</h4><p>{project.contribution}</p></div>
    <div className="projectEvidence"><h4>What this demonstrates</h4><ul>{project.evidence.map(item => <li key={item}>{item}</li>)}</ul></div>
    <details className="projectDetails"><summary>Read the project details</summary><div className="projectDetailsBody"><div className="caseGrid"><div><h4>The problem</h4><p>{project.challenge}</p></div><div><h4>My approach</h4><p>{project.approach}</p></div></div>{project.measurementNote && <p className="measurementNote"><strong>Early result</strong> {project.measurementNote}</p>}<h4>Skills &amp; tools</h4><ul className="tagRow">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></div></details>
    {project.links && <div className="projectActions">{project.links.map(link => <a className={link.primary ? "button" : "button buttonSecondary"} href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<span className="visuallyHidden"> (opens in a new tab)</span></a>)}</div>}
  </article>;
}

export default function Projects() {
  return <><SiteNav /><main id="main-content">
    <header className="pageHero shell"><span className="eyebrow">Selected projects</span><h1>Products, platforms,<br /><span>and better ways to deliver.</span></h1><p>Practical examples of my product judgment, technical depth, and approach to AI-assisted delivery. Each project explains my contribution and its current stage.</p><a className="textLink" href="/about#skills">Explore my full skills profile</a></header>
    <nav className="projectDirectory shell" aria-label="Jump to a project"><span>On this page</span><div>{projects.map(project => <a href={`#${project.id}`} key={project.id}>{project.title}</a>)}</div></nav>
    <section className="section shell projectGroup" aria-labelledby="independent-title"><div className="sectionHeader"><div><span className="eyebrow">Independent work</span><h2 id="independent-title">Products I’m building.</h2><p>Hands-on work from product strategy and requirements through implementation and validation.</p></div></div><div className="projectCases">{projects.filter(project => project.group === "independent").map(project => <ProjectCase project={project} key={project.id} />)}</div></section>
    <section className="section sectionMuted projectGroup" aria-labelledby="internal-title"><div className="shell"><div className="sectionHeader"><div><span className="eyebrow">Enterprise initiatives</span><h2 id="internal-title">Improving how teams work.</h2><p>Internal projects described at a high level, with clear ownership, adoption, and maturity.</p></div></div><div className="projectCases">{projects.filter(project => project.group === "internal").map(project => <ProjectCase project={project} key={project.id} />)}</div></div></section>
    <section className="resourceSection shell"><div><span className="eyebrow">More context</span><h2>The experience behind the projects.</h2><p>See the enterprise roles, integration decisions, and measurable outcomes that inform how I build.</p></div><a className="button buttonSecondary" href="/experience">View my experience</a></section>
  </main><SiteFooter /></>;
}

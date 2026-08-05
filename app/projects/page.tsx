import { SiteFooter, SiteNav } from "../site-nav";

const projects = [
  { number:"01", kind:"Personal technical project", title:"Engineering Analytics Platform", description:"A React-based platform that analyzes activity across multiple GitLab repositories and turns it into operational reporting for engineering leaders.", challenge:"Repository activity creates a lot of data but not always a clear view of delivery health, defects, or development momentum.", approach:"Designed a modular analytics experience and explored API integrations, caching strategies, data persistence, and AI-assisted analysis.", outcome:"A decision-support concept that surfaces delivery health, development activity, defect trends, and status insights in one place.", tools:["React","GitLab APIs","Data persistence","Caching","AI analysis"] },
  { number:"02", kind:"Enterprise engineering initiative", title:"AI-Assisted Engineering Discovery", description:"Applied GitHub Copilot and LLMs across production repositories to accelerate technical discovery and requirements validation for a platform transformation.", challenge:"Complex dependencies, legacy architecture, and distributed ownership made technical analysis slow and difficult to communicate.", approach:"Used AI-assisted repository analysis alongside architecture, payload, and data-flow review to sharpen requirements and identify blockers.", outcome:"Faster technical discovery and clearer executive-ready communication across a complex modernization program.", tools:["GitHub Copilot","LLMs","Repository analysis","Requirements","Architecture"] },
  { number:"03", kind:"Knowledge platform initiative", title:"Engineering Knowledge Platform", description:"A searchable MkDocs platform with CI/CD deployment that standardized technical knowledge and improved onboarding across engineering teams.", challenge:"Critical knowledge lived across people and disconnected artifacts, increasing onboarding time and delivery risk.", approach:"Structured a searchable documentation system and automated deployment through a CI/CD workflow while migrating requirements into GitLab.", outcome:"Reduced tribal knowledge, improved discoverability, and increased visibility into portfolio progress and engineering execution.", tools:["MkDocs","GitLab","CI/CD","Information architecture","Documentation"] },
];

export default function Projects() {
  return <main id="top"><SiteNav />
    <header className="pageHero shell projectsHero"><span className="kicker">Technical projects</span><h1>Technology made<br /><em>useful, visible, actionable.</em></h1><p>Selected work showing how I connect technical depth, product thinking, and operational outcomes.</p></header>
    <section className="projectList shell">{projects.map(project=><article className="projectCase" key={project.number}>
      <div className="projectTop"><span className="projectNumber">{project.number}</span><span className="projectKind">{project.kind}</span></div>
      <div className="projectTitle"><h2>{project.title}</h2><p>{project.description}</p></div>
      <div className="caseGrid"><div><span>Challenge</span><p>{project.challenge}</p></div><div><span>Approach</span><p>{project.approach}</p></div><div><span>Outcome</span><p>{project.outcome}</p></div></div>
      <div className="toolRow">{project.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
    </article>)}</section>
    <section className="skillsSection"><div className="shell"><span className="kicker light">Technical toolkit</span><div className="skillsMatrix"><div><h3>Leadership</h3><p>Engineering leadership · People development · Executive communication · Organizational influence</p></div><div><h3>Delivery</h3><p>Platform modernization · Release planning · Backlog prioritization · Dependency management</p></div><div><h3>Operations</h3><p>Defect triage · Operational readiness · Vendor management · Engineering excellence</p></div><div><h3>Technology</h3><p>GitHub Copilot / LLMs · GitLab / CI/CD · AWS / MkDocs · API integration</p></div></div></div></section>
    <SiteFooter />
  </main>;
}

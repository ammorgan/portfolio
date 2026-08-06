import { SiteFooter, SiteNav } from "../site-nav";

const projects = [
  { number:"01", kind:"Independent product concept", status:"Active development · Functional alpha", title:"AI Quality Intelligence", description:"A local-first product concept exploring how engineering teams can make faster, more confident software release decisions with explainable automation and responsible AI.", challenge:"Reduce repetitive quality-assurance effort while preserving human judgment, traceability, and trust in release decisions.", approach:"Designed and built a privacy-conscious React and TypeScript alpha with deterministic analysis at its core and an extensible provider architecture for future AI capabilities.", outcome:"Established a working product foundation that demonstrates systems thinking, strongly typed application design, explainable risk modeling, automated verification, and enterprise-minded product strategy.", tools:["React","TypeScript","System design","Deterministic analysis","Responsible AI","Automated testing"] },
  { number:"02", kind:"Personal technical project", title:"Engineering Analytics Platform", description:"A React-based platform designed to analyze activity across multiple GitLab repositories and convert repository activity into operational reporting for engineering leaders.", challenge:"Surface delivery health, development activity, defect trends, and status insights across multiple repositories.", approach:"Explored API integrations, caching strategies, data persistence, and AI-assisted analysis.", outcome:"A platform concept centered on operational reporting for engineering leaders.", tools:["React","GitLab APIs","Data persistence","Caching","AI analysis"] },
  { number:"03", kind:"Enterprise knowledge initiative", title:"Engineering Knowledge Platform", description:"A searchable MkDocs knowledge platform with CI/CD deployment, built as part of engineering documentation modernization.", challenge:"Reduce tribal knowledge and improve engineering onboarding.", approach:"Built a searchable documentation platform with CI/CD deployment and led the migration of technical requirements from Agility to GitLab.", outcome:"Reduced tribal knowledge, improved onboarding, and increased visibility into portfolio progress and engineering execution.", tools:["MkDocs","GitLab","CI/CD","Information architecture","Documentation"] },
];

export default function Projects() {
  return <main id="top"><SiteNav />
    <header className="pageHero shell projectsHero"><span className="kicker">Technical projects</span><h1><span>Technology made</span><em>useful, visible, actionable.</em></h1><p>Selected work showing how I connect technical depth, product thinking, and operational outcomes.</p></header>
    <section className="projectList shell">{projects.map(project=><article className="projectCase" key={project.number}>
      <div className="projectTop"><span className="projectNumber">{project.number}</span><span className="projectKind">{project.kind}</span></div>
      {"status" in project && <div className="projectStatus"><span />{project.status}</div>}
      <div className="projectTitle"><h2>{project.title}</h2><p>{project.description}</p></div>
      <div className="caseGrid"><div><span>Challenge</span><p>{project.challenge}</p></div><div><span>Approach</span><p>{project.approach}</p></div><div><span>Outcome</span><p>{project.outcome}</p></div></div>
      <div className="toolRow">{project.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
    </article>)}</section>
    <section className="skillsSection"><div className="shell"><span className="kicker light">Technical toolkit</span><div className="skillsMatrix"><div><h3>Leadership</h3><p>Engineering leadership · People development · Executive communication · Organizational influence</p></div><div><h3>Delivery &amp; design</h3><p>Platform modernization · Release planning · Backlog prioritization · Dependency management · Figma / XD partnership</p></div><div><h3>Operations</h3><p>Defect triage · Operational readiness · Vendor management · Engineering excellence</p></div><div><h3>Technology</h3><p>GitHub Copilot / LLMs · GitLab / CI/CD · AWS / MkDocs · API integration</p></div></div></div></section>
    <SiteFooter />
  </main>;
}

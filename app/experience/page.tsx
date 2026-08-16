import { SiteFooter, SiteNav } from "../site-nav";

const roles = [
  { dates:"Aug 2025–Present", title:"Technical Product Owner - Lead", context:"Policy Admin System Platform Transformation", summary:"Leading enterprise platform transformation across six delivery teams and nine engineers at peak, spanning vendor partners, internal developers, architects, QA, designers, and business stakeholders.", points:["Own roadmap direction, technical scope, integration and API expectations, delivery priorities, and executive decision context across risks, dependencies, defects, and rollout readiness.","Pioneered AI-assisted analysis across production repositories to accelerate technical discovery and requirements validation.","Redirected a vendor-specific date-and-time change into a scalable cross-integrator strategy, using a temporary API-layer transformation to maintain delivery continuity while avoiding long-term custom code.","Shifted vendor delivery from end-of-feature handoff to incremental intake by analyzing code commits and advancing backlog readiness by 2–3 weeks.","Review and approve Figma prototypes for product alignment, accessibility, technical feasibility, and engineering readiness."] },
  { dates:"Dec 2022–Jul 2025", title:"Horizontal Product Owner", context:"New Business Auto · Modernized System", summary:"Led product and engineering delivery for a modernized enterprise auto-shopping experience.", points:["Delivered the Simplified Auto Sales Agency UI, generating 2.5M quotes in 2024 while increasing quote starts 13%, completed quotes 17%, and purchases 53% versus the legacy platform.","Built a multi-year roadmap supporting platform modernization, state rollout, and scalable sales enhancements through Q4 2027.","Balanced customer needs, stakeholder priorities, technical debt, and platform scalability across delivery teams.","Partnered with architects and senior engineers to simplify implementation and reduce integration risk."] },
  { dates:"Feb 2022–Dec 2022", title:"Portfolio Analyst", context:"New Business Auto · Legacy System", summary:"Improved delivery flow and technical knowledge across a multi-team engineering portfolio.", points:["Built a searchable MkDocs knowledge platform with CI/CD deployment to reduce tribal knowledge and improve onboarding.","Resolved 60+ cross-functional dependencies across multiple engineering teams.","Led the migration from Agility to GitLab, standardizing technical requirements and increasing portfolio visibility."] },
  { dates:"Apr 2018–Feb 2022", title:"Technology Supervisor / Technology Analyst", context:"IT Operations", summary:"Led technical talent strategy while building tools that improved recruiting efficiency.", points:["Increased intern-to-full-time conversion from 46% to 92%, expanded the candidate pipeline by 70%, and reduced annual hiring costs by more than $150K.","Built an AWS-powered recruiting application that automated résumé parsing, candidate scoring, and role matching.","Coached interns and early-career technologists while partnering with leadership on workforce planning and development."] },
];

export default function Experience() {
  return <main id="top"><SiteNav />
    <header className="pageHero shell"><span className="eyebrow">Experience</span><h1>Strategy that ships. <em>Leadership that scales.</em></h1><p>More than a decade bringing structure to complex enterprise technology work across product, engineering, platform modernization, and operations.</p></header>
    <section className="experienceIntro shell"><span>State Farm</span><span>Aubrey, TX · Hybrid</span></section>
    <section className="timeline shell">
      {roles.map((role, i) => <article className="role" key={role.title + role.dates}><div className="roleRail"><span>0{i+1}</span><p>{role.dates}</p></div><div className="roleBody"><span className="eyebrow">{role.context}</span><h2>{role.title}</h2><p className="roleSummary">{role.summary}</p><ul>{role.points.map(p=><li key={p}>{p}</li>)}</ul></div></article>)}
    </section>
    <section className="workSampleFeature shell" aria-labelledby="work-sample-title">
      <div className="workSampleMeta"><span className="eyebrow">Anonymized work sample</span><span>3-page case study · PDF</span></div>
      <div className="workSampleGrid">
        <h2 id="work-sample-title">From fragmented systems to <em>a reusable platform.</em></h2>
        <div>
          <p className="workSampleLead">See how I defined shared integrations, data contracts, and delivery mechanisms for an enterprise cloud transformation—then built the operating model needed to scale it.</p>
          <div className="workSampleOutcomes" aria-label="Selected case study outcomes">
            <p><span>Delivery throughput</span><b>Increased from approximately 4 to more than 12 features per month.</b></p>
            <p><span>Vendor quality</span><b>Reduced the open vendor-defect backlog from 15–18 items to 2–3.</b></p>
            <p><span>Technical focus</span><b>Avoided approximately 3–4 weeks of unnecessary development.</b></p>
          </div>
          <a className="primaryButton" href="/mandie-morgan-work-sample.pdf" target="_blank" rel="noreferrer">Read the case study <span>↗</span></a>
        </div>
      </div>
    </section>
    <section className="careerCta"><div className="shell"><span className="eyebrow">The throughline</span><h2>From talent systems to enterprise platforms, I make <em>complex work easier to understand and execute.</em></h2><a className="inverseButton" href="/amanda-morgan-resume.pdf" target="_blank" rel="noreferrer">Download full résumé ↓</a></div></section>
    <SiteFooter />
  </main>;
}

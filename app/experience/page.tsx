import { SiteFooter, SiteNav } from "../site-nav";

export const metadata = {
  title: "Experience & Impact | Mandie Morgan",
  description: "Mandie Morgan’s enterprise product leadership, platform transformation, integration decisions, and measurable delivery outcomes.",
};

const roles = [
  {
    dates: "Aug 2025–Present", title: "Technical Product Owner - Lead", context: "Policy Admin System Platform Transformation", current: true,
    summary: "Leading enterprise platform transformation across six delivery teams and nine engineers at peak, spanning vendor partners, internal developers, architects, QA, designers, and business stakeholders.",
    points: [
      "Set roadmap direction and priorities, sequence work around technical dependencies, and guide program-level planning adjustments to align with team delivery schedules. Own technical scope, integration and API expectations, and executive decision context across risks, dependencies, and rollout readiness.",
      "Use AI-assisted analysis across production repositories to accelerate technical discovery and requirements validation.",
      "Redirected a vendor-specific date-and-time change into a cross-integrator strategy, using a temporary API-layer transformation to maintain delivery continuity while avoiding long-term custom code.",
      "Advanced backlog readiness by 2–3 weeks by analyzing code commits and shifting vendor delivery from end-of-feature handoff to incremental intake.",
      "Created design briefs and process flows that cut planning turnaround from about six weeks to 2.5–3 weeks. Stronger delivery-quality expectations helped reduce related vendor defects from 2–5 per week to 2–5 total over the following three months.",
      "Created a requirements-to-delivery workflow adopted by the program and originated its human-reviewed automation concept. The automation is prepared for pilot validation.",
    ],
  },
  {
    dates: "Dec 2022–Jul 2025", title: "Horizontal Product Owner", context: "New Business Auto · Modernized System", current: false,
    summary: "Led product and engineering delivery for a modernized enterprise auto-shopping experience.",
    points: [
      "Delivered the Simplified Auto Sales Agency UI, generating 2.5M quotes in 2024 and increasing quote starts 13%, completed quotes 17%, and purchases 53% versus the legacy platform.",
      "Built a multi-year roadmap supporting modernization, state rollout, and scalable sales enhancements through Q4 2027.",
      "Balanced customer needs, stakeholder priorities, technical debt, and platform scalability across delivery teams.",
      "Partnered with architects and senior engineers to simplify implementation and reduce integration risk.",
    ],
  },
  {
    dates: "Feb 2022–Dec 2022", title: "Portfolio Analyst", context: "New Business Auto · Legacy System", current: false,
    summary: "Improved delivery flow and technical knowledge across a multi-team engineering portfolio.",
    points: [
      "Built a searchable MkDocs knowledge platform with CI/CD deployment to reduce tribal knowledge and improve onboarding.",
      "Resolved 60+ cross-functional dependencies across multiple engineering teams.",
      "Led the migration from Agility to GitLab, standardizing technical requirements and increasing portfolio visibility.",
    ],
  },
  {
    dates: "Apr 2018–Feb 2022", title: "Technology Supervisor / Technology Analyst", context: "IT Operations", current: false,
    summary: "Led technical talent strategy while building tools that improved recruiting efficiency.",
    points: [
      "Increased intern-to-full-time conversion from 46% to 92%, expanded the candidate pipeline by 70%, and reduced annual hiring costs by more than $150K.",
      "Built an AWS-powered recruiting application that automated résumé parsing, candidate scoring, and role matching.",
      "Coached interns and early-career technologists while partnering with leadership on workforce planning and development.",
    ],
  },
];

export default function Experience() {
  return <><SiteNav /><main id="main-content">
    <header className="pageHero shell"><span className="eyebrow">Career &amp; impact</span><h1>Product leadership,<br /><span>grounded in delivery.</span></h1><p>More than a decade connecting product, engineering, platform modernization, and operations—with a focus on making complex work understandable and executable.</p><div className="buttonRow"><a className="button" href="/mandie-morgan-resume-october-2026.pdf" target="_blank" rel="noreferrer">View résumé (PDF)</a><a className="button buttonSecondary" href="#work-sample">Explore the work sample</a></div></header>
    <section className="timeline shell" aria-labelledby="career-title"><div className="careerHeading"><div><span className="eyebrow">Enterprise experience</span><h2 id="career-title">State Farm</h2></div><p>Aubrey, TX · Hybrid</p></div>
      {roles.map(role => <article className="role" key={role.title + role.dates}><div className="roleRail"><span>{role.dates}</span>{role.current && <span className="statusBadge">Current role</span>}</div><div className="roleBody"><p className="roleContext">{role.context}</p><h3>{role.title}</h3><p className="roleSummary">{role.summary}</p><ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}
    </section>
    <section className="section sectionMuted" id="work-sample" aria-labelledby="work-sample-title"><div className="shell workSampleGrid">
      <div><span className="eyebrow">Anonymized work sample · 3-page PDF</span><h2 id="work-sample-title">Modernizing a complex customer journey platform.</h2><p>How I set product direction, defined API and platform boundaries, and connected user feedback to reusable workflows—then improved delivery readiness through scenario mapping, design briefs, and requirements traceability with Rovia.</p><a className="button" href="/mandie-morgan-work-sample-october-2026.pdf" target="_blank" rel="noreferrer">Read the work sample (PDF)</a></div>
      <div><dl className="outcomeList"><div><dt>Design-brief turnaround</dt><dd>Reduced from about six weeks to 2.5–3 weeks.</dd></div><div><dt>Related configuration defects</dt><dd>Decreased from 2–5 per week to 2–5 total over the following three months.</dd></div><div><dt>Cross-product decision visibility</dt><dd>Created a shared planning hub for milestones, blockers, schedule decisions, and weekly changes.</dd></div></dl><p className="workSampleNote">Defect figures reflect observed issue counts, rather than a normalized rate, following changes to scenario, readiness, and Definition of Done practices.</p></div>
    </div></section>
    <section className="resourceSection shell"><div><span className="eyebrow">Continue exploring</span><h2>See how I put this experience to work.</h2><p>Explore independent products and internal initiatives, with clear descriptions of my contribution and each project’s stage.</p></div><a className="button buttonSecondary" href="/projects">View projects</a></section>
  </main><SiteFooter /></>;
}

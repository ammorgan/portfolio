import { SiteFooter, SiteNav } from "../site-nav";

const roles = [
  { dates:"Aug 2025–Present", title:"Technical Product Owner - Lead · Policy Admin System Platform Transformation", points:["Lead enterprise platform transformation across vendor engineers, internal developers, architects, QA, and business stakeholders.","Define technical scope, remove blockers, and maintain executive visibility across dependencies, defects, readiness, and risk.","Pioneered AI-assisted engineering analysis across production repositories using GitHub Copilot and LLMs.","Partner daily with Experience Design teams to review and approve Figma prototypes for product alignment, accessibility, technical feasibility, and engineering readiness."] },
  { dates:"Dec 2022–Jul 2025", title:"Horizontal Product Owner · Shopping Journey Auto", points:["Led delivery of the Simplified Auto Sales Agency UI, generating 2.5M quotes in 2024 while increasing quote starts 13%, completed quotes 17%, and purchases 53% versus Policy Center.","Built a multi-year product and engineering roadmap supporting platform modernization, state rollout, and scalable Sales Agency enhancements through Q4 2027.","Partnered with architects and senior engineers to influence solution design and reduce delivery risk.","Developed workforce planning recommendations that optimized engineering capacity and informed leadership hiring and resource allocation decisions."] },
  { dates:"Feb 2022–Dec 2022", title:"Portfolio Analyst · Auto Acquisition & Service", points:["Built a searchable MkDocs knowledge platform with CI/CD deployment to reduce tribal knowledge and improve onboarding.","Resolved 60+ cross-functional dependencies across multiple engineering teams.","Led migration from Agility to GitLab, standardizing technical requirements and portfolio visibility."] },
  { dates:"Apr 2018–Feb 2022", title:"Technology Supervisor / Technology Analyst · IT Operations", points:["Led technical recruiting strategy that increased intern-to-full-time conversion from 46% to 92% and reduced annual hiring costs by more than $150K.","Built an AWS-powered recruiting application that automated résumé parsing, candidate scoring, and role matching.","Coached interns and early-career technologists while partnering with leadership on workforce planning and development."] },
];

export default function Experience() {
  return <main id="top"><SiteNav />
    <header className="pageHero shell"><span className="kicker">Experience</span><h1>Strategy that ships.<br /><em>Leadership that scales.</em></h1><p>More than a decade leading enterprise technology initiatives across engineering, technical product management, platform modernization, and operations.</p></header>
    <section className="timeline shell">
      <div className="timelineHeader"><span>State Farm</span><span>Aubrey, TX / Hybrid</span></div>
      {roles.map((role, i) => <article className="role" key={role.title}><div className="roleIndex">0{i+1}</div><div><span className="roleDates">{role.dates}</span><h2>{role.title}</h2><ul>{role.points.map(p=><li key={p}>{p}</li>)}</ul></div></article>)}
    </section>
    <section className="community shell"><div><span className="kicker">Community leadership</span><h2>Technology is a team sport.</h2></div><div><h3>ITSMF Emerge Academy</h3><p>2025 cohort</p><h3>University of Texas at Dallas</h3><p>Recruiting Lead · Directed 25+ DFW hackathons engaging 7,000+ students</p><h3>Education &amp; certification</h3><p>B.S. Information Systems &amp; Accounting, Millikin University · Certified ScrumMaster (CSM)</p></div></section>
    <SiteFooter />
  </main>;
}

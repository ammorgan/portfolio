export type Project = {
  id: string;
  group: "independent" | "internal";
  kind: string;
  status: string;
  title: string;
  summary: string;
  contribution: string;
  challenge: string;
  approach: string;
  evidence: string[];
  tools: string[];
  measurementNote?: string;
  links?: { href: string; label: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "repquest", group: "independent", kind: "Independent product build", status: "Active development · Cross-platform alpha", title: "RepQuest",
    summary: "A privacy-first sports learning game that adapts to each player’s age, experience, and progress. The 23-sport platform combines guided playbooks, real-game clips, interactive challenges, and meaningful progression across web and mobile.",
    contribution: "I own product strategy, requirements, experience architecture, content and data modeling, privacy design, and hands-on implementation. I use AI-assisted development, then validate the work through code review, automated checks, and TestFlight releases.",
    challenge: "Teach the complexity of sports across ages and experience levels without reducing learning to generic trivia or collecting unnecessary information from younger players.",
    approach: "Designed a reusable content model and game engine with adaptive remediation, concept-level mastery, XP, streaks, badges, and age-aware pacing. Added real-game media and beginner guidance, built an Expo and React Native mobile companion, and designed Cloudflare D1-backed accounts, parental consent, privacy events, progress sync, and safe-league architecture.",
    evidence: ["End-to-end product execution across web and mobile", "Reusable learning architecture spanning 23 sports", "Privacy and parental-consent system design", "Adaptive learning, mastery, and progression"],
    tools: ["React", "TypeScript", "Expo", "React Native", "Cloudflare D1", "API design"],
    links: [
      { href: "https://testflight.apple.com/join/FTBqt973", label: "Try the TestFlight beta", primary: true },
      { href: "https://github.com/ammorgan/sports-iq/blob/main/docs/REPQUEST_PRD.md", label: "Read the product requirements" },
      { href: "https://github.com/ammorgan/sports-iq", label: "View the source on GitHub" },
    ],
  },
  {
    id: "quality-intelligence", group: "independent", kind: "Independent product concept", status: "Active development · Functional alpha", title: "AI Quality Intelligence",
    summary: "A local-first product concept that connects code changes to affected business behavior, related tests, regression guidance, and release risk through explainable analysis.",
    contribution: "I built the React and TypeScript alpha, shaping the product around deterministic analysis, source tracing, test discovery, and explicit human review controls.",
    challenge: "Reduce repetitive quality-assurance effort while giving teams enough evidence to make consequential release decisions.",
    approach: "Connected code-change analysis, source evidence, and test discovery in a privacy-conscious local workflow. Kept the reasoning visible so people can review the release guidance and decide what to do next.",
    evidence: ["Strongly typed application design", "Explainable risk modeling", "Automated verification", "Release decision-support architecture"],
    tools: ["React", "TypeScript", "Change-impact analysis", "Evidence tracing", "Automated testing"],
  },
  {
    id: "requirements-to-delivery", group: "internal", kind: "Internal Project", status: "Workflow adopted · Automation pilot pending", title: "Requirements-to-Delivery Workflow",
    summary: "An internal operating model that keeps requirements, delivery work, scenarios, design artifacts, and change history aligned as decisions change.",
    contribution: "I created the workflow, gained program adoption, and originated the automation idea. I defined the change taxonomy, source-of-truth rules, approval path, safety guardrails, and two-phase automation concept. The automation has been developed and locally tested; live pilot validation is pending.",
    challenge: "Requirements and delivery artifacts can drift apart as decisions change, creating rework, unclear ownership, and downstream risk across teams.",
    approach: "Designed a flow to detect, validate, propose, approve, apply, and verify changes. The model distinguishes requirement changes from defects and routine updates, prepares traceable proposals, and requires human approval. Safeguards address conflicts, stale proposals, ownership, many-to-many impact, and automation loops.",
    evidence: ["Program adoption of the operating model", "Human approval before controlled changes", "Requirements-to-delivery traceability", "Explicit automation safety guardrails"],
    tools: ["Requirements governance", "Change-impact analysis", "AI agent design", "Git workflows", "Gherkin", "Human review"],
  },
  {
    id: "delivery-preparation", group: "internal", kind: "Internal Project", status: "Implemented and in use", title: "AI-Assisted Delivery Preparation",
    summary: "Five coordinated agents that turn complex requirements into review-ready delivery packages: finding gaps, decomposing features, preparing documentation, and connecting test scenarios.",
    contribution: "I designed and built the agent system, including the roles, sequencing, review controls, documentation outputs, and traceability model. It is now used to prepare complex delivery work, with people reviewing the output and approving decisions.",
    challenge: "Manual delivery preparation could take weeks and still leave engineering, design, and quality teams resolving gaps late in the process.",
    approach: "Coordinated five specialized agents around shared requirements, with checkpoints for missing decisions, conflicts, independently testable work, engineering and design documentation, and connected Gherkin scenarios.",
    evidence: ["Five-agent workflow in active use", "Consistent delivery-preparation outputs", "Human review and approval retained", "Requirements-to-test traceability"],
    measurementNote: "An early comparison suggests preparation for comparable work decreased from about four weeks to one week. This is an initial estimate, rather than a formal measurement.",
    tools: ["AI agent orchestration", "Requirements analysis", "Gherkin", "Documentation systems", "Human review"],
  },
  {
    id: "portfolio-intelligence", group: "internal", kind: "Internal Project", status: "Developed and in use", title: "Portfolio Delivery Intelligence",
    summary: "A self-service platform that brings multi-team progress, trends, dependencies, and planning signals into one view, with links to the underlying delivery evidence.",
    contribution: "I co-developed the platform, shaping its product model, planning and reporting experience, shared delivery definitions, validation rules, and executive decision context while partnering on implementation.",
    challenge: "Delivery signals were spread across teams and tools, making progress, dependency, and planning conversations slower and harder to validate.",
    approach: "Combined source integrations, standardized progress definitions, flexible reporting periods, automated validation, caching, and performance controls to support a consistent view of delivery health.",
    evidence: ["Operational self-service platform", "Standardized delivery definitions", "Cross-team dependency visibility", "Automated validation and performance controls"],
    tools: ["React", "GitLab APIs", "Portfolio analytics", "Data validation", "Caching", "Delivery planning"],
  },
];

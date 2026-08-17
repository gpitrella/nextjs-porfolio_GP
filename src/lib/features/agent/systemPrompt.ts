import { PROFILE_DATA } from "@/lib/features/profile/data";
import { EXPERIENCE_DATA } from "@/lib/features/experience/data";
import { EDUCATION_DATA } from "@/lib/features/education/data";
import { CERTIFICATES_DATA } from "@/lib/features/certificates/data";
import { PROJECTS_DATA } from "@/lib/features/projects/data";
import { SKILLS_DATA } from "@/lib/features/skills/data";

const formatList = (value: string | string[]) => (Array.isArray(value) ? value.join("; ") : value);

export function buildSystemPrompt(): string {
  const { hero, biography } = PROFILE_DATA;

  const experienceBlock = EXPERIENCE_DATA.map(
    (job) =>
      `- ${job.position} at ${job.company} (${job.time}): ${formatList(job.work)}. Stack: ${formatList(job.stacks)}`
  ).join("\n");

  const educationBlock = EDUCATION_DATA.map((item) =>
    item.url
      ? `- [${item.type}](${item.url}), ${item.place} (${item.time})`
      : `- ${item.type}, ${item.place} (${item.time})`
  ).join("\n");

  const certificatesBlock = CERTIFICATES_DATA.map(
    (cert) => `- [${cert.title}](${cert.url}) (${cert.issuedAt})`
  ).join("\n");

  const formatProjectLine = (project: (typeof PROJECTS_DATA)[number]) => {
    const links =
      project.repoUrl && project.repoUrl !== project.liveUrl
        ? `Links: [Live](${project.liveUrl}) · [Code](${project.repoUrl})`
        : `Link: [${project.title}](${project.liveUrl})`;
    return `- ${project.title}: ${project.summary} Technologies: ${project.technologies.join(", ")}. ${links}`;
  };

  const featuredProjectsBlock = PROJECTS_DATA.filter((project) => project.featured)
    .map(formatProjectLine)
    .join("\n");

  const otherProjectsBlock = PROJECTS_DATA.filter((project) => !project.featured)
    .map(formatProjectLine)
    .join("\n");

  const skillsBlock = SKILLS_DATA.map((category) => `- ${category.label}: ${category.skills.join(", ")}`).join("\n");

  return `You are Gabriel Pitrella's portfolio assistant. Recruiters may read this to evaluate him, so be professional, confident, complete. Use ONLY the info below — no invented or "implied" facts/skills/projects (never e.g. "Stripe (implied by payment integration)"). Not listed = unknown.

Reply in the visitor's language (detect each message, don't default to Spanish just because the data below is in English).

Rules:
- No meta openers ("Según la información proporcionada", "According to the information provided") — answer directly, like someone who knows his work firsthand.
- Be thorough on list questions (projects, certs, experience) — full list, no trimming for brevity.
- Always link projects/certifications/degrees you mention when a link exists in the data (already formatted as Markdown links) — it adds credibility, so never skip it.
- Confident, polished tone — not stiff, not overly casual.
- "What projects" → lead with Featured; only mention Other projects if asked for the full list or something specific matches.
- Off-topic (unrelated topics, other people, third-party opinions) → say you don't have that info, redirect to Gabriel's work.
- If asked to prove/verify a degree or certification that has no link in the data, say the official document can be shared directly on request via the contact channels — never say you can't verify it at all.
- Never fabricate contact details, dates, achievements.
- Markdown OK, keep it light — no deep nesting or long headings.

## Summary
${hero.summary}

${biography.paragraphs.join("\n\n")}

## Skills
${skillsBlock}

## Experience
${experienceBlock}

## Featured projects
${featuredProjectsBlock}

## Other projects
${otherProjectsBlock}

## Education
${educationBlock}

## Certifications
${certificatesBlock}

## Contact
Email: ${hero.contactEmail}
GitHub: https://github.com/gpitrella
LinkedIn: https://www.linkedin.com/in/gabrielpitrella/
`;
}

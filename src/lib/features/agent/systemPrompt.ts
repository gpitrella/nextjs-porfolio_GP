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

  const educationBlock = EDUCATION_DATA.map((item) => `- ${item.type}, ${item.place} (${item.time})`).join("\n");

  const certificatesBlock = CERTIFICATES_DATA.map((cert) => `- ${cert.title} (${cert.issuedAt})`).join("\n");

  const projectsBlock = PROJECTS_DATA.filter((project) => project.featured)
    .map(
      (project) =>
        `- ${project.title}: ${project.summary} Technologies: ${project.technologies.join(", ")}. Link: ${project.liveUrl}`
    )
    .join("\n");

  const skillsBlock = SKILLS_DATA.map((category) => `- ${category.label}: ${category.skills.join(", ")}`).join("\n");

  return `You are the portfolio assistant for Gabriel Pitrella. You answer visitors' questions about his professional background, using ONLY the information provided below. Do not invent facts, numbers, or projects that are not listed here.

Rules:
- Answer in the same language the visitor writes in (Spanish or English).
- Be concise and conversational, like a knowledgeable colleague, not a resume reader.
- If asked something outside this information (unrelated topics, other people, opinions on third parties), say you don't have that information and steer the conversation back to Gabriel's work.
- Never make up contact details, dates, or achievements.
- Markdown is fine (bold, lists, links) — the chat UI renders it. Keep formatting light; avoid deeply nested lists or long headings.

## Summary
${hero.summary}

${biography.paragraphs.join("\n\n")}

## Skills
${skillsBlock}

## Experience
${experienceBlock}

## Featured projects
${projectsBlock}

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

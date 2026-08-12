/**
 * Task 3.4 Verification Test
 * 
 * Verifies that work experience now uses structured bullet points
 * instead of long text blocks.
 */

import { EXPERIENCE_DATA } from '@/lib/features/experience/data';

describe('Task 3.4 - Structured Experience with Bullet Points', () => {
  test('All experience entries use array format for work field', () => {
    EXPERIENCE_DATA.forEach((experience) => {
      expect(Array.isArray(experience.work)).toBe(true);
      expect(experience.work.length).toBeGreaterThan(0);
    });
  });

  test('All experience entries use array format for stacks field', () => {
    EXPERIENCE_DATA.forEach((experience) => {
      expect(Array.isArray(experience.stacks)).toBe(true);
      expect(experience.stacks.length).toBeGreaterThan(0);
    });
  });

  test('HubSnacks experience has structured responsibilities', () => {
    const hubsnacksExp = EXPERIENCE_DATA.find(e => e.id === 'hubsnacks-fullstack');
    
    expect(hubsnacksExp).toBeDefined();
    expect(Array.isArray(hubsnacksExp?.work)).toBe(true);
    expect(hubsnacksExp?.work).toContain('Worked directly with international clients to translate CRM and integration requirements into production features');
    const work = Array.isArray(hubsnacksExp?.work) ? hubsnacksExp.work : [];
    expect(work.some((item) => item.includes('HubL modules'))).toBe(true);
  });

  test('HubSnacks experience has structured technologies', () => {
    const hubsnacksExp = EXPERIENCE_DATA.find(e => e.id === 'hubsnacks-fullstack');

    expect(hubsnacksExp).toBeDefined();
    expect(Array.isArray(hubsnacksExp?.stacks)).toBe(true);
    expect(hubsnacksExp?.stacks).toContain('HubSpot CMS');
    expect(hubsnacksExp?.stacks).toContain('Node.js');
    expect(hubsnacksExp?.stacks).toContain('TypeScript');
  });

  test('All work items are concise bullet points (not paragraphs)', () => {
    EXPERIENCE_DATA.forEach((experience) => {
      if (Array.isArray(experience.work)) {
        experience.work.forEach((item) => {
          // Each bullet point should be a single sentence or phrase
          // Not a long paragraph (< 260 characters is reasonable)
          expect(item.length).toBeLessThan(260);
        });
      }
    });
  });
});

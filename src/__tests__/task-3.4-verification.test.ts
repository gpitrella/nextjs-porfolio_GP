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
    expect(hubsnacksExp?.work).toContain('Created high-performance websites and landing pages with scalable frontend architectures');
    expect(hubsnacksExp?.work).toContain('Embedded React components inside HubSpot (React-in-HubSpot) to extend CMS capabilities');
  });

  test('HubSnacks experience has structured technologies', () => {
    const hubsnacksExp = EXPERIENCE_DATA.find(e => e.id === 'hubsnacks-fullstack');
    
    expect(hubsnacksExp).toBeDefined();
    expect(Array.isArray(hubsnacksExp?.stacks)).toBe(true);
    expect(hubsnacksExp?.stacks).toContain('HubSpot CMS');
    expect(hubsnacksExp?.stacks).toContain('React');
    expect(hubsnacksExp?.stacks).toContain('TypeScript');
  });

  test('All work items are concise bullet points (not paragraphs)', () => {
    EXPERIENCE_DATA.forEach((experience) => {
      if (Array.isArray(experience.work)) {
        experience.work.forEach((item) => {
          // Each bullet point should be a single sentence or phrase
          // Not a long paragraph (< 200 characters is reasonable)
          expect(item.length).toBeLessThan(200);
        });
      }
    });
  });
});

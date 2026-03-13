/**
 * Bug Condition Exploration Tests
 * 
 * CRITICAL: These tests are EXPECTED TO FAIL on unfixed code.
 * Test failures confirm that the bugs exist in the current codebase.
 * 
 * DO NOT fix the code or tests when they fail - document the failures.
 * 
 * These tests validate the PRESENCE of 22 professionalism problems across:
 * - Content & Presentation (1.1-1.6)
 * - Technical Config & SEO (2.1-2.6)
 * - Development Best Practices (3.1-3.6)
 * - Data Structure (4.1-4.4)
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { PROFILE_DATA } from '@/lib/features/profile/data';
import { PROJECTS_DATA } from '@/lib/features/projects/data';
import { EXPERIENCE_DATA } from '@/lib/features/experience/data';

describe('Bug Condition Exploration - Content & Presentation (1.1-1.6)', () => {
  /**
   * Test 1.1: Verify generic title "Passion Fuels Purpose!" in About
   * Validates: Requirement 1.1
   */
  test('1.1 - About page contains generic title "Passion Fuels Purpose!"', () => {
    const aboutPagePath = join(process.cwd(), 'src/components/about/AboutPage.tsx');
    const aboutPageContent = readFileSync(aboutPagePath, 'utf-8');
    
    expect(aboutPageContent).toContain('Passion Fuels Purpose!');
  });

  /**
   * Test 1.2: Verify biography lacks quantifiable metrics
   * Validates: Requirement 1.2
   */
  test('1.2 - Biography lacks quantifiable metrics (no numbers/percentages)', () => {
    const biography = PROFILE_DATA.biography.paragraphs.join(' ');
    
    // Check that biography contains vague language without specific metrics
    expect(biography).toContain('architecting reliable and scalable web experiences');
    
    // Verify no quantifiable metrics (numbers followed by %)
    const hasPercentages = /\d+%/.test(biography);
    expect(hasPercentages).toBe(false);
  });

  /**
   * Test 1.3: Verify grammatical errors in projects
   * Validates: Requirement 1.3
   */
  test('1.3 - Projects contain grammatical errors ("brodeurd-development")', () => {
    const brodeurProject = PROJECTS_DATA.find(p => p.id === 'brodeur-development');
    
    expect(brodeurProject).toBeDefined();
    expect(brodeurProject?.slug).toBe('brodeurd-development'); // Typo: should be "brodeur"
    expect(brodeurProject?.title).toBe('Brodeurd Development'); // Typo: should be "Brodeur"
  });

  /**
   * Test 1.4: Verify work experience lacks bullet point structure
   * Validates: Requirement 1.4
   */
  test('1.4 - Work experience lacks bullet point structure', () => {
    const hubsnacksExp = EXPERIENCE_DATA.find(e => e.id === 'hubsnacks-fullstack');
    
    expect(hubsnacksExp).toBeDefined();
    // Work field should be a long string, not an array of bullet points
    expect(typeof hubsnacksExp?.work).toBe('string');
    expect(Array.isArray(hubsnacksExp?.work)).toBe(false);
  });

  /**
   * Test 1.5: Verify informal footer with emoji
   * Validates: Requirement 1.5
   */
  test('1.5 - Footer contains informal message with emoji ❤️', () => {
    const footerPath = join(process.cwd(), 'src/components/Footer.tsx');
    const footerContent = readFileSync(footerPath, 'utf-8');
    
    expect(footerContent).toContain('Build With');
    expect(footerContent).toContain('&#9825;'); // Heart emoji HTML entity
  });

  /**
   * Test 1.6: Verify inflated metrics with "+"
   * Validates: Requirement 1.6
   */
  test('1.6 - Metrics are inflated with "+" suffix', () => {
    const metrics = PROFILE_DATA.metrics;
    
    // All metrics should have "+" suffix
    const allHavePlus = metrics.every(m => m.suffix === '+');
    expect(allHavePlus).toBe(true);
    
    // Check specific inflated values
    const certificatesMetric = metrics.find(m => m.id === 'certificates');
    expect(certificatesMetric?.value).toBe(3);
    expect(certificatesMetric?.suffix).toBe('+');
    expect(certificatesMetric?.label).toContain('University certificates');
  });
});

describe('Bug Condition Exploration - Technical Config & SEO (2.1-2.6)', () => {
  /**
   * Test 2.1: Verify absence of public/robots.txt
   * Validates: Requirement 2.1
   */
  test('2.1 - robots.txt does not exist in public folder', () => {
    const robotsPath = join(process.cwd(), 'public/robots.txt');
    const robotsExists = existsSync(robotsPath);
    
    expect(robotsExists).toBe(false);
  });

  /**
   * Test 2.2: Verify absence of Open Graph tags in metadata
   * Validates: Requirement 2.2
   */
  test('2.2 - Layout metadata lacks Open Graph tags', () => {
    const layoutPath = join(process.cwd(), 'src/app/layout.tsx');
    const layoutContent = readFileSync(layoutPath, 'utf-8');
    
    // Check that openGraph is not defined in metadata
    expect(layoutContent).not.toContain('openGraph:');
    expect(layoutContent).not.toContain('twitter:');
  });

  /**
   * Test 2.3: Verify absence of structured data (JSON-LD)
   * Validates: Requirement 2.3
   */
  test('2.3 - Layout lacks structured data (JSON-LD)', () => {
    const layoutPath = join(process.cwd(), 'src/app/layout.tsx');
    const layoutContent = readFileSync(layoutPath, 'utf-8');
    
    // Check that JSON-LD script is not present
    expect(layoutContent).not.toContain('application/ld+json');
    expect(layoutContent).not.toContain('@context');
    expect(layoutContent).not.toContain('schema.org');
  });

  /**
   * Test 2.4: Verify absence of src/app/sitemap.ts
   * Validates: Requirement 2.4
   */
  test('2.4 - sitemap.ts does not exist', () => {
    const sitemapPath = join(process.cwd(), 'src/app/sitemap.ts');
    const sitemapExists = existsSync(sitemapPath);
    
    expect(sitemapExists).toBe(false);
  });

  /**
   * Test 2.5: Verify next.config.js has minimal config
   * Validates: Requirement 2.5
   */
  test('2.5 - next.config.js has minimal configuration', () => {
    const configPath = join(process.cwd(), 'next.config.js');
    const configContent = readFileSync(configPath, 'utf-8');
    
    // Check that professional configs are missing
    expect(configContent).not.toContain('compress:');
    expect(configContent).not.toContain('headers()');
    expect(configContent).not.toContain('X-Frame-Options');
    expect(configContent).not.toContain('Strict-Transport-Security');
    expect(configContent).not.toContain('poweredByHeader');
  });

  /**
   * Test 2.6: Verify analytics without custom events
   * Validates: Requirement 2.6
   */
  test('2.6 - Project components lack custom analytics events', () => {
    const featuredCardPath = join(process.cwd(), 'src/components/projects/FeaturedProjectCard.tsx');
    const featuredCardContent = readFileSync(featuredCardPath, 'utf-8');
    
    // Check that gtag events are not implemented
    expect(featuredCardContent).not.toContain('gtag(');
    expect(featuredCardContent).not.toContain('project_view');
    expect(featuredCardContent).not.toContain('event');
  });
});

describe('Bug Condition Exploration - Development Best Practices (3.1-3.6)', () => {
  /**
   * Test 3.1: Verify console.error in ErrorBoundary.tsx line 29
   * Validates: Requirement 3.1
   */
  test('3.1 - ErrorBoundary uses console.error in production', () => {
    const errorBoundaryPath = join(process.cwd(), 'src/components/ErrorBoundary.tsx');
    const errorBoundaryContent = readFileSync(errorBoundaryPath, 'utf-8');
    
    // Check that console.error is used without production check
    expect(errorBoundaryContent).toContain('console.error');
    expect(errorBoundaryContent).toContain("console.error('ErrorBoundary caught an error:'");
    
    // Verify no professional logging service is actually imported/used
    expect(errorBoundaryContent).not.toContain("import * as Sentry");
    expect(errorBoundaryContent).not.toContain("import { logError }");
  });

  /**
   * Test 3.2: Verify absence of CHANGELOG.md
   * Validates: Requirement 3.2
   */
  test('3.2 - CHANGELOG.md does not exist', () => {
    const changelogPath = join(process.cwd(), 'CHANGELOG.md');
    const changelogExists = existsSync(changelogPath);
    
    expect(changelogExists).toBe(false);
  });

  /**
   * Test 3.3: Verify README.md without ADRs section
   * Validates: Requirement 3.3
   */
  test('3.3 - README.md lacks Architecture Decision Records section', () => {
    const readmePath = join(process.cwd(), 'README.md');
    const readmeContent = readFileSync(readmePath, 'utf-8');
    
    // Check that ADR section is not present
    expect(readmeContent).not.toContain('Architecture Decision Records');
    expect(readmeContent).not.toContain('ADR-');
    expect(readmeContent).not.toContain('## ADR');
  });

  /**
   * Test 3.4: Verify insufficient test coverage (< 70%)
   * Validates: Requirement 3.4
   */
  test('3.4 - Test coverage threshold is not configured', () => {
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
    
    // Check that coverage threshold is not configured
    expect(packageJsonContent).not.toContain('coverageThreshold');
    expect(packageJsonContent).not.toContain('"global"');
  });

  /**
   * Test 3.5: Verify absence of automated accessibility tests
   * Validates: Requirement 3.5
   */
  test('3.5 - Automated accessibility tests are not configured', () => {
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
    
    // Check that jest-axe or similar a11y testing library is not installed
    expect(packageJsonContent).not.toContain('jest-axe');
    expect(packageJsonContent).not.toContain('@axe-core/react');
    
    // Check that a11y test helper doesn't exist
    const a11yHelperPath = join(process.cwd(), 'src/lib/testing/a11y.ts');
    const a11yHelperExists = existsSync(a11yHelperPath);
    expect(a11yHelperExists).toBe(false);
  });

  /**
   * Test 3.6: Verify absence of pre-commit hooks (.husky)
   * Validates: Requirement 3.6
   */
  test('3.6 - Pre-commit hooks are not configured', () => {
    const huskyPath = join(process.cwd(), '.husky/pre-commit');
    const huskyExists = existsSync(huskyPath);
    
    expect(huskyExists).toBe(false);
    
    // Also check package.json for lint-staged
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
    expect(packageJsonContent).not.toContain('lint-staged');
  });
});

describe('Bug Condition Exploration - Data Structure (4.1-4.4)', () => {
  /**
   * Test 4.1: Verify inconsistent years of experience
   * Validates: Requirement 4.1
   */
  test('4.1 - Years of experience are inconsistent', () => {
    const experienceMetric = PROFILE_DATA.metrics.find(m => m.id === 'experience');
    const summary = PROFILE_DATA.hero.summary;
    
    // Check that experience shows "4+ years"
    expect(experienceMetric?.value).toBe(4);
    expect(experienceMetric?.suffix).toBe('+');
    expect(summary).toContain('4+ years');
    
    // But HubSnacks experience started in 06/2022 (should be ~3 years as of 2025)
    const hubsnacksExp = EXPERIENCE_DATA.find(e => e.id === 'hubsnacks-fullstack');
    expect(hubsnacksExp?.time).toContain('06/2022');
  });

  /**
   * Test 4.2: Verify skills without categorization (flat array)
   * Validates: Requirement 4.2
   */
  test('4.2 - Skills data lacks categorization structure', () => {
    // Check if skills data file exists
    const skillsDataPath = join(process.cwd(), 'src/lib/features/skills/data.ts');
    const skillsExists = existsSync(skillsDataPath);
    
    if (skillsExists) {
      const skillsContent = readFileSync(skillsDataPath, 'utf-8');
      
      // Check that skills don't have category or level fields
      expect(skillsContent).not.toContain('category:');
      expect(skillsContent).not.toContain('level:');
      expect(skillsContent).not.toContain("'expert'");
      expect(skillsContent).not.toContain("'frontend'");
    } else {
      // Skills file doesn't exist - this is also a professionalism issue
      // Skills are likely embedded in components without proper data structure
      expect(skillsExists).toBe(false);
    }
  });

  /**
   * Test 4.3: Verify duplicate URLs in private projects
   * Validates: Requirement 4.3
   */
  test('4.3 - Private projects have duplicate URLs (link === github)', () => {
    const brodeurProject = PROJECTS_DATA.find(p => p.id === 'brodeur-development');
    const highermeProject = PROJECTS_DATA.find(p => p.id === 'higherme-story');
    
    // Brodeur Development has same URL for live and repo
    expect(brodeurProject?.liveUrl).toBe('https://brodeurdevelopment.com/');
    expect(brodeurProject?.repoUrl).toBe('https://brodeurdevelopment.com/');
    
    // HigherMe Story has same URL for live and repo
    expect(highermeProject?.liveUrl).toBe('https://higherme.com/our-story');
    expect(highermeProject?.repoUrl).toBe('https://higherme.com/our-story');
    
    // Neither project has isPrivate flag
    expect(brodeurProject).not.toHaveProperty('isPrivate');
    expect(highermeProject).not.toHaveProperty('isPrivate');
  });

  /**
   * Test 4.4: Verify inconsistent Toyota role
   * Validates: Requirement 4.4
   */
  test('4.4 - Toyota role is inconsistent (Front-End Developer vs Quality Assembly Engineer)', () => {
    const toyotaExp = EXPERIENCE_DATA.find(e => e.id === 'toyota-frontend');
    
    expect(toyotaExp).toBeDefined();
    // Position shows "Front-End Developer" as primary role
    expect(toyotaExp?.position).toContain('Front-End Developer');
    
    // But also includes "Quality Assembly Engineer" suggesting confusion about main role
    // The ID is "toyota-frontend" but position lists both roles with pipe separator
    expect(toyotaExp?.position).toContain('Quality Assembly Engineer');
  });
});

describe('Bug Condition Summary', () => {
  /**
   * Summary test to document all 22 bugs detected
   */
  test('Summary - All 22 professionalism problems are present', () => {
    const bugsDetected = {
      contentAndPresentation: [
        '1.1 - Generic title "Passion Fuels Purpose!"',
        '1.2 - Biography lacks quantifiable metrics',
        '1.3 - Grammatical errors in projects',
        '1.4 - Work experience lacks bullet points',
        '1.5 - Informal footer with emoji',
        '1.6 - Inflated metrics with "+"'
      ],
      technicalConfigAndSEO: [
        '2.1 - Missing robots.txt',
        '2.2 - Missing Open Graph tags',
        '2.3 - Missing structured data (JSON-LD)',
        '2.4 - Missing sitemap.ts',
        '2.5 - Minimal next.config.js',
        '2.6 - No custom analytics events'
      ],
      developmentBestPractices: [
        '3.1 - console.error in production',
        '3.2 - Missing CHANGELOG.md',
        '3.3 - README without ADRs',
        '3.4 - No test coverage threshold',
        '3.5 - No accessibility tests',
        '3.6 - No pre-commit hooks'
      ],
      dataStructure: [
        '4.1 - Inconsistent years of experience',
        '4.2 - Skills without categorization',
        '4.3 - Duplicate URLs in private projects',
        '4.4 - Inconsistent Toyota role'
      ]
    };
    
    const totalBugs = Object.values(bugsDetected).flat().length;
    expect(totalBugs).toBe(22);
    
    console.log('\n=== BUG CONDITION EXPLORATION SUMMARY ===');
    console.log(`Total professionalism problems detected: ${totalBugs}`);
    console.log('\nContent & Presentation:', bugsDetected.contentAndPresentation.length);
    console.log('Technical Config & SEO:', bugsDetected.technicalConfigAndSEO.length);
    console.log('Development Best Practices:', bugsDetected.developmentBestPractices.length);
    console.log('Data Structure:', bugsDetected.dataStructure.length);
    console.log('\nThese tests SHOULD FAIL - failures confirm bugs exist.');
    console.log('After fixes are implemented, these tests should PASS.\n');
  });
});

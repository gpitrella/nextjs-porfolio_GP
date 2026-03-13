/**
 * Task 3.6 Verification Test: Corrected Metrics (Bug 1.6)
 * 
 * This test verifies that the inflated metrics bug has been fixed.
 * 
 * **Validates: Requirement 2.6**
 * 
 * Expected Behavior:
 * - Metrics should use precise, verifiable numbers without "+" suffix
 * - "Professional Certifications" should show 10 (verified count)
 * - "Projects completed" should show 8 (verified count)
 * - "Years of experience" should show 3 (consistent with experience since 2022)
 */

import { PROFILE_DATA } from '@/lib/features/profile/data';
import { CERTIFICATES_DATA } from '@/lib/features/certificates/data';
import { PROJECTS_DATA } from '@/lib/features/projects/data';

describe('Task 3.6 Verification - Corrected Metrics', () => {
  test('Metrics no longer use "+" suffix', () => {
    const metrics = PROFILE_DATA.metrics;
    
    // No metric should have "+" suffix
    const noneHavePlus = metrics.every(m => m.suffix === '' || m.suffix === undefined);
    expect(noneHavePlus).toBe(true);
  });

  test('Professional Certifications metric is accurate', () => {
    const certificatesMetric = PROFILE_DATA.metrics.find(m => m.id === 'certificates');
    
    // Should show "Professional Certifications" not "University certificates"
    expect(certificatesMetric?.label).toBe('Professional Certifications');
    
    // Should match actual count of certifications
    expect(certificatesMetric?.value).toBe(CERTIFICATES_DATA.length);
    expect(certificatesMetric?.value).toBe(10);
    
    // Should not have "+" suffix
    expect(certificatesMetric?.suffix).toBe('');
  });

  test('Projects completed metric is accurate', () => {
    const projectsMetric = PROFILE_DATA.metrics.find(m => m.id === 'projects');
    
    // Should match actual count of projects
    expect(projectsMetric?.value).toBe(PROJECTS_DATA.length);
    expect(projectsMetric?.value).toBe(8);
    
    // Should not have "+" suffix
    expect(projectsMetric?.suffix).toBe('');
  });

  test('Years of experience is consistent and accurate', () => {
    const experienceMetric = PROFILE_DATA.metrics.find(m => m.id === 'experience');
    
    // Should show 3 years (consistent with experience since 2022)
    expect(experienceMetric?.value).toBe(3);
    
    // Should not have "+" suffix
    expect(experienceMetric?.suffix).toBe('');
  });

  test('All metrics are precise and verifiable', () => {
    const metrics = PROFILE_DATA.metrics;
    
    // All metrics should have specific numbers
    metrics.forEach(metric => {
      expect(typeof metric.value).toBe('number');
      expect(metric.value).toBeGreaterThan(0);
      
      // No vague suffixes like "+"
      expect(metric.suffix).not.toBe('+');
    });
  });
});

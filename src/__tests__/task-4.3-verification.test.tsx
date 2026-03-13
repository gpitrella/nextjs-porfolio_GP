/**
 * Task 4.3 Verification Test: JSON-LD Structured Data
 * 
 * Validates: Requirement 2.9
 * Bug Condition: isBugCondition(seo) where missingStructuredData() = true
 * Expected Behavior: Structured data improves search visibility
 */

import { render } from '@testing-library/react';
import RootLayout from '@/app/layout';

describe('Task 4.3: JSON-LD Structured Data', () => {
  it('should include JSON-LD structured data with Person schema', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // Find the JSON-LD script tag
    const jsonLdScript = container.querySelector('script[type="application/ld+json"]');
    
    expect(jsonLdScript).toBeTruthy();
    
    if (jsonLdScript) {
      const structuredData = JSON.parse(jsonLdScript.innerHTML);
      
      // Verify schema.org context
      expect(structuredData['@context']).toBe('https://schema.org');
      
      // Verify Person type
      expect(structuredData['@type']).toBe('Person');
      
      // Verify required Person properties
      expect(structuredData.name).toBe('Gabriel Pitrella');
      expect(structuredData.jobTitle).toBe('Full Stack Engineer');
      expect(structuredData.url).toBe('https://gabrielpitrella.com');
      
      // Verify social media links
      expect(structuredData.sameAs).toBeInstanceOf(Array);
      expect(structuredData.sameAs).toContain('https://github.com/gabrielpitrella');
      expect(structuredData.sameAs).toContain('https://linkedin.com/in/gabrielpitrella');
      
      // Verify skills/knowledge
      expect(structuredData.knowsAbout).toBeInstanceOf(Array);
      expect(structuredData.knowsAbout).toContain('Next.js');
      expect(structuredData.knowsAbout).toContain('React');
      expect(structuredData.knowsAbout).toContain('TypeScript');
      expect(structuredData.knowsAbout).toContain('HubSpot CMS');
    }
  });

  it('should have valid JSON-LD format', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    const jsonLdScript = container.querySelector('script[type="application/ld+json"]');
    
    expect(jsonLdScript).toBeTruthy();
    
    if (jsonLdScript) {
      // Should not throw when parsing
      expect(() => JSON.parse(jsonLdScript.innerHTML)).not.toThrow();
      
      const structuredData = JSON.parse(jsonLdScript.innerHTML);
      
      // Should be a valid object
      expect(typeof structuredData).toBe('object');
      expect(structuredData).not.toBeNull();
    }
  });

  it('should preserve layout rendering', () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="test-content">Test Content</div>
      </RootLayout>
    );

    // Verify layout still renders correctly
    expect(container.querySelector('html')).toBeTruthy();
    expect(container.querySelector('body')).toBeTruthy();
    expect(container.querySelector('[data-testid="test-content"]')).toBeTruthy();
  });
});

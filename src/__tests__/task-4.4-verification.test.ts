/**
 * Task 4.4 Verification Test: Crear sitemap automático (Problema 2.4)
 * 
 * Bug Condition: isBugCondition(seo) where missingSitemap() = true
 * Expected Behavior: Sitemap.xml generated automatically facilitates indexing
 * Preservation: Routing remains the same
 * Requirements: 2.10
 */

import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';

describe('Task 4.4: Automatic Sitemap Generation', () => {
  describe('Bug Condition - Missing Sitemap', () => {
    it('should have sitemap.ts file in src/app directory', () => {
      const sitemapPath = path.join(process.cwd(), 'src', 'app', 'sitemap.ts');
      const sitemapExists = fs.existsSync(sitemapPath);
      
      expect(sitemapExists).toBe(true);
    });

    it('should export a default function that returns MetadataRoute.Sitemap', async () => {
      // Dynamic import to test the sitemap module
      const sitemap = await import('../app/sitemap');
      
      expect(sitemap.default).toBeDefined();
      expect(typeof sitemap.default).toBe('function');
    });
  });

  describe('Expected Behavior - Sitemap Content', () => {
    it('should generate sitemap with all main routes', async () => {
      const sitemap = await import('../app/sitemap');
      const sitemapData = sitemap.default();
      
      expect(Array.isArray(sitemapData)).toBe(true);
      expect(sitemapData.length).toBeGreaterThanOrEqual(4);
      
      // Verify all main routes are included
      const urls = sitemapData.map((entry: any) => entry.url);
      expect(urls).toContain('https://gabrielpitrella.com');
      expect(urls).toContain('https://gabrielpitrella.com/about');
      expect(urls).toContain('https://gabrielpitrella.com/projects');
      expect(urls).toContain('https://gabrielpitrella.com/certifications');
    });

    it('should have correct priority values for each route', async () => {
      const sitemap = await import('../app/sitemap');
      const sitemapData = sitemap.default();
      
      const homeEntry = sitemapData.find((entry: any) => entry.url === 'https://gabrielpitrella.com');
      const aboutEntry = sitemapData.find((entry: any) => entry.url === 'https://gabrielpitrella.com/about');
      const projectsEntry = sitemapData.find((entry: any) => entry.url === 'https://gabrielpitrella.com/projects');
      const certificationsEntry = sitemapData.find((entry: any) => entry.url === 'https://gabrielpitrella.com/certifications');
      
      expect(homeEntry?.priority).toBe(1);
      expect(aboutEntry?.priority).toBe(0.8);
      expect(projectsEntry?.priority).toBe(0.9);
      expect(certificationsEntry?.priority).toBe(0.7);
    });

    it('should have correct changeFrequency values', async () => {
      const sitemap = await import('../app/sitemap');
      const sitemapData = sitemap.default();
      
      const homeEntry = sitemapData.find((entry: any) => entry.url === 'https://gabrielpitrella.com');
      const projectsEntry = sitemapData.find((entry: any) => entry.url === 'https://gabrielpitrella.com/projects');
      
      expect(homeEntry?.changeFrequency).toBe('monthly');
      expect(projectsEntry?.changeFrequency).toBe('weekly');
    });

    it('should have lastModified dates for all entries', async () => {
      const sitemap = await import('../app/sitemap');
      const sitemapData = sitemap.default();
      
      sitemapData.forEach((entry: any) => {
        expect(entry.lastModified).toBeInstanceOf(Date);
      });
    });
  });

  describe('Preservation - Routing Unchanged', () => {
    it('should not affect existing route structure', () => {
      // Verify that main route files still exist
      const routeFiles = [
        'src/app/page.tsx',
        'src/app/about/page.tsx',
        'src/app/projects/page.tsx',
        'src/app/certifications/page.tsx',
      ];
      
      routeFiles.forEach(file => {
        const filePath = path.join(process.cwd(), file);
        expect(fs.existsSync(filePath)).toBe(true);
      });
    });
  });

  describe('SEO Requirements (2.10)', () => {
    it('should facilitate search engine indexing with proper sitemap structure', async () => {
      const sitemap = await import('../app/sitemap');
      const sitemapData = sitemap.default();
      
      // Verify sitemap follows proper structure for search engines
      sitemapData.forEach((entry: any) => {
        // Each entry should have required fields
        expect(entry.url).toBeDefined();
        expect(typeof entry.url).toBe('string');
        expect(entry.url).toMatch(/^https:\/\//);
        
        // Optional but recommended fields
        expect(entry.lastModified).toBeDefined();
        expect(entry.changeFrequency).toBeDefined();
        expect(entry.priority).toBeDefined();
        expect(entry.priority).toBeGreaterThanOrEqual(0);
        expect(entry.priority).toBeLessThanOrEqual(1);
      });
    });
  });
});

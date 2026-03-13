/**
 * Task 3.5 Verification Test - Professional Footer Message
 * 
 * Verifies that the footer displays "Built by Gabriel Pitrella" 
 * instead of the informal "Build With ❤️" message.
 * 
 * **Validates: Requirement 2.5**
 */

import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Task 3.5 - Professional Footer Message', () => {
  test('Footer displays professional message "Built by Gabriel Pitrella"', () => {
    render(<Footer />);
    
    // Verify professional message is present
    expect(screen.getByText(/Built by/i)).toBeInTheDocument();
    expect(screen.getByText('Gabriel Pitrella')).toBeInTheDocument();
    
    // Verify the link to GitHub is present
    const githubLink = screen.getByRole('link', { name: /Visit Gabriel Pitrella's GitHub profile/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/gpitrella');
  });

  test('Footer does NOT contain informal message or emoji', () => {
    const { container } = render(<Footer />);
    
    // Verify informal message is NOT present
    expect(container.textContent).not.toContain('Build With');
    
    // Verify heart emoji is NOT present
    expect(container.innerHTML).not.toContain('&#9825;');
    expect(container.innerHTML).not.toContain('❤');
  });

  test('Footer source code has been updated correctly', () => {
    const footerPath = join(process.cwd(), 'src/components/Footer.tsx');
    const footerContent = readFileSync(footerPath, 'utf-8');
    
    // Verify source code contains professional message
    expect(footerContent).toContain('Built by');
    
    // Verify source code does NOT contain informal message
    expect(footerContent).not.toContain('Build With');
    expect(footerContent).not.toContain('&#9825;');
  });

  test('Footer structure and links remain unchanged', () => {
    render(<Footer />);
    
    // Verify copyright notice is still present
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`${currentYear} © All Rights Reserved.`)).toBeInTheDocument();
    
    // Verify GitHub link functionality is preserved
    const githubLink = screen.getByRole('link', { name: /Visit Gabriel Pitrella's GitHub profile/i });
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noreferrer noopener');
  });
});

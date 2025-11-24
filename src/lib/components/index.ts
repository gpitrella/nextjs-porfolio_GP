/**
 * Shared Component Library
 * 
 * This module exports reusable components that can be used across the application.
 * Components are organized by category and follow consistent patterns.
 */

// UI Components
export { Button } from '@/components/ui/button';
export { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Layout Components
export { default as Layout } from '@/components/Layout';
export { default as ErrorBoundary } from '@/components/ErrorBoundary';

// Navigation Components
export { default as Logo } from '@/components/Logo';

// Animation Components
export { default as AnimatedText } from '@/components/AnimatedText';
export { default as TransitionEffect } from '@/components/TransitionEffect';

// Utility Components
export { default as LiIcon } from '@/components/LiIcon';

// Types
export type { ButtonProps } from '@/components/ui/button';


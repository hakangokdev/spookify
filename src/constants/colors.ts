/**
 * Color constants extracted from Figma design
 * Halloween Party Landing Page Design System
 */

export const colors = {
  // Primary Colors
  primary: {
    main: '#FE772D',        // Main orange color
    background: '#000015',   // Background color
    gray: '#333333',        // Gray color
  },

  // Text Colors
  text: {
    primary: '#333333',     // Primary text color
    secondary: '#FFFFFF',   // White text color
    light: '#F5F5F5',      // Light gray text
  },

  // Background Colors
  background: {
    primary: '#000015',     // Main background
    secondary: '#000000',   // Black background
    overlay: 'rgba(0, 0, 0, 0.2)', // Semi-transparent overlay
  },

  // Accent Colors
  accent: {
    orange: '#FE772D',      // Primary accent
    darkGray: '#131313',    // Dark gray accent
    mediumGray: 'rgba(0, 0, 0, 0.5)', // Medium gray with opacity
    lightGray: 'rgba(0, 0, 0, 0.6)',  // Light gray with opacity
  },

  // Semantic Colors
  semantic: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  }
} as const;

// Export individual color palettes for easier access
export const primaryColors = colors.primary;
export const textColors = colors.text;
export const backgroundColors = colors.background;
export const accentColors = colors.accent;
export const semanticColors = colors.semantic;

// Color utility type
export type ColorKeys = keyof typeof colors;
export type PrimaryColorKeys = keyof typeof colors.primary;
export type TextColorKeys = keyof typeof colors.text;
export type BackgroundColorKeys = keyof typeof colors.background;
export type AccentColorKeys = keyof typeof colors.accent;
export type SemanticColorKeys = keyof typeof colors.semantic;
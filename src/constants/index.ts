/**
 * Design System Constants
 * Halloween Party Landing Page
 * 
 * This file exports all design tokens including colors, typography,
 * and other design constants extracted from the Figma design.
 */

// Export all color constants
export {
  colors,
  primaryColors,
  textColors,
  backgroundColors,
  accentColors,
  semanticColors,
  type ColorKeys,
  type PrimaryColorKeys,
  type TextColorKeys,
  type BackgroundColorKeys,
  type AccentColorKeys,
  type SemanticColorKeys,
} from './colors';

// Export all typography constants
export {
  typography,
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  textStyles,
  textAlignments,
  textTransforms,
  getTextStyle,
  createTextStyle,
  type FontFamilyKeys,
  type FontWeightKeys,
  type FontSizeKeys,
  type LineHeightKeys,
  type TextStyleKeys,
  type TextAlignKeys,
  type TextTransformKeys,
} from './typography';

// Design system theme object combining all constants
export const theme = {
  colors: {
    primary: '#FE772D',
    background: '#000015',
    text: '#333333',
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    heading: 'Jolly Lodger, cursive',
    body: 'Rubik, sans-serif',
    label: 'Lato, sans-serif',
  },
  fontSizes: {
    h1: '58px',
    h2: '36px',
    body: '24px',
    label: '20px',
    section: '48px',
  },
} as const;

// Export theme type
export type Theme = typeof theme;
/**
 * Typography constants extracted from Figma design
 * Halloween Party Landing Page Design System
 */

export const typography = {
  // Font Families
  fontFamily: {
    primary: 'Jolly Lodger, cursive',    // Primary decorative font for headings
    secondary: 'Rubik, sans-serif',      // Secondary font for body text
    tertiary: 'Lato, sans-serif',       // Tertiary font for labels/descriptions
  },

  // Font Weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Font Sizes
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '58px',
  },

  // Line Heights
  lineHeight: {
    tight: '1.2',
    normal: '1.4',
    relaxed: '1.6',
    loose: '1.8',
  },

  // Text Styles - Specific combinations from Figma
  textStyles: {
    // Heading Styles
    h1: {
      fontFamily: 'Jolly Lodger, cursive',
      fontSize: '58px',
      fontWeight: 400,
      lineHeight: '1.4', // 140% from Figma
      textTransform: 'uppercase' as const,
      letterSpacing: '0.02em',
    },
    
    h2: {
      fontFamily: 'Jolly Lodger, cursive',
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: '1.4', // 140% from Figma
      textTransform: 'uppercase' as const,
      letterSpacing: '0.02em',
    },

    // Body Styles
    body: {
      fontFamily: 'Rubik, sans-serif',
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '1.4', // Auto line height from Figma
      textTransform: 'uppercase' as const,
    },

    bodyRegular: {
      fontFamily: 'Rubik, sans-serif',
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '1.4',
      textTransform: 'none' as const,
    },

    // Section Headers
    sectionHeader: {
      fontFamily: 'Rubik, sans-serif',
      fontSize: '48px',
      fontWeight: 400,
      lineHeight: '1.185', // ~1.184999942779541em from Figma
      textTransform: 'none' as const,
    },

    // Labels and Descriptions
    label: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '1.4',
      textTransform: 'uppercase' as const,
    },

    labelSmall: {
      fontFamily: 'Rubik, sans-serif',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '1.185',
      textTransform: 'none' as const,
    },
  },

  // Text Alignment
  textAlign: {
    left: 'left' as const,
    center: 'center' as const,
    right: 'right' as const,
    justify: 'justify' as const,
  },

  // Text Transform
  textTransform: {
    none: 'none' as const,
    uppercase: 'uppercase' as const,
    lowercase: 'lowercase' as const,
    capitalize: 'capitalize' as const,
  },
} as const;

// Export individual typography sections for easier access
export const fontFamilies = typography.fontFamily;
export const fontWeights = typography.fontWeight;
export const fontSizes = typography.fontSize;
export const lineHeights = typography.lineHeight;
export const textStyles = typography.textStyles;
export const textAlignments = typography.textAlign;
export const textTransforms = typography.textTransform;

// Typography utility types
export type FontFamilyKeys = keyof typeof typography.fontFamily;
export type FontWeightKeys = keyof typeof typography.fontWeight;
export type FontSizeKeys = keyof typeof typography.fontSize;
export type LineHeightKeys = keyof typeof typography.lineHeight;
export type TextStyleKeys = keyof typeof typography.textStyles;
export type TextAlignKeys = keyof typeof typography.textAlign;
export type TextTransformKeys = keyof typeof typography.textTransform;

// Helper function to get complete text style
export const getTextStyle = (styleKey: TextStyleKeys) => {
  return typography.textStyles[styleKey];
};

// Helper function to create custom text style
export const createTextStyle = (
  fontFamily: string,
  fontSize: string,
  fontWeight: number,
  lineHeight: string,
  options?: {
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    letterSpacing?: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
  }
) => ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  ...options,
});
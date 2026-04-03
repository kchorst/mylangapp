// Typography system for MyLangApp
export const typography = {
  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 28,
  },
  
  // Font weights
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
  
  // Text styles
  textStyles: {
    header: {
      fontSize: 20, // Reduced from 24 for semantic hierarchy
      fontWeight: 'bold' as const,
      color: '#ffffff',
      textAlign: 'center' as const,
    },
    subheader: {
      fontSize: 18,
      fontWeight: '600' as const,
      color: '#ffffff',
      textAlign: 'center' as const,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      color: '#ffffff',
    },
    button: {
      fontSize: 18,
      fontWeight: '600' as const,
      textAlign: 'center' as const,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
      fontStyle: 'italic' as const,
      color: '#000000',
    },
    tableHeader: {
      fontSize: 14,
      fontWeight: 'bold' as const,
      color: '#ffffff',
      textAlign: 'center' as const,
    },
    tableCell: {
      fontSize: 14,
      fontWeight: '400' as const,
      color: '#ffffff',
      textAlign: 'left' as const,
    },
  },
};

export default typography;

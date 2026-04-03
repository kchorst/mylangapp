// Spacing system for MyLangApp - reduced by 25% from original values
export const spacing = {
  // Base spacing unit (4px)
  xs: 4,
  sm: 8,
  md: 12, // Reduced from 16
  lg: 16, // Reduced from 20
  xl: 20, // Reduced from 24
  xxl: 24, // Reduced from 32
  xxxl: 32, // Reduced from 40
  
  // Specific spacing values (25% reduction from original)
  container: {
    horizontal: 15, // Reduced from 20
    vertical: 45, // Reduced from 60 (paddingTop)
  },
  
  button: {
    vertical: 9, // Reduced from 12
    horizontal: 20, // Kept same for touch targets
    margin: 4.5, // Reduced from 6
    radius: 12, // Kept same for visual appeal
  },
  
  category: {
    vertical: 15, // Reduced from 20
    margin: 7.5, // Reduced from 10
    radius: 8, // Kept same
    padding: 6, // Reduced from 8
  },
  
  vocabulary: {
    container: 12, // Reduced from 16
    row: 4.5, // Reduced from 6
    header: 6, // Reduced from 8
  },
  
  header: {
    bottom: 15, // Reduced from 20
  },
  
  screen: {
    bottom: 15, // Reduced from 20
  },
};

export default spacing;

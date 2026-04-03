// Centralized color palette for MyLangApp
export const colors = {
  // Background colors
  background: {
    primary: '#000000', // Black background (LanguageScreen, VocabularyScreen)
    secondary: '#001f4d', // Dark blue background (CategoryScreen)
    tertiary: '#ffffff', // White (for light mode if needed)
  },
  
  // Text colors
  text: {
    primary: '#ffffff', // White text on dark backgrounds
    secondary: '#000000', // Black text on bright buttons
    tertiary: '#cccccc', // Light gray for borders
    muted: '#888888', // Gray for empty states
  },
  
  // Button colors (preserving existing palette)
  buttons: [
    '#FF5252', // Red
    '#FF4081', // Pink
    '#E040FB', // Purple
    '#7C4DFF', // Deep Purple
    '#536DFE', // Indigo
    '#448AFF', // Blue
    '#18FFFF', // Cyan
    '#69F0AE', // Green
    '#FFFF00', // Yellow
    '#007AFF', // Bright blue
    '#FF9500', // Orange
    '#34C759', // Green
    '#FF3B30', // Red
    '#5856D6', // Purple
    '#FF2D55', // Pinkish red
    '#5AC8FA', // Light blue
    '#FFCC00', // Yellow
  ],
  
  // Semantic colors
  semantic: {
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#007AFF',
  },
};

export default colors;

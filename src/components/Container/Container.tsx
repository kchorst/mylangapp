// Reusable Container component for MyLangApp
import React from 'react';
import { View, StyleSheet, ViewStyle, ScrollViewProps } from 'react-native';
import { theme } from '../../themes';

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  style?: ViewStyle;
  scrollable?: boolean;
  scrollViewProps?: ScrollViewProps;
}

const Container: React.FC<ContainerProps> = ({
  children,
  backgroundColor = theme.colors.background.primary,
  paddingHorizontal = theme.spacing.container.horizontal,
  paddingVertical = theme.spacing.container.vertical,
  style,
  scrollable = false,
  scrollViewProps,
}) => {
  const containerStyle = [
    styles.container,
    {
      backgroundColor,
      paddingHorizontal,
      paddingVertical,
    },
    style,
  ];

  if (scrollable) {
    const { ScrollView } = require('react-native');
    return (
      <ScrollView
        style={containerStyle}
        contentContainerStyle={styles.scrollContent}
        {...scrollViewProps}
      >
        {children}
      </ScrollView>
    );
  }

  return <View style={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default Container;

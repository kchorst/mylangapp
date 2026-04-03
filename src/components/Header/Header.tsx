// Semantic Header component for MyLangApp
import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../../themes';

interface HeaderProps {
  title: string;
  style?: ViewStyle;
  type?: 'primary' | 'secondary' | 'table';
}

const Header: React.FC<HeaderProps> = ({
  title,
  style,
  type = 'primary',
}) => {
  const getTextStyle = () => {
    switch (type) {
      case 'secondary':
        return theme.typography.textStyles.subheader;
      case 'table':
        return theme.typography.textStyles.tableHeader;
      default:
        return theme.typography.textStyles.header;
    }
  };

  const headerStyle = [
    styles.header,
    type === 'table' && styles.tableHeader,
    style,
  ];

  return (
    <Text style={[headerStyle, getTextStyle()]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: theme.spacing.header.bottom,
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.text.tertiary,
    paddingBottom: theme.spacing.vocabulary.header,
    marginBottom: theme.spacing.vocabulary.header,
  },
});

export default Header;

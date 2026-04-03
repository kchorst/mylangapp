// Reusable Button component for MyLangApp
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../../themes';

interface ButtonProps {
  title: string;
  subtitle?: string;
  titleNumberOfLines?: number;
  subtitleNumberOfLines?: number;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  subtitleColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  activeOpacity?: number;
}

const Button: React.FC<ButtonProps> = ({
  title,
  subtitle,
  titleNumberOfLines,
  subtitleNumberOfLines,
  onPress,
  backgroundColor,
  textColor = theme.colors.text.secondary,
  subtitleColor = theme.colors.text.secondary,
  style,
  textStyle,
  subtitleStyle,
  activeOpacity = 0.7,
}) => {
  const buttonStyle = [
    styles.button,
    backgroundColor ? { backgroundColor } : undefined,
    style,
  ];

  const buttonTextStyle = [
    styles.buttonText,
    { color: textColor },
    textStyle,
  ];

  const buttonSubtitleStyle = [
    styles.buttonSubtitle,
    { color: subtitleColor },
    subtitleStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <Text
        style={buttonTextStyle}
        numberOfLines={titleNumberOfLines}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      {subtitle ? (
        <Text
          style={buttonSubtitleStyle}
          numberOfLines={subtitleNumberOfLines}
          ellipsizeMode="tail"
        >
          {subtitle}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.button.vertical,
    paddingHorizontal: theme.spacing.button.horizontal,
    borderRadius: theme.spacing.button.radius,
    marginVertical: theme.spacing.button.margin,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: theme.typography.textStyles.button.fontSize,
    fontWeight: theme.typography.textStyles.button.fontWeight,
    textAlign: theme.typography.textStyles.button.textAlign,
  },
  buttonSubtitle: {
    marginTop: theme.spacing.xs,
    fontSize: theme.typography.sizes.xs,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default Button;

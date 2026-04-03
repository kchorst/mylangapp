// src/screens/CategoryScreen.tsx

import React from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CategoryScreenNavigationProp } from '../types/navigation';
import { Category } from '../types/vocabulary';
import { theme } from '../themes';
import Container from '../components/Container/Container';
import Button from '../components/Button/Button';
import categories from '../data/categories.json';

export default function CategoryScreen() {
  const navigation = useNavigation<CategoryScreenNavigationProp>();
  const route = useRoute();
  const { selectedLanguage } = route.params as { selectedLanguage: string };

  const handlePress = (categoryId: string) => {
    navigation.navigate('VocabularyScreen', {
      selectedCategory: categoryId,
      selectedLanguage,
    });
  };

  const renderCategoryItem = (item: Category, index: number) => (
    <Button
      title={item.label}
      subtitle={item.examples.join(', ')}
      titleNumberOfLines={1}
      subtitleNumberOfLines={1}
      onPress={() => handlePress(item.id)}
      backgroundColor={theme.colors.buttons[index % theme.colors.buttons.length]}
      textColor={theme.colors.text.secondary}
      style={{ width: '100%' }}
      textStyle={{ fontSize: theme.typography.sizes.xl, fontWeight: '600' }}
      subtitleStyle={{ fontSize: theme.typography.sizes.xs }}
    />
  );

  return (
    <Container
      backgroundColor={theme.colors.background.secondary}
      scrollable={true}
      paddingHorizontal={theme.spacing.container.horizontal}
      paddingVertical={theme.spacing.category.vertical}
    >
      {categories.map((item, index) => (
        <View key={item.id}>
          {renderCategoryItem(item, index)}
        </View>
      ))}
    </Container>
  );
}

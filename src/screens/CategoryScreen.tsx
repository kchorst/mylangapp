// src/screens/CategoryScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import categories from '../data/categories.json';

const buttonColors = [
  '#007AFF', // bright blue
  '#FF9500', // orange
  '#34C759', // green
  '#FF3B30', // red
  '#5856D6', // purple
  '#FF2D55', // pinkish red
  '#5AC8FA', // light blue
  '#FFCC00', // yellow
];

export default function CategoryScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedLanguage } = route.params as { selectedLanguage: string };

  const handlePress = (categoryId: string) => {
    navigation.navigate('VocabularyScreen', {
      selectedCategory: categoryId,
      selectedLanguage,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((item, index) => {
        const bgColor = buttonColors[index % buttonColors.length];
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.button, { backgroundColor: bgColor }]}
            onPress={() => handlePress(item.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{item.label}</Text>
            <View style={styles.examplesContainer}>
              {item.examples.map((word, idx) => (
                <Text key={idx} style={styles.exampleText}>
                  {word}
                  {idx < item.examples.length - 1 ? ', ' : ''}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#001f4d', // dark blue background
    paddingVertical: 20,
    alignItems: 'center',
  },
  button: {
    width: '90%',
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // black text on colored buttons
    fontSize: 20,
    fontWeight: '600',
  },
  examplesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 1,
  },
  exampleText: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 12,
    marginHorizontal: 4,
  },
});

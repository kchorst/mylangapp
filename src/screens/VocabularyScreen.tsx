// src/screens/VocabularyScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import vocabulary from '../data/vocabulary-full.json'; // Your local JSON vocab file

type Translation = {
  word: string;
  pronunciation: string;
};

type VocabularyItem = {
  category: string;
  english: string;
  translations: {
    [language: string]: Translation;
  };
};

export default function VocabularyScreen() {
  const route = useRoute();
  const { selectedLanguage, selectedCategory } = route.params as {
    selectedLanguage: string;
    selectedCategory: string;
  };

  const [filteredVocab, setFilteredVocab] = useState<VocabularyItem[]>([]);

  // Corrected languageKeyMap to include 3-letter codes from languages.json
  const languageKeyMap: { [key: string]: string } = {
    Eng: 'english',
    English: 'english',
    Arm: 'armenian',
    Armenian: 'armenian',
    Geo: 'georgian',
    Georgian: 'georgian',
    Rus: 'russian',
    Russian: 'russian',
    Jpn: 'japanese',
    Japanese: 'japanese',
    Chn: 'chinese', // Added for Chinese 3-letter code
    Chinese: 'chinese',
    Fra: 'french', // Added for French 3-letter code
    French: 'french',
    Spa: 'spanish', // Added for Spanish 3-letter code
    Spanish: 'spanish',
    Krw: 'kinyarwanda', // Added for Kinyarwanda 3-letter code
    Kinyarwanda: 'kinyarwanda',
  };

  const normalizedLang = languageKeyMap[selectedLanguage] || selectedLanguage.toLowerCase();
  const normalizedCategory = selectedCategory.trim().toLowerCase();

  useEffect(() => {
    const filtered = vocabulary.filter((item) => {
      const itemCategory = item.category?.trim().toLowerCase() || '';
      const catMatch = itemCategory === normalizedCategory;
      const hasEnglish = item.english && item.english.length > 0;
      const hasTranslation =
        normalizedLang === 'english' ||
        (item.translations &&
          item.translations[normalizedLang] &&
          item.translations[normalizedLang].word.length > 0);

      return catMatch && hasEnglish && hasTranslation;
    });

    setFilteredVocab(filtered);
  }, [selectedCategory, selectedLanguage, normalizedLang]); // Added normalizedLang to dependencies

  const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

  const renderItem = ({ item }: { item: VocabularyItem }) => {
    let translated: Translation = { word: '', pronunciation: '' };

    if (normalizedLang === 'english') {
      translated = { word: item.english, pronunciation: '' };
    } else if (item.translations && item.translations[normalizedLang]) {
      translated = item.translations[normalizedLang];
    } else {
      translated = { word: '[No translation]', pronunciation: '' };
    }

    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{capitalize(item.english)}</Text>
        <Text style={styles.cell}>{translated.word}</Text>
        <Text style={styles.cell}>{translated.pronunciation}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>English</Text>
        <Text style={styles.headerCell}>{selectedLanguage}</Text>
        <Text style={styles.headerCell}>Pronounce</Text>
      </View>

      {filteredVocab.length === 0 ? (
        <Text style={styles.emptyText}>No words found for this language and category.</Text>
      ) : (
        <FlatList
          data={filteredVocab}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.english}-${index}`}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 8,
    paddingBottom: 4,
  },
  headerCell: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
  },
  emptyText: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
});
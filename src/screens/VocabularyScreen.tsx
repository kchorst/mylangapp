// src/screens/VocabularyScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { VocabularyItem } from '../types/vocabulary';
import { LANGUAGE_KEY_MAP } from '../types/language';
import { theme } from '../themes';
import Container from '../components/Container/Container';
import VocabularyService from '../services/vocabularyService';
import languages from '../data/languages.json';

type VocabularyScreenRouteProp = RouteProp<RootStackParamList, 'VocabularyScreen'>;

export default function VocabularyScreen() {
  const route = useRoute<VocabularyScreenRouteProp>();
  const { selectedLanguage, selectedCategory } = route.params;

  const [filteredVocab, setFilteredVocab] = useState<VocabularyItem[]>([]);
  const vocabularyService = VocabularyService.getInstance();

  const normalizedLang = LANGUAGE_KEY_MAP[selectedLanguage] || selectedLanguage.toLowerCase();

  const selectedLanguageLabel =
    languages.find((l) => l.code === selectedLanguage)?.label ?? selectedLanguage;

  useEffect(() => {
    const filtered = vocabularyService.filterVocabulary({
      category: selectedCategory,
      language: normalizedLang,
    });
    setFilteredVocab(filtered);
  }, [selectedCategory, selectedLanguage, normalizedLang]);

  const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

  const getTranslation = (item: VocabularyItem) => {
    if (normalizedLang === 'english') {
      return { word: item.english, pronunciation: '' };
    } else if (item.translations && item.translations[normalizedLang]) {
      return item.translations[normalizedLang];
    } else {
      return { word: '[No translation]', pronunciation: '' };
    }
  };

  const renderItem = ({ item }: { item: VocabularyItem }) => {
    const translated = getTranslation(item);

    return (
      <View style={{
        flexDirection: 'row',
        paddingVertical: theme.spacing.vocabulary.row,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text.tertiary,
      }}>
        <Text style={[theme.typography.textStyles.tableCell, { flex: 1.2 }]}>
          {capitalize(item.english)}
        </Text>
        <Text style={[theme.typography.textStyles.tableCell, { flex: 1.2 }]}>
          {translated.word}
        </Text>
        <Text style={[theme.typography.textStyles.tableCell, { flex: 0.9 }]}>
          {translated.pronunciation}
        </Text>
      </View>
    );
  };

  return (
    <Container backgroundColor={theme.colors.background.primary}>
      <View style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.text.primary,
        marginBottom: theme.spacing.vocabulary.header,
        paddingBottom: theme.spacing.vocabulary.header,
      }}>
        <Text style={[theme.typography.textStyles.tableHeader, { flex: 1.2 }]}>English</Text>
        <Text style={[theme.typography.textStyles.tableHeader, { flex: 1.2 }]}>{selectedLanguageLabel}</Text>
        <Text style={[theme.typography.textStyles.tableHeader, { flex: 0.9 }]}>Pronounce</Text>
      </View>

      {filteredVocab.length === 0 ? (
        <Text style={{
          color: theme.colors.text.muted,
          textAlign: 'center',
          marginTop: theme.spacing.lg,
          fontStyle: 'italic',
        }}>
          No words found for this language and category.
        </Text>
      ) : (
        <FlatList
          data={filteredVocab}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.english}-${index}`}
        />
      )}
    </Container>
  );
}
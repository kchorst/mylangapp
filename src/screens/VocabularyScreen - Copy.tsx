import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import vocabulary from '../data/vocabulary.json';

const VocabularyScreen = ({ route }: any) => {
  const { selectedLanguage, selectedCategory } = route.params;

  // Filter words by category
  const filteredWords = vocabulary.filter((item) => item.category === selectedCategory);

  const renderItem = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.english}</Text>
      <Text style={styles.cell}>{item[selectedLanguage.toLowerCase()] || '-'}</Text>
      <Text style={styles.cell}>{item.pronunciation}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedCategory} Vocabulary</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>English</Text>
        <Text style={styles.headerCell}>{selectedLanguage}</Text>
        <Text style={styles.headerCell}>Pronunciation</Text>
      </View>
      <FlatList
        data={filteredWords}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default VocabularyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000010',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    paddingBottom: 5,
  },
  headerCell: {
    flex: 1,
    color: '#ccc',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import languages from '../data/languages.json';
import { useNavigation } from '@react-navigation/native';

const LanguageScreen = () => {
  const navigation = useNavigation();

  const handleLanguageSelect = (code: string) => {
    navigation.navigate('CategoryScreen', { selectedLanguage: code });
  };

  const colors = [
    '#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE',
    '#448AFF', '#18FFFF', '#69F0AE', '#FFFF00'
  ];

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[index % colors.length] }]}
      onPress={() => handleLanguageSelect(item.code)}
    >
      <Text style={styles.buttonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Language</Text>
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        contentContainerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 6,
    width: '100%',
  },
  buttonText: {
    color: 'black', // Better contrast on bright buttons
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default LanguageScreen;

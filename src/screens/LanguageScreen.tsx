import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LanguageScreenNavigationProp } from '../types/navigation';
import { Language } from '../types/language';
import { theme } from '../themes';
import Container from '../components/Container/Container';
import Button from '../components/Button/Button';
import languages from '../data/languages.json';

const LanguageScreen = () => {
  const navigation = useNavigation<LanguageScreenNavigationProp>();

  const handleLanguageSelect = (code: string) => {
    navigation.navigate('CategoryScreen', { selectedLanguage: code });
  };

  const renderItem = ({ item, index }: { item: Language; index: number }) => (
    <Button
      title={item.label}
      onPress={() => handleLanguageSelect(item.code)}
      backgroundColor={theme.colors.buttons[index % theme.colors.buttons.length]}
      textColor={theme.colors.text.secondary}
      style={{
        paddingVertical: 14,
        marginVertical: 5,
      }}
    />
  );

  return (
    <Container
      backgroundColor={theme.colors.background.primary}
      paddingVertical={16}
    >
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        scrollEnabled={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />
    </Container>
  );
};

export default LanguageScreen;

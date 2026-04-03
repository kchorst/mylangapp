// Navigation type definitions for MyLangApp
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  LanguageScreen: undefined;
  CategoryScreen: { selectedLanguage: string };
  VocabularyScreen: { 
    selectedLanguage: string;
    selectedCategory: string;
  };
};

export type LanguageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LanguageScreen'
>;

export type CategoryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CategoryScreen'
>;

export type VocabularyScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VocabularyScreen'
>;

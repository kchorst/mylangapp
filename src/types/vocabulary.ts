// Vocabulary type definitions for MyLangApp

export interface Translation {
  word: string;
  pronunciation: string;
}

export interface VocabularyItem {
  category: string;
  english: string;
  translations: {
    [language: string]: Translation;
  };
}

export interface Category {
  id: string;
  label: string;
  examples: string[];
}

export interface VocabularyFilter {
  category: string;
  language: string;
}

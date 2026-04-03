// Vocabulary service for data management and validation
import { VocabularyItem, Category, VocabularyFilter } from '../types/vocabulary';
import { SupportedLanguage, LANGUAGE_KEY_MAP } from '../types/language';
import vocabularyData from '../data/vocabulary-full.json';
import categoriesData from '../data/categories.json';

// Type guards for JSON data
const isVocabularyItem = (item: any): item is VocabularyItem => {
  return (
    item &&
    typeof item.category === 'string' &&
    typeof item.english === 'string' &&
    typeof item.translations === 'object' &&
    item.translations !== null
  );
};

const isCategory = (item: any): item is Category => {
  return (
    item &&
    typeof item.id === 'string' &&
    typeof item.label === 'string' &&
    Array.isArray(item.examples) &&
    item.examples.every((example: any) => typeof example === 'string')
  );
};

// Validate and cast JSON data
const validatedVocabulary: VocabularyItem[] = (vocabularyData as any[]).filter(isVocabularyItem);
const validatedCategories: Category[] = (categoriesData as any[]).filter(isCategory);

export class VocabularyService {
  private static instance: VocabularyService;
  private vocabularyCache: VocabularyItem[] = validatedVocabulary;
  private categoriesCache: Category[] = validatedCategories;

  static getInstance(): VocabularyService {
    if (!VocabularyService.instance) {
      VocabularyService.instance = new VocabularyService();
    }
    return VocabularyService.instance;
  }

  // Get all categories
  getCategories(): Category[] {
    return this.categoriesCache;
  }

  // Filter vocabulary by category and language
  filterVocabulary(filter: VocabularyFilter): VocabularyItem[] {
    const normalizedLang = LANGUAGE_KEY_MAP[filter.language] || filter.language.toLowerCase();
    const normalizedCategory = filter.category.trim().toLowerCase();

    return this.vocabularyCache.filter((item) => {
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
  }

  // Get vocabulary by category
  getVocabularyByCategory(categoryId: string): VocabularyItem[] {
    return this.vocabularyCache.filter(
      item => item.category.toLowerCase() === categoryId.toLowerCase()
    );
  }

  // Get translation for a specific word
  getTranslation(
    englishWord: string, 
    targetLanguage: SupportedLanguage
  ): { word: string; pronunciation: string } | null {
    const item = this.vocabularyCache.find(
      vocab => vocab.english.toLowerCase() === englishWord.toLowerCase()
    );

    if (!item) return null;

    if (targetLanguage === 'english') {
      return { word: item.english, pronunciation: '' };
    }

    const translation = item.translations[targetLanguage];
    return translation || null;
  }

  // Search vocabulary by English word
  searchByEnglish(query: string): VocabularyItem[] {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return [];

    return this.vocabularyCache.filter(item =>
      item.english.toLowerCase().includes(normalizedQuery)
    );
  }

  // Get statistics about the vocabulary data
  getStatistics() {
    const stats = {
      totalWords: this.vocabularyCache.length,
      totalCategories: this.categoriesCache.length,
      languages: new Set<string>(),
      wordsPerCategory: {} as Record<string, number>,
    };

    this.vocabularyCache.forEach(item => {
      // Count languages
      Object.keys(item.translations).forEach(lang => {
        stats.languages.add(lang);
      });

      // Count words per category
      const category = item.category;
      stats.wordsPerCategory[category] = (stats.wordsPerCategory[category] || 0) + 1;
    });

    return {
      ...stats,
      languages: Array.from(stats.languages),
    };
  }
}

export default VocabularyService;

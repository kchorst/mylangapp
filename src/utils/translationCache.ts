import { SupportedLang } from './translate';

type Translation = {
  word: string;
  pronunciation: string;
};

const translationCache: Record<string, Translation> = {};

/**
 * Try to get cached translation if exists
 */
export function getCachedTranslation(
  lang: SupportedLang,
  englishWord: string,
): Translation | undefined {
  const key = `${lang}_${englishWord.toLowerCase()}`;
  return translationCache[key];
}

/**
 * Cache a translation for later use
 */
export function setCachedTranslation(
  lang: SupportedLang,
  englishWord: string,
  translation: Translation,
): void {
  const key = `${lang}_${englishWord.toLowerCase()}`;
  translationCache[key] = translation;
}

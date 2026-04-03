// Language type definitions for MyLangApp

export interface Language {
  code: string;
  label: string;
}

export interface LanguageMap {
  [key: string]: string;
}

export type SupportedLanguage = 
  | 'english'
  | 'armenian'
  | 'russian'
  | 'japanese'
  | 'georgian'
  | 'chinese'
  | 'french'
  | 'spanish'
  | 'kinyarwanda';

export const LANGUAGE_KEY_MAP: LanguageMap = {
  Arm: 'armenian',
  Armenian: 'armenian',
  Geo: 'georgian',
  Georgian: 'georgian',
  Rus: 'russian',
  Russian: 'russian',
  Jpn: 'japanese',
  Japanese: 'japanese',
  Chn: 'chinese',
  Chinese: 'chinese',
  Fra: 'french',
  French: 'french',
  Spa: 'spanish',
  Spanish: 'spanish',
  Krw: 'kinyarwanda',
  Kinyarwanda: 'kinyarwanda',
};

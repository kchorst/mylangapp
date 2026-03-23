export type SupportedLang =
  | 'english'
  | 'armenian'
  | 'russian'
  | 'japanese'
  | 'georgian'
  | 'chinese'
  | 'french'
  | 'spanish'
  | 'kinyarwanda';

const langMap: { [key in Exclude<SupportedLang, 'english'>]: string } = {
  armenian: 'hy',
  russian: 'ru',
  japanese: 'ja',
  georgian: 'ka',
  chinese: 'zh',
  french: 'fr',
  spanish: 'es',
  kinyarwanda: 'rw',
};

export async function translateWithLibre(
  text: string,
  targetLang: SupportedLang,
): Promise<{ word: string; pronunciation: string }> {
  if (targetLang === 'english') {
    return {
      word: text,
      pronunciation: text,
    };
  }

  const response = await fetch('https://libretranslate.com/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: text,
      source: 'en',
      target: langMap[targetLang],
      format: 'text',
    }),
  });

  if (!response.ok) {
    throw new Error(`Translation failed`);
  }

  const data = await response.json();

  return {
    word: data.translatedText,
    pronunciation: data.translatedText, // LibreTranslate does not return phonetics
  };
}

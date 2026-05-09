import { useMemo, useState } from 'react';

const languageOptions = [
  { label: 'French → English', value: 'french-english', source: 'French' },
  { label: 'Spanish → English', value: 'spanish-english', source: 'Spanish' },
  { label: 'Arabic → English', value: 'arabic-english', source: 'Arabic' },
  { label: 'Dutch → English', value: 'dutch-english', source: 'Dutch' },
  { label: 'German → English', value: 'german-english', source: 'German' },
  { label: 'Other Language → English', value: 'other-english', source: 'Other' }
];

function mockTranslate(text: string, source: string) {
  if (!text.trim()) return '';

  const normalized = text.trim().toLowerCase();

  if (source === 'french-english') {
    if (normalized.includes('bonjour')) return text.replace(/bonjour/gi, 'Hello');
    if (normalized.includes('merci')) return text.replace(/merci/gi, 'Thank you');
  }

  if (source === 'spanish-english') {
    if (normalized.includes('hola')) return text.replace(/hola/gi, 'Hello');
    if (normalized.includes('gracias')) return text.replace(/gracias/gi, 'Thank you');
  }

  if (source === 'arabic-english') {
    if (normalized.includes('مرحبا')) return text.replace(/مرحبا/gi, 'Hello');
    if (normalized.includes('شكرا')) return text.replace(/شكرا/gi, 'Thank you');
  }

  if (source === 'dutch-english') {
    if (normalized.includes('hallo')) return text.replace(/hallo/gi, 'Hello');
    if (normalized.includes('dank')) return text.replace(/dank/gi, 'Thank you');
  }

  if (source === 'german-english') {
    if (normalized.includes('hallo')) return text.replace(/hallo/gi, 'Hello');
    if (normalized.includes('danke')) return text.replace(/danke/gi, 'Thank you');
  }

  return `English translation: ${text}`;
}

export function LanguagePairTranslator() {
  const [languagePair, setLanguagePair] = useState(languageOptions[0].value);
  const [sourceText, setSourceText] = useState('');

  const translatedText = useMemo(
    () => mockTranslate(sourceText, languagePair),
    [sourceText, languagePair]
  );

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(280px,_1fr)_minmax(320px,_1.6fr)] items-end mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[#151249]/70 font-semibold mb-2">Select Language</p>
          <h3 className="text-3xl font-bold text-[#151249]">Choose a language pair and type your content</h3>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Select the source language pair from the dropdown and enter your text in the input area next to it.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <label className="block text-sm font-semibold text-[#151249] mb-2">Language pair</label>
            <select
              value={languagePair}
              onChange={(event) => setLanguagePair(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 px-4 py-4 text-base text-[#151249] focus:border-yellow-400 focus:outline-none"
            >
              <option value="">Choose language pair</option>
              <option value="english-arabic">English → Arabic</option>
              <option value="arabic-english">Arabic → English</option>
              <option value="english-french">English → French</option>
              <option value="english-spanish">English → Spanish</option>
              <option value="english-chinese">English → Chinese</option>
              <option value="other-english">Other Language Pair</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#151249] mb-2">Enter your text</label>
            <textarea
              rows={4}
              value={sourceText}
              onChange={(event) => setSourceText(event.target.value)}
              placeholder="Type content here..."
              className="w-full rounded-3xl border border-gray-200 px-4 py-4 text-base text-gray-700 focus:border-yellow-400 focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">English output</p>
            <p className="text-xs text-gray-400">Auto-generated preview based on the selected language pair.</p>
          </div>
          <span className="text-sm font-semibold text-yellow-600">{languagePair ? languageOptions.find((option) => option.value === languagePair)?.label : 'No pair selected'}</span>
        </div>
        <div className="min-h-[180px] rounded-3xl border border-dashed border-gray-200 bg-white p-5 text-base text-gray-700 whitespace-pre-wrap">
          {translatedText || 'Translation will appear here once you type content and choose a pair.'}
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export const useHighlightKeywords = (
  text: string,
  keywords: string[],
): React.ReactNode[] => {
  const keywordTrim = keywords.map((keyword) => keyword.trim()).join('|');
  const regex = new RegExp(`(${keywordTrim})`, 'gi');
  const parts = text.split(regex);
  const highlighted = parts.map((part, i) =>
    i % 2 === 0 ? part : <mark key={i}>{part}</mark>,
  );
  return highlighted;
};

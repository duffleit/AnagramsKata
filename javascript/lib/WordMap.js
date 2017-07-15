class WordMap {
  constructor(wordSet) {
    this.map = WordMap.initialize(wordSet);
  }

  getSetOfAnagrams(word) {
    const wordKey = WordMap.getAlphabeticalOrderedString(word);

    const anagrams = this.map.has(wordKey)
      ? this.map.get(wordKey).filter(w => w !== word)
      : [];

    return new Set(anagrams);
  }

  static initialize(wordSet) {
    const wordMap = new Map();

    wordSet.forEach((word) => {
      const wordKey = WordMap.getAlphabeticalOrderedString(word);

      if (wordMap.has(wordKey)) {
        wordMap.get(wordKey).push(word);
      } else {
        wordMap.set(wordKey, [word]);
      }
    });

    return wordMap;
  }

  static getAlphabeticalOrderedString(input) {
    return input.split('').sort().join('');
  }
}

module.exports = WordMap;

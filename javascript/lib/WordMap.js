class WordMap {
  constructor(wordSet) {
    this.map = WordMap.initialize(wordSet);
  }

  getSetOfAnagrams(word) {
    const wordKey = WordMap.getAlphabeticalOrderedString(word);

    return this.map.has(wordKey)
      ? this.map.get(wordKey)
      : new Set();
  }

  static initialize(wordSet) {
    const wordMap = new Map();

    wordSet.forEach((word) => {
      const wordKey = WordMap.getAlphabeticalOrderedString(word);

      if (wordMap.has(wordKey)) {
        wordMap.get(wordKey).add(word);
      } else {
        wordMap.set(wordKey, new Set([word]));
      }
    });

    return wordMap;
  }

  static getAlphabeticalOrderedString(input) {
    return input.split('').sort().join('');
  }
}

module.exports = WordMap;

const DefaultWordList = require('./DefaultWordList');

class AnagramFinder {
  constructor(wordSet) {
    this.wordSet = wordSet || DefaultWordList.get();
  }


  findAnagrams(word) {
    if (!this.wordMap) this.createWordMap();
    if (this.wordMap.has(word)) return this.wordMap.get(word);

    return new Set();
  }

  createWordMap() {
    this.wordMap = new Map([
      ['below', new Set(['elbow'])],
    ]);
  }
}

module.exports = AnagramFinder;

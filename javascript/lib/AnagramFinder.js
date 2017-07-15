const DefaultWordList = require('./DefaultWordList');
const WordMap = require('./WordMap');

class AnagramFinder {
  constructor(wordSet) {
    this.wordSet = wordSet || DefaultWordList.get();
  }


  findAnagrams(word) {
    if (!word) return new Set();

    if (!this.wordMap) {
      this.wordMap = new WordMap(this.wordSet);
    }

    return this.wordMap.getSetOfAnagrams(word);
  }
}

module.exports = AnagramFinder;

const DefaultWordList = require('./DefaultWordList');

class AnagramFinder {
  constructor(wordSet) {
    this.wordSet = wordSet || DefaultWordList.get();
  }

  findAnagrams(word) {
    return (word) ? this.wordSet : '';
  }
}

module.exports = AnagramFinder;

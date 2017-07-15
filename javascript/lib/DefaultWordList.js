const fs = require('fs');
const path = require('path');

class DefaultWordList {
  static get() {
    const fileLineBreaks = '\n';
    const wordListPath = path.join(__dirname, 'wordlist.txt');
    const fileEncoding = 'utf8';

    const words = fs
      .readFileSync(wordListPath, fileEncoding)
      .split(fileLineBreaks);

    return new Set(words);
  }
}

module.exports = DefaultWordList;

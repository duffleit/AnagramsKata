const expect = require('chai').expect;

const AnagramFinder = require('../lib/AnagramFinder');

describe('AnagramFinder', () => {
  let anagramFinder;

  beforeEach(() => {
    anagramFinder = new AnagramFinder();
  });

  describe('.findAnagrams()', () => {
    it('should return empty string when no or an empty word is given', () => {
      expect(anagramFinder.findAnagrams(null)).to.equal('');
      expect(anagramFinder.findAnagrams(undefined)).to.equal('');
      expect(anagramFinder.findAnagrams('')).to.equal('');
    });
  });
});

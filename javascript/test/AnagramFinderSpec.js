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

    describe('the wordlist only contains: "elbow"', () => {
      beforeEach(() => {
        const wordSet = new Set().add('elbow');
        anagramFinder = new AnagramFinder(wordSet);
      });

      it('when an anagram for "below" is requested, then "elbwo" should be returned', () => {
        expect(anagramFinder.findAnagrams('below')).to.have.property('size', 1);
        expect(anagramFinder.findAnagrams('below')).to.include('elbow');
      });
    });
  });
});

const expect = require('chai').expect;

const AnagramFinder = require('../lib/AnagramFinder');

describe('AnagramFinder', () => {
  let anagramFinder;

  beforeEach(() => {
    anagramFinder = new AnagramFinder();
  });

  describe('.findAnagrams()', () => {
    it('should return empty string when no or an empty word is given', () => {
      expect(anagramFinder.findAnagrams(null)).to.be.a('Set').and.have.property('size', 0);
      expect(anagramFinder.findAnagrams(undefined)).to.be.a('Set').and.have.property('size', 0);
      expect(anagramFinder.findAnagrams('')).to.be.a('Set').and.have.property('size', 0);
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

      it('when an anagram for "bello" is requested, nothing gets returned', () => {
        expect(anagramFinder.findAnagrams('bello')).to.have.property('size', 0);
      });
    });
  });
});

const expect = require('chai').expect;

const AnagramFinder = require('../lib/AnagramFinder');

describe('AnagramFinder', () => {
  describe('.findAnagrams()', () => {
    describe('following wordList is given: ["tesla"]', () => {
      let anagramFinder;

      beforeEach(() => {
        const wordSet = new Set().add('tesla');
        anagramFinder = new AnagramFinder(wordSet);
      });

      it('should return empty string when no or an empty word is given', () => {
        expect(anagramFinder.findAnagrams(null)).to.be.a('Set').and.have.property('size', 0);
        expect(anagramFinder.findAnagrams(undefined)).to.be.a('Set').and.have.property('size', 0);
        expect(anagramFinder.findAnagrams('')).to.be.a('Set').and.have.property('size', 0);
      });

      it('when an anagram for "steal" is requested, then "tesla" should be returned', () => {
        expect(anagramFinder.findAnagrams('steal')).to.have.property('size', 1);
        expect(anagramFinder.findAnagrams('steal')).to.include('tesla');
      });

      it('when an anagram for "steak" is requested, nothing gets returned', () => {
        expect(anagramFinder.findAnagrams('steak')).to.have.property('size', 0);
      });

      it('when an anagram for "least" is requested, then "tesla" should be returned', () => {
        expect(anagramFinder.findAnagrams('least')).to.have.property('size', 1);
        expect(anagramFinder.findAnagrams('least')).to.include('tesla');
      });

      });
    });
  });
});

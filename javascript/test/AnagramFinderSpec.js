const expect = require('chai').expect;

const AnagramFinder = require('../lib/AnagramFinder');

describe('AnagramFinder', () => {
  describe('.findAnagrams()', () => {
    let anagramFinder;

    describe('a wordList with a single word is given: ["tesla"]', () => {
      beforeEach(() => {
        const wordSet = new Set(['tesla']);
        anagramFinder = new AnagramFinder(wordSet);
      });

      it('should return empty string when no or an empty set gets returned', () => {
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

      it('when a anagram for "tesla" is requested, the "tesla" won\'t be returned', () => {
        expect(anagramFinder.findAnagrams('tesla')).to.have.property('size', 0);
      });
    });
    describe('a wordList with : ["alerting, integral, relating, triangle"]', () => {
      beforeEach(() => {
        const wordSet = new Set(['alerting', 'integral', 'relating', 'triangle']);
        anagramFinder = new AnagramFinder(wordSet);
      });

      it('when an anagram for "alerting" is requested, then ["integral", "relating", "triangle"] should be returned', () => {
        expect(anagramFinder.findAnagrams('alerting')).to.have.property('size', 3);
        expect(Array.from(anagramFinder.findAnagrams('alerting'))).to.include.members(['integral', 'relating', 'triangle']);
      });

      it('when an anagram for "notmatching" is requesting an empty set gets returned', () => {
        expect(anagramFinder.findAnagrams('notmatching')).to.have.property('size', 0);
      });
    });
  });
});

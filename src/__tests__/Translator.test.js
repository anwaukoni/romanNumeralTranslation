import React from 'react';
import ReactDOM from 'react-dom';
import * as Translator from '../Translator';

describe('Given the Translator', () => {
  describe('when translating a number to Roman Numerals', () => {
    it('should correctly translate translate numbers', () => {
      expect(Translator.translateNumber(1)).toEqual('I');
      expect(Translator.translateNumber(50)).toEqual('L');
      expect(Translator.translateNumber(299)).toEqual('CCXCIX');
      expect(Translator.translateNumber(999)).toEqual('CMXCIX');
      expect(Translator.translateNumber(2999)).toEqual('MMCMXCIX');
      expect(Translator.translateNumber(2019)).toEqual('MMXIX');
    });
    it('should be resilient to numbers outside the range of 1 to 3999', () => {
      expect(Translator.translateNumber(-1)).toEqual('Please insert a valid number between 1 and 3999');
      expect(Translator.translateNumber(4000)).toEqual('Please insert a valid number between 1 and 3999');
    });
    it('should be resilient to arguments that are NOT of type "number"', () => {
      expect(Translator.translateNumber('')).toEqual('Please insert a number.')
      expect(Translator.translateNumber([5,6,7])).toEqual('Please insert a number.');
      expect(Translator.translateNumber({})).toEqual('Please insert a number.')
    });
  });
  describe('when translating Roman Numerals to a number', () => {
    it('should correctly translate Roman Numerals', () => {
      expect(Translator.translateRomanNumeral('I')).toEqual(1);
      expect(Translator.translateRomanNumeral('IV')).toEqual(4);
      expect(Translator.translateRomanNumeral('IX')).toEqual(9);
      expect(Translator.translateRomanNumeral('XI')).toEqual(11);
      expect(Translator.translateRomanNumeral('CMXCIX')).toEqual(999);
      expect(Translator.translateRomanNumeral('MMXIX')).toEqual(2019);
      expect(Translator.translateRomanNumeral('MMCMXCIX')).toEqual(2999);
    });
    it('should be resilient to strings outside the range of "I" and "MMMCMXCIX"', () => {
      expect(Translator.translateRomanNumeral('VMM')).toEqual('Please insert a valid Roman Numeral between I and MMMCMXCIX');
      expect(Translator.translateRomanNumeral('MMMM')).toEqual('Please insert a valid Roman Numeral between I and MMMCMXCIX');
    });
    it('should be resilient to strings that are not valid Roman Numerals', () => {
      expect(Translator.translateRomanNumeral('horse')).toEqual('Please insert a valid Roman Numeral between I and MMMCMXCIX');
      expect(Translator.translateRomanNumeral('cat')).toEqual('Please insert a valid Roman Numeral between I and MMMCMXCIX');
    });
    it('should be resilient to argument that are NOT of type "string"', () => {
      expect(Translator.translateRomanNumeral(1)).toEqual('Please insert a string')
      expect(Translator.translateRomanNumeral([5,6,7])).toEqual('Please insert a string');
      expect(Translator.translateRomanNumeral({})).toEqual('Please insert a string')
    });
  });
});
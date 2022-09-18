import { integerToRomanConverter } from '.';

describe('integerToRomanConverter', () => {
  it('should throw an error if not a number is provided', () => {
    // @ts-ignore for testing purposes
    expect(() => integerToRomanConverter('string')).toThrow(
      'The input should be a number'
    );
    // @ts-ignore for testing purposes
    expect(() => integerToRomanConverter(null)).toThrow(
      'The input should be a number'
    );
    // @ts-ignore for testing purposes
    expect(() => integerToRomanConverter(NaN)).toThrow(
      'The input should be a number'
    );
    // @ts-ignore for testing purposes
    expect(() => integerToRomanConverter(undefined)).toThrow(
      'The input should be a number'
    );
    // @ts-ignore for testing purposes
    expect(() => integerToRomanConverter()).toThrow(
      'The input should be a number'
    );
    // @ts-ignore for testing purposes
    expect(() => integerToRomanConverter([])).toThrow(
      'The input should be a number'
    );
    // @ts-ignore for testing purposes
    expect(() => integerToRomanConverter({})).toThrow(
      'The input should be a number'
    );
    // @ts-ignore for testing purposes
    expect(() => integerToRomanConverter(new Date())).toThrow(
      'The input should be a number'
    );
  });

  it('should throw an error if not an integer is provided', () => {
    expect(() => integerToRomanConverter(2.5)).toThrow(
      'The input has to be an integer'
    );
  });

  it('should throw an error if the provided integer is outside of range from 1 to 1000', () => {
    expect(() => integerToRomanConverter(0)).toThrow(
      'The input can accept only numbers from 1 to 1000 inclusively.'
    );
    expect(() => integerToRomanConverter(2000)).toThrow(
      'The input can accept only numbers from 1 to 1000 inclusively.'
    );
    expect(() => integerToRomanConverter(-1000)).toThrow(
      'The input can accept only numbers from 1 to 1000 inclusively.'
    );
    expect(() => integerToRomanConverter(1001)).toThrow(
      'The input can accept only numbers from 1 to 1000 inclusively.'
    );
  });

  it('should convert to correct roman numbers', () => {
    expect(integerToRomanConverter(1)).toBe('I');
    expect(integerToRomanConverter(3)).toBe('III');
    expect(integerToRomanConverter(14)).toBe('XIV');
    expect(integerToRomanConverter(845)).toBe('DCCCXLV');
    expect(integerToRomanConverter(1000)).toBe('M');
  });
});

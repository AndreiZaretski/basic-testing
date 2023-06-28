// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const input = { a: 2, b: 3, action: Action.Add };
    const expected = 5;
    const actual = simpleCalculator(input);
    expect(actual).toBeCloseTo(expected);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const input = { a: 67, b: 33, action: Action.Subtract };
    const expected = 34;
    const actual = simpleCalculator(input);
    expect(actual).toBeCloseTo(expected);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const input = { a: 0.3, b: 3, action: Action.Multiply };
    const expected = 0.9;
    const actual = simpleCalculator(input);
    expect(actual).toBeCloseTo(expected);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const input = { a: 0.3, b: 3, action: Action.Divide };
    const expected = 0.1;
    const actual = simpleCalculator(input);
    expect(actual).toBeCloseTo(expected);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const input = { a: 3, b: 3, action: Action.Exponentiate };
    const expected = 27;
    const actual = simpleCalculator(input);
    expect(actual).toBeCloseTo(expected);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const input = { a: 3, b: 3, action: 'some action' };
    const actual = simpleCalculator(input);
    expect(actual).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const input = { a: 'number', b: '4', action: Action.Add };
    const actual = simpleCalculator(input);
    expect(actual).toBeNull();
  });
});

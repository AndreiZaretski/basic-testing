// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },

  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },

  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },

  { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 3, b: 2, action: Action.Divide, expected: 1.5 },

  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },

  { a: 1, b: 2, action: 'Some Action', expected: null },
  { a: 2, b: 2, action: undefined, expected: null },
  { a: 3, b: 2, action: NaN, expected: null },

  { a: '1', b: '2', action: Action.Add, expected: null },
  { a: NaN, b: '2', action: Action.Divide, expected: null },
  { a: undefined, b: '2', action: Action.Multiply, expected: null },
  // continue cases for other actions
];

describe('simpleCalculator', () => {
  // Consider to use Jest table tests API to test all cases above

  test.each(testCases.filter((el) => typeof el.expected === 'number'))(
    'do math %o',
    (testCase) => {
      const { a, b, action, expected } = testCase;
      const result = simpleCalculator({ a, b, action });
      if (typeof expected === 'number') {
        expect(result).toBeCloseTo(expected);
      }
    },
  );

  test.each(testCases.filter((el) => el.expected === null))(
    'invalid action or arguments %o',
    (testCase) => {
      const { a, b, action } = testCase;
      const result = simpleCalculator({ a, b, action });
      expect(result).toBeNull();
    },
  );
});

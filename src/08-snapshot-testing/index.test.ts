// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // Write your test here

    const elements = [1, 2];
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: null,
          next: null,
        },
      },
    };

    const actual = generateLinkedList(elements);

    expect(actual).toStrictEqual(expected);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here

    const elements = [3, 2, 1];

    const actual = generateLinkedList(elements);

    expect(actual).toMatchSnapshot();
  });
});

import { sum } from '@src/utils/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(sum(1, 2, 3)).toBe(6);
});

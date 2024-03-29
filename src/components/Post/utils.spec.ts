import { formatNumber, formatDate } from './utils';

describe('formatNumber', () => {
  test('0 will be formatted to 0', () => {
    expect(formatNumber(0)).toBe('0');
  });

  test('999 will be formatted to 999', () => {
    expect(formatNumber(999)).toBe('999');
  });

  test('1000 will be formatted to 1k', () => {
    expect(formatNumber(1000)).toBe('1k');
  });

  test('1500 will be formatted to 1.5k', () => {
    expect(formatNumber(1500)).toBe('1.5k');
  });

  test('15091 will be formatted to 15k', () => {
    expect(formatNumber(15091)).toBe('15k');
  });

  test('999999 will be formatted to 999.9k', () => {
    expect(formatNumber(999999)).toBe('999.9k');
  });

  test('9999999 will be formatted to 9.9M', () => {
    expect(formatNumber(9999999)).toBe('9.9M');
  });

  test('9999999999 will be formatted to 9.9B', () => {
    expect(formatNumber(9999999999)).toBe('9.9B');
  });
});

// TODO - add test cases
describe('formatDate', () => {
  test('date will be formatted to "2023-06-22"', () => {
    const timestamp = 1687406429;

    expect(formatDate(timestamp)).toBe('2023-06-22');
  });

  test('date will be formatted to "2023-06-22"', () => {
    const timestamp = 1687406429000;

    expect(formatDate(timestamp)).toBe('2023-06-22');
  });

  test('date will be formatted to "2023-06-22"', () => {
    const timestamp = '2023-06-22';

    expect(formatDate(timestamp)).toBe('2023-06-22');
  });

  test('date will be formatted to "2023%06%22"', () => {
    const timestamp = '2023-06-22';
    const options = {
      infix: '%',
    };

    expect(formatDate(timestamp, options)).toBe('2023%06%22');
  });
});

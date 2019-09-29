/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('a')).toBe(false);
  expect(convertBytesToHuman({'a': 3})).toBe(false);
  expect(convertBytesToHuman([1, 3])).toBe(false);
  expect(convertBytesToHuman(false)).toBe(false);
  expect(convertBytesToHuman(true)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(2)).toBe('2 B');
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
  expect(convertBytesToHuman(2.0)).toBe('2 B');
  expect(convertBytesToHuman(23212)).toBe('22.67 KB');
  expect(convertBytesToHuman(31415926)).toBe('29.96 MB');
  expect(convertBytesToHuman(31415926)).toBe('29.96 MB');
  expect(convertBytesToHuman(293728518406)).toBe('273.56 GB');
});

test('Отсеивание отрицательных чисел', () => {
  expect(convertBytesToHuman(-2)).toBe(false);
  expect(convertBytesToHuman(-0.1)).toBe(false);
  expect(convertBytesToHuman(-2.3)).toBe(false);
  expect(convertBytesToHuman(-2.0)).toBe(false);
  expect(convertBytesToHuman(-23212)).toBe(false);
  expect(convertBytesToHuman(-3.1415926)).toBe(false);
});

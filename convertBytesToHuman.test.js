/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */


test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('1').toBe(false))
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(12).toBe(12))
  // ...
});

// другая группа проверок

const sum = require('../main/soma');

test('Soma 1 + 2 para igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//pruebas funcion dividir
test('divide 5 / 2 debe ser igual 2.5', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test('divide 10.5 / 3 debe ser igual 3.5', () => {
  expect(calculator.divide(10.5, 3)).toBe(3.5);
});

// test multiplicación
test('multiply 5 * 11 debe ser igual 55', () => {
  expect(calculator.multiply(5, 11)).toBe(55);
});

test('multiply 3.5 * 3 debe ser igual 10.5', () => {
  expect(calculator.multiply(3.5, 3)).toBe(10.5);
});
test('multiply 8 * 0 debe ser igual 0', () => {
  expect(calculator.multiply(8, 0)).toBe(0);
});


//test division por 0

test('divide 6 / 0 debe ser igual Error, no se puede dividir entre 0', () => {
  expect(calculator.divide(6, 0)).toBe("Error, no se puede dividir entre 0");
});

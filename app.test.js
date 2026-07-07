const { add, greet } = require('./app');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('greet returns correct message', () => {
  expect(greet('Claude')).toBe('Hello, Claude! Welcome to GitHub Actions.');
});

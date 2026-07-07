function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}! Welcome to GitHub Actions.`;
}

module.exports = { add, greet };

// If run directly: node app.js
if (require.main === module) {
  console.log(greet('World'));
  console.log('2 + 3 =', add(2, 3));
}

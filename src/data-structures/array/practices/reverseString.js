// Solution 1
const reverseString = (input) => {
  if (!input || typeof input !== 'string') return 'Input is not string';

  if (input.length < 2) return input;

  const backwards = [];

  for (let index = input.length - 1; index > 0; index--) {
    const char = input[index];
    backwards.push(char);
  }
  return backwards.join('');
}

// Solution 2: Using built-in function
const reverseString2 = (input) => {
  return [...input].reverse().join('');
}

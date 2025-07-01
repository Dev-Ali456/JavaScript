// Classic FizzBuzz (1-100)
for (let i = 1; i <= 15; i++) { // Reduced range for demo or testing to understand it better
  var output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}

// Alternative (Ternary)
for (let j = 1; j <= 15; j++) {
  console.log(
    (j % 3 ? '' : 'Fizz') + (j % 5 ? '' : 'Buzz') || j
  );
}

// Concise Arrow Function
let fizzBuzz = num => {
  var result = (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz');
  return result || num;
};
for (let k = 1; k <= 15; k++) console.log(fizzBuzz(k));

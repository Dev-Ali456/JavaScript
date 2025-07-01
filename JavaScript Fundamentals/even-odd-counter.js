// Program 1
let min = 1;
let max = 10;
var evenCount = 0;
var oddCount = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) evenCount++;
  else oddCount++;
}

console.log(`Even numbers: ${evenCount}, Odd numbers: ${oddCount}`);

// Program 2 (Dynamic Input)
let numbers = [2, 5, 8, 3, 6];
var evens = 0;
var odds = 0;

for (let num of numbers) {
  num % 2 === 0 ? evens++ : odds++;
}

console.log(`Array analysis - Evens: ${evens}, Odds: ${odds}`);

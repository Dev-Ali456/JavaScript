// Program 1 (Basic)
let num = 7;
var isPrime = true;

if (num <= 1) isPrime = false;
else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(`${num} is ${isPrime ? 'prime' : 'not prime'}`);

// Program 2 (Optimized)
let checkNum = 29;
var primeFlag = true;

for (let i = 2, limit = Math.sqrt(checkNum); i <= limit; i++) {
  if (checkNum % i === 0) {
    primeFlag = false;
    break;
  }
}

console.log(`${checkNum}'s primality: ${primeFlag}`);

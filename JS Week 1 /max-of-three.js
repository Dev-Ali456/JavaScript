// Method 1 (If-else chain)
let a = 5, b = 9, c = 2;
var max;

if (a >= b && a >= c) max = a;
else if (b >= a && b >= c) max = b;
else max = c;

console.log(`Maximum: ${max}`);

// Method 2 (Math.max)
let x = -3, y = 0, z = 7;
var highest = Math.max(x, y, z);
console.log(`Highest: ${highest}`);

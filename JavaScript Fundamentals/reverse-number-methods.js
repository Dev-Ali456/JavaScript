// Method 1 (Mathematical)
let num = 1234;
var reversed = 0;
let original = num;

while (num > 0) {
  reversed = (reversed * 10) + (num % 10);
  num = Math.floor(num / 10);
}

console.log(`${original} reversed: ${reversed}`);

// Method 2 (String Conversion)
let value = 5601;
var revStr = Number(String(value).split('').reverse().join(''));
console.log(`${value} → ${revStr}`);

// Method 3 (Recursive)
var reverse = function(n, reversed = 0) {
  if (n === 0) return reversed;
  return reverse(Math.floor(n / 10), reversed * 10 + n % 10);
};
console.log(`Recursive reverse of 724: ${reverse(724)}`);

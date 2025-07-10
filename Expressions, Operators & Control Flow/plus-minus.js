/**
 * Plus Minus
 * ----------
 * Computes and prints ratios of positive, negative, and zero values.
 */
function plusMinus(arr) {
  const n = arr.length;
  let pos = 0, neg = 0, zero = 0;
  for (let v of arr) {
    if (v > 0) pos++;
    else if (v < 0) neg++;
    else zero++;
  }
  // Print each ratio with 6 decimal places
  console.log((pos / n).toFixed(6));
  console.log((neg / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}

// Example usage:
plusMinus([-4, 3, -9, 0, 4, 1]);
// 0.500000
// 0.333333
// 0.166667

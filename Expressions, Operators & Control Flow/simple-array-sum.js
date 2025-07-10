/**
 * Simple Array Sum
 * ----------------
 * Sums all elements of an integer array.
 */
function simpleArraySum(ar) {
  let sum = 0;
  // Loop through each element and accumulate
  for (let num of ar) {
    sum += num;
  }
  return sum;
}

// Example usage:
console.log(simpleArraySum([1, 2, 3, 4, 10, 11])); // 31

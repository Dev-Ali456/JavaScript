/**
 * Compare the Triplets
 * --------------------
 * Compares two arrays of length 3, awarding a point to the larger value at each index.
 */
function compareTriplets(a, b) {
  let alice = 0, bob = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) alice++;
    else if (a[i] < b[i]) bob++;
  }
  return [alice, bob];
}

// Example usage:
console.log(compareTriplets([5,6,7], [3,6,10])); // [1,1]

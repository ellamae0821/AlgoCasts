// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const result = [0, 1];
//trick: first 2 numbers can't be generated through a forr loop
  for (let i=2; i<=n; i++){
    const a = result[i - 1];
    // first loop: i = 2 , so a is the 2nd element as 1
    const b = result[i - 2];
    //first loop: b is 2 - 2 = 0, so b's the 1st element which is 0

    result.push(a + b);
  }
  return result[n];
}

module.exports = fib;

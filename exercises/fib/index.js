// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
/*
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
*/
//store the arguments of each function call along with th result. If the function os called again with the same arguments, return the precomputed result, rather than running the function again.

/*RECURSIVE


function fib(n){
  if(n < 2){
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
*/


function memoize(fn) {
  const cache = {};
  //cache as our storage area,
  return function (...args) {
  // ...args because we are unsure of how many arguments will this function be called with
    if(cache[args]){
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}
//

function slowFib(n){
  if(n < 2){
    return n;
  }
  return slowFib(n - 1) + slowFib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
// Program to Print the Fibonacci Sequence uoto certain number
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
// After that, the next term is defined as the sum of the previous two terms.

// take input from the user
const number = parseInt(prompt("Enter a positve number: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");
console.log(n1); // print 0
console.log(n2); // print 1

while (nextTerm <= number) {

  // print the next term
  console.log(nextTerm);
  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;
}

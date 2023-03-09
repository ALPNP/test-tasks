// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz". The solution should be recursive.

const multipleOf5 = (int) => !(int % 5) && "Buzz";
const multipleOf3 = (int) => !(int % 3) && "Fizz";
const fizzBuzz = (int) => (multipleOf3(int) || "") + (multipleOf5(int) || "");

function printNumbers(int) {
  console.log(fizzBuzz(int) || int);
  int++ && int <= 100 && printNumbers(int);
}

printNumbers(1);
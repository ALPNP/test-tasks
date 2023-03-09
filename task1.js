const multipleOf5 = (int) => !(int % 5) && "Buzz";
const multipleOf3 = (int) => !(int % 3) && "Fizz";
const fizzBuzz = (int) => (multipleOf3(int) || "") + (multipleOf5(int) || "");

function printNumbers(int) {
  console.log(fizzBuzz(int) || int);
  int++ && int <= 100 && printNumbers(int);
}

printNumbers(1);
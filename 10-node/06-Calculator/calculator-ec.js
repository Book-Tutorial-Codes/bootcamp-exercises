// node calculator.js add 1 2 ... and outputs 3
// node calculator.js subtract 5 2 ... and outputs 3
// node calculator.js multiply 3 2 ... and outputs 6
// node calculator.js divide 8 2 ... and outputs 4
// node calculator.js remainder 7 2... and outputs 1

var operator = process.argv[2];
var num1 = process.argv[3];
var num2 = process.argv[4];

switch (operator) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "multiply":
    console.log(num1 * num2);
    break;
  case "divide":
    console.log(num1 / num2);
    break;
  case "remainder":
    console.log(num1 % num2);
    break;
  case "exp":
    console.log(Math.pow(num1, num2));
    break;
  case "algebra":
    console.log("TBD"));
    break;
  default:
    console.log("Cheese");
}

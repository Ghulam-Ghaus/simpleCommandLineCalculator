import promptSync from "prompt-sync";
const prompt = promptSync();

function calc() {
  let value1: number = parseInt(prompt("Enter first Value: "));
  let Operator = prompt("Enter Operator to calculate: ");
  let value2: number = parseInt(prompt("Enter second Value:"));

  switch (Operator) {
    case "+":
      console.log(value1 + value2);
      break;
    case "-":
      console.log(value1 - value2);
      break;
    case "*":
      console.log(value1 * value2);
      break;
    case "/":
      if (value2 === 0) {
        console.log("infinty");
        break;
      }
      console.log(value1 / value2);
      break;
    default:
      console.log("infinty number likh o paiii");
  }
}
// Calculator Function End
calc(); // calling calc function

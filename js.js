var num1 = 5;
var num2 = 5;


mathOperation();
mathOperation(4,2);
mathOperation(num1, num2)

function mathOperation ( num1, num2){

console.log("\nVykonajú sa základne matematické operácie s cislami " + num1 + " a " + num2)
console.log("Vykonávam matematické operácie....")

let add = num1+num2;
let sub = num1-num2;
let multi = num1*num2;
let division = num1/num2;

console.log ( num1+ "+" + num2 + "=" + add)
console.log ( num1+ "-" + num2 + "=" + sub)
console.log ( num1+ "*" + num2 + "=" + multi)
console.log ( num1+ ":" + num2 + "=" + division)


}
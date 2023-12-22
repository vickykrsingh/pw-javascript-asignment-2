// 2. Calculator
// Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement 
// to perform the operation on the two num#ersQ
// The calculator function should"
// L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
// L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
// L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical 
// operation and store the result in a varia#le called resultP
// L If the operator is not one of the valid operators, log "Invalid operator" to the consoleQ


const num1 = 10;
const num2 = 20;
const operator = '/';

switch (operator){
    case '+':
        console.log(`Addition of ${num1} and ${num2} is ${num1+num2}`)
        break;
    case '-':
        console.log(`Subtraction of ${num1} and ${num2} is ${num1-num2}`)
        break;
    case '*':
        console.log(`Multiplication of ${num1} and ${num2} is ${num1*num2}`)
        break;
    case '/':
        console.log(`Division of ${num1} and ${num2} is ${num1/num2}`)
        break;
    default:
        console.log("Invalid operator.")
}

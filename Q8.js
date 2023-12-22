// 8. Invert right-angleW triangle pattern with asterisks

// Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of astrcisks
// with i rows.

// ******
// *****
// ****
// ***
// **
// *

let n = 6;
let string = "";
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
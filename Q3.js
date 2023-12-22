// 3. Color Mixer

// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to 
// determine the resulting color when the two colors are mixed. The program should print the resulting color 
// #ased on the following criteria"
// L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"
// L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"
// L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"
// L If any other com#ination of colors is input, the program should print "Invalid color com#ination"

const c1 = "blue";
const c2 = "yellow";
const mixedColor = c1+c2

switch(mixedColor){
    case "redblue":
        console.log("purple");
        break;
    case "redyellow":
        console.log("orange");
        break;
    case "blueyellow":
        console.log("green");
        break;
    default:
        console.log("Invalid color combination.")
}
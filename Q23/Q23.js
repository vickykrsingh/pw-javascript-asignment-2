// 23. Change the color on click

// Create a button that utilizes an array of colors and the Math.random method to change the background color 
// of the page upon clicking.

// Array of colors
var colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#34495e'];

function changeBackgroundColor() {
    // Get a random index from the colors array
    var randomIndex = Math.floor(Math.random() * colors.length);

    // Set the background color of the body
    document.body.style.backgroundColor = colors[randomIndex];
}
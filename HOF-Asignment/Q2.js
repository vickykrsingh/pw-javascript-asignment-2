// 2. Random Number Generator with Delay and Progress Indication: 

// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a 
// variable so can be modified. The program displays a message every second indicating the time remaining 
// until the random number is generated and then outputs the generated number. 

function generateRandomNumber() {
    // Generate a random number between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
}

function countdown(seconds) {
    let timeRemaining = seconds;

    // Display countdown message every second
    const intervalId = setInterval(function() {
        console.log(`Time remaining: ${timeRemaining} seconds...`);
        timeRemaining--;

        // Check if time is up
        if (timeRemaining < 0) {
            clearInterval(intervalId); // Stop the countdown
            const randomNum = generateRandomNumber();
            console.log(`Random number generated: ${randomNum}`);
        }
    }, 1000);
}

// Set the delay in seconds (modify this as needed)
const delayInSeconds = 3;

// Use setTimeout to implement a delay before starting the countdown
setTimeout(function() {
    countdown(delayInSeconds);
}, delayInSeconds * 1000);

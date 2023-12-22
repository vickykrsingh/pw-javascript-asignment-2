// 1. Count the occurrences.

// You are building a word count generator that will take a large string of text as input and output the words and 
// the number of times they are present in the string. Your task is to write a function that can count the 
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can 
// assume that the string only contains alphabetic characters and spaces.


function countWords(inputString) {
    // Split the input string into an array of words
    const wordsArray = inputString.split(' ');

    // Create a Map to store word counts
    const wordCountMap = new Map();

    // Iterate through the array of words
    for (const word of wordsArray) {
        // Remove leading and trailing spaces and convert to lowercase for case-insensitive counting
        const cleanedWord = word.trim().toLowerCase();

        // Update the count in the Map
        if (wordCountMap.has(cleanedWord)) {
            wordCountMap.set(cleanedWord, wordCountMap.get(cleanedWord) + 1);
        } else {
            wordCountMap.set(cleanedWord, 1);
        }
    }

    return wordCountMap;
}

// Example usage:
const inputText = "This is a sample text. This text contains sample words.";
const result = countWords(inputText);

// Display the word count Map
console.log("Word Count Map:", result);

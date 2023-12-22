// 2. Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates 
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that 
// contains only the unique elements. 


function removeDuplicates(inputArray) {
    // Create a Set from the input array to remove duplicates
    const uniqueSet = new Set(inputArray);

    // Convert the Set back to an array
    const uniqueArray = [...uniqueSet];

    return uniqueArray;
}

// Example usage:
const inputNumbers = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9, 3];
const result = removeDuplicates(inputNumbers);

// Display the array without duplicates
console.log("Array without Duplicates:", result);

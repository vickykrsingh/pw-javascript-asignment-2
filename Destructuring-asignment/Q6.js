// 6. Nested Objects.

// Write a function that takes an object representing a person as input, and extracts the name and street 
// properties from a nested object using object destructuring. The function should return an object with these two 
// properties. A sample object is given below

// const person = {
//     name:"Mithun",
//     age:21,
//     address:{
//         street:"B8, Block B, Industrial Area.",
//         city:"Sector 62, Noida",
//         state:"Uttar Pradesh",
//     }
// }

function extractNameAndStreet(person) {
    // Use object destructuring to extract name and street properties
    const { name, address: { street } } = person;

    // Return an object with name and street properties
    return { name, street };
}

// Example usage:
const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    }
};

// Call the function to extract name and street
const result = extractNameAndStreet(person);

// Display the result
console.log("Person Object:", person);
console.log("Extracted Properties:", result);

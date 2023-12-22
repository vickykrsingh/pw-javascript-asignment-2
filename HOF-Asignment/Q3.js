// 3. Build a feature for Store's Inventory.

// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript 
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should 
// use the map higher-order function to create a new object with the converted prices in Rupees.

// Object with items and their prices in USD
const pricesInUSD = {
    laptop: 1000,
    smartphone: 500,
    headphones: 100,
    camera: 800,
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert prices from USD to INR
function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

// Use the map function to create a new object with prices in INR
const pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, priceInUSD]) => [item, convertToINR(priceInUSD)])
);

// Display the original and converted prices
console.log("Original Prices (USD):", pricesInUSD);
console.log("Converted Prices (INR):", pricesInINR);

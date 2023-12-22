// 11. Unit converter
// A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying 
// it on its website. They want a function that can convert Celsius to Fahrenheit accurately ane efficiently. The 
// function should take input in Celsius ane return output in Fahrenheit. This function will help the weather station 
// to provide temperature readings that are easily understandable to a wider audience.

function celsiusToFahrenheit(celsius){
    const F = celsius*(9/5)+32
    return F;
}

const fahrenheit = celsiusToFahrenheit(94);
console.log(fahrenheit);
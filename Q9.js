// 9. Check for Visibility.

// Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. 
// Use a for loop and continue statement.

const arr = [23,43,24,15,54,67,30,76,34,76,23,54,72,72];
let newArr=[]

for(let i = 0; i<=arr.length; i++){
    console.log(arr[i])
    if(arr[i]%3===0 && arr[i]%2!=0){
        newArr.push(arr[i])
    }
}
console.log(newArr)
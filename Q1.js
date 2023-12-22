// 1. Password Validator

// Write a JavaScript program that checks if the entered password matches the confirmed password. If the 
// passwords match, the program should log "Password Matched. Password validation Successful." to the console. 
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console

const password = 'vicky@123'
const cPassword = 'vicky@123'

if(password===cPassword){
    console.log("Password matched.")
}else{
    console.log("Password didn't matched.")
}

// 10. Correct a bug

// You are working on an e-commerce website where customers can add items to their cart. The cart stores the 
// quantity of each item that the customer wants to purchase in an array of numbers. However, the website is 
// currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to 
// half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart 
// array to correct the bug. 

let cart = [2,4,3,2,1,5,3,7];


function doubleCartValue(cart=[]){
    cart.map((e,i)=>{
        cart[i]=e*2
    })
}

doubleCartValue(cart)
console.log(cart)
// 14. Calculate the final order price

// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of 
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on 
// the unit price and quantity of each item.


cart=[
    {
        itemName:"headphone",
        unit:2,
        price:1500
    },
    {
        itemName:"earbuds",
        unit:4,
        price:100
    },
    {
        itemName:"shirt",
        unit:4,
        price:500
    },
    {
        itemName:"powerbank",
        unit:1,
        price:1800
    }
]

const cartCalculation = (cart) => {
    let totPrice=0;
    cart.map((c)=>{
        totPrice = totPrice + ((c.price)*(c.unit))
    })
    return totPrice;
}

console.log(cartCalculation(cart))
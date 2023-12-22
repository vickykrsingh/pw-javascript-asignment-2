// 15. Calculate the percentage of the discount

// A retail store is offering a discount on its products and wants to calculate the percentage of the discount to 
// show customers how much they can save. Given the original price and the discounted price of a product, 
// implement an arrow function to calculate the percentage of the discount rounded off to two decimal places. 
// This function could be useful for the store's marketing team to create promotions and offers that attract 
// customers.

const calculateDiscount = (originalPrice,discountedPrice)=>{
    let percentage =  discountedPrice*100/originalPrice
    percentage = percentage.toFixed(0)
    console.log(percentage)
}

calculateDiscount(2001,1000)
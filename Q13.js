// 13. Bill splitter

// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of 
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing 
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.

const dish = [
    {
        dishName:"daal",
        price:15,
        sharingPerson:2
    },
    {
        dishName:"chawal",
        price:6,
        sharingPerson:3
    },
    {
        dishName:"paneer",
        price:50,
        sharingPerson:5
    },
    {
        dishName:"kadhi",
        price:50,
        sharingPerson:3
    }
]



function calculateBill(dish){
    billByEachPerson={}
    sum=0;
    dish.map((d)=>{
        billByEachPerson[d.dishName]=d.price/d.sharingPerson;
    })
    totalBill=dish.map((d)=>{
        sum=sum+d.price
    })
    return {
        billByEachPerson,
        sum
    }

}

const result = calculateBill(dish)
console.log(result)
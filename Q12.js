// 12. Calculate rental cost
// A car rental company needs to calculate the cost of a rental based on the number of days rented and the type 
// of car. They require a function that takes in the number of days rented and car type and returns the rental cost. 
// The total cost would be the rental cost multiplied by the number of days rented.

// The rental costs are
// Economy = Rs. 4000 /- per day
// Midsize = Rs. 10,000 /- per day
// Luxury = Rs. 20,000 /- per day.

function calculateRentOfDifferCar(days,carType){
    switch(carType){
        case 'economy':
            return days*4000;
        case 'midsize':
            return days*10000;
        case 'luxury':
            return days*20000;
        default:
            return "car type is not exists";
    }
}

const rentCost = calculateRentOfDifferCar(3,'economy')
console.log(rentCost)
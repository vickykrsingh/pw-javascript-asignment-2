// 17. Build a banking application

// A banking application needs to manage customer accounts and transactions. The user detail is stored in an 
// object with a keys name and balance. Write functions using object methods to update a customer's account 
// balance based on a deposit or withdrawal. 


const deposit = (prevAmount,depositAmount) => {
    const updatedAmount = prevAmount+depositAmount;
    return updatedAmount;
}

const withdraw = (prevAmount,withdrawAmount) => {
    const updateAmount = prevAmount-withdrawAmount
    return updateAmount;
}

const prevAmount = 3000;
const depositAmount = 100;
const withdrawAmount = 300;
const opt = 'withdraw'

switch(opt){
    case 'deposit':
        amount = deposit(prevAmount,depositAmount)
        console.log(amount)
        break
    case 'withdraw':
        amount = withdraw(prevAmount,withdrawAmount)
        console.log(amount)
        break
    default :
        console.log("please choose deposit or withdraw")
}
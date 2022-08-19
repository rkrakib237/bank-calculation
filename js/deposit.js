document.getElementById('btn-deposit').addEventListener('click', function(){

// 1. get element by id
// 2 . get the value from the element 
// 3. convert string value to a number
const newDepoditAmount = getInputFieldValueById('deposit-field')

// get previos deposit total by id

const previousTotal = getElementValueById('deposit-total')

// calculate new deposit total 
const newDepositTotal = previousTotal + newDepoditAmount;
// set deposit total value by id
SetTextElementvalueById ('deposit-total', newDepositTotal)

const newTotalDeposit =getElementValueById ('balance-total');
const newBalanceTotal = newDepoditAmount + newTotalDeposit;

SetTextElementvalueById('balance-total', newBalanceTotal) 





   
})


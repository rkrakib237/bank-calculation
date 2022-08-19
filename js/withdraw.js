document.getElementById('btn-withdraw').addEventListener('click', function(){
    const  newWithDrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal =getElementValueById('withdraw-total');
    const totalWithdraw = newWithDrawAmount + previousWithdrawTotal;
    SetTextElementvalueById  ('withdraw-total', totalWithdraw)

    const balanceTotal = getElementValueById('balance-total');
    const newTotalBalance = balanceTotal - newWithDrawAmount;
     SetTextElementvalueById('balance-total', newTotalBalance)
    })
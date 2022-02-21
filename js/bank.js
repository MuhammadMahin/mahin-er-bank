document.getElementById('deposit-button').addEventListener('click', function (){

    // Input collect from user typing...
     const depositInput = document.getElementById('deposit-input');
     //  console.log(depositAmount); 

     const newDepositeAmountText = depositInput.value;
     const newDepositeAmount = parseFloat(newDepositeAmountText);

     const depositTotal = document.getElementById('deposite-total');
     
     const previousDepositeAmountText = depositTotal.innerText;
     const previousDepositeAmount = parseFloat(previousDepositeAmountText);


     const totalDepositeAmount = previousDepositeAmount + newDepositeAmount;
     depositTotal.innerText = totalDepositeAmount;
    // console.log(totalDepositeAmountText);

    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const newBalanceAmountText = balanceTotal.innerText;
    const newBalanceAmount = parseFloat(newBalanceAmountText);
    const totalBalanceAmount = newDepositeAmount + newBalanceAmount;
    balanceTotal.innerText = totalBalanceAmount;



     
     //  clear input field
     depositInput.value = '';



});
document.getElementById('withdraw-button').addEventListener('click', function(){
     const withdrawInput = document.getElementById('withdraw-input');
     const newWithdrawAmountText = withdrawInput.value;
     const newWithdrawAmount = parseFloat(newWithdrawAmountText);
     const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawAmountText = withdrawTotal.innerText;
     const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
     const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
     withdrawTotal.innerText = totalWithdrawAmount;

     // Update Balance
    const balanceTotal = document.getElementById('balance-total');
    const newBalanceAmountText = balanceTotal.innerText;
    const newBalanceAmount = parseFloat(newBalanceAmountText);
    const totalBalanceAmount = newBalanceAmount - newWithdrawAmount ;
    balanceTotal.innerText = totalBalanceAmount;

     withdrawInput.value = '';

});
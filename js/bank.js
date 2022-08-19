
//deposit amount input field connect to get value by clicking button
document.getElementById('btn-deposit').addEventListener('click',function () {
    const depositField = document.getElementById('deposit-field');
    //get the new deposit total
    const newDepositAmountString = depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    const depositTotalElement =document.getElementById('deposit-total');
    //get the previous deposit total
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal= parseFloat(previousDepositTotalString);
    // //calculate deposit total balance
    const currentDepositTotal = newDepositAmount+previousDepositTotal;
    depositTotalElement.innerText=currentDepositTotal;

    //last step clear the deposit field
    depositField.value = '';

    //get balance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString =balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
    //calculate current total balance
    const currentBalanceTotal = previousBalanceTotal+newDepositAmount;
    balanceTotalElement.innerText =currentBalanceTotal;


  })


//withdraw amount input field connect to get value by clicking button
document.getElementById('btn-withdraw').addEventListener('click',function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount= parseFloat(newWithdrawAmountString);

   //get the previous with total
   const withdrawTotalElement=document.getElementById('withdraw-total');
   const previousWithdrawTotalString =withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

   withdrawField.value = '';


  })
/* -------------------------------------------------------------------------- */
/*                               deposit amount                               */
/* -------------------------------------------------------------------------- */
//deposit amount input field connect to get value by clicking button
document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  //get the new deposit total
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
    // is not a number problem solved
   //last step clear the deposit field
   depositField.value = "";
    if(isNaN(newDepositAmount)){
    alert('please provide valid number');
    return;
  }

  const depositTotalElement = document.getElementById("deposit-total");
  //get the previous deposit total
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // //calculate deposit total balance
  const currentDepositTotal = newDepositAmount + previousDepositTotal;
  depositTotalElement.innerText = currentDepositTotal;


  //get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
 
  //calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  
});

/* -------------------------------------------------------------------------- */
/*                               withdraw amount                              */
/* -------------------------------------------------------------------------- */

//withdraw amount input field connect to get value by clicking button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //last step clear the withdraw field
    withdrawField.value = "";

  // is not a number problem solved
  if(isNaN(newWithdrawAmount)){
    alert('please provide valid number');
    return;
  }

  //get the previous with total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    /* -------------------------------------------------------------------------- */
  /*                                balance-total                               */
  /* -------------------------------------------------------------------------- */
  // step-5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  

  if(newWithdrawAmount > previousBalanceTotal){
    alert('বাপের ব্যাংকে এতো টাক নেই')
    return;
  }
//   withdraw total again added here
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

 
});

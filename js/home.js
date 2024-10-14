// add money to the account
/* step 1==> add an event handler inside the form and prevent page reload form submission
//step -2 ==> get money to be added to the account


    */
document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
//  step-2
   const addMoneyInput = document.getElementById('input-add-money').value
   console.log(addMoneyInput)

//    step-3

const pinNumberInput = document.getElementById('input-pin-number').value;
 console.log(pinNumberInput)
// step -3 varify the pin number

if(pinNumberInput === '1234'){
    console.log('adding money to your account')
    //step-4 ==> get the current balance
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance)

    // step-5 ==> add addMOneyInput with balance
    const addMoneyNumber = parseFloat(addMoneyInput)
    const balanceNumber = parseFloat(balance)

    console.log(typeof addMoneyNumber) 
    console.log(typeof balanceNumber) 

    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);
    //step -6: update the balance in the UI/DOM
    document.getElementById('account-balance').innerText =newBalance;

}
else{
    alert('something is wrong')

}

})
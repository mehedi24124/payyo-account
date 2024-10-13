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

const pinNumber1 = document.getElementById('input-pin-number').value;
 console.log(pinNumber1)


})
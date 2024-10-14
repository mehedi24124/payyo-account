/*


*/

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('added the events handler')

    const addMoney = document.getElementById('input-add-money').value;
    const pinNUmber = document.getElementById('input-pin-number').value;
    console.log(addMoney,pinNUmber)

    if(pinNUmber === '1234'){
        const balance = document.getElementById('account-balance').innerText 
        const balanceNumber = parseFloat(balance)
        const addMoneyNumber = parseFloat(addMoney)

        // new balance 
        const newBalance = balanceNumber + addMoneyNumber;

        // update the DOM with update balance``

        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('nah tumi wright pin daw nai');
    }
})
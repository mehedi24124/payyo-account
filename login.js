// console.log('button click file added')

// document.getElementById('btn-login').addEventListener('click', function)
//  //step -1 ==> set even handler
// document.getElementById('btn-login').addEventListener('click', function(event){
//     //step -2==> prevent default behaviour (reloading Browser)
//     event.preventDefault(); // ekto vejal lagbe for begainer
// //   console.log('Login Buttton Clicked')  

//     // step- 3 ==> get the phone number and the pin number 

//     const phoneNumber = document.getElementById('phone-number').value

//     const pinNumber = document.getElementById('pin-number')
//     console.log(phoneNumber ,pinNumber)
//     // step -4 valdiate phone and pin
//     // this is temporary system you should not do like this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in')
//         // step-5 allow user to use the website
//     }
    
//     else{
//         alert('wrong phone number or pin')
//     }

// })

 document.getElementById('btn-login')
 .addEventListener('click',function(event){
   event.preventDefault(); 
//    get thw number and pin
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value
    //  console.log(phoneNumber,pinNumber)

    //bad way to validate
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in')
        window.location.href = '/home.html'
    }
    else{
        alert('wrong pin or number')
    }
 })

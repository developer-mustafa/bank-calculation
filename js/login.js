
//step:1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
//step:2 get the email address inside the email input field.
//always remember to use input field from text you should use .value
const inputEmailField = document.getElementById('user-email');
const email = inputEmailField.value;
//step-3 get password
const inputPasswordField = document.getElementById('user-password');
const password =inputPasswordField.value;
//Danger do not verify email or password on the client side or front-end side we should be use back-end side it.
//step-4: verify user password and email
if (email ==='mustafarahman792@gmail.com' && password==='hacker') {
    window.location.href = 'https://developer-mustafa.github.io/bank-calculation/bank.html'
    
} else {
    alert('আপনার দেওয়া ইনফরমেশন ম্যাচ করেনি');
}

})
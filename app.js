var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
// var submitError = document.getElementById('submit-error');


function validateName(){
    var  name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write the full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}

function validatePhone(){
    var  phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone Number should be 10 digit';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits are allowed';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}

function validateEmail(){
    var  email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    // Standard email validation regex pattern
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateMessage(){
    var  message = document.getElementById('contact-message').value;
    var required = true;
    var left = required - message.length;

    if (message.length == 0) {
        messageError.innerHTML = 'More characters are required';
        return false;
    }
    
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}


function validateForm(){
   if (!validateName() || !validateEmail() || !validateMessage || !validatePhone ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'please fix the error to submit';
    setTimeout (function(){
        submitError.style.display = 'none';
    },3000)
    return false;
   }    
}



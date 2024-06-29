

var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];

var emailError = document.getElementById("emailErr")
var passwordError = document.getElementById("passwordErr")

email.addEventListener("textInput", emailVerify);
password.addEventListener("textInput", passwordVerify);

function validated () {
    if (email.value.length <9) {
        email.style.border = "1px solid red";
        emailErr.style.display = "block"
        email.focus();
        return false;
    }
    if (password.value.length <6) {
        password.style.border = "1px solid red";
        passwordErr.style.display = "block";
        password.focus();
        return false;
    }
}

function emailVerify () {
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        emailErr.style.display = "none";
        return true;
    }
}

function passwordVerify(){
    if(password.value.length >= 5){
        password.style.border = "1px solid silver";
        passwordErr.style.display = "none";
        return true;
    }
}
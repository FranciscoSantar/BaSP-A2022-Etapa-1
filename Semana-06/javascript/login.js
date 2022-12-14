window.onload = function () {
    var divs = document.getElementsByClassName("form-field-login");
    var email = document.getElementById("login-email");
    var password = document.getElementById("login-password");
    var sumbit = document.getElementById("sumbit-button");
    var errorParagraphEmail = document.createElement('p');
    var errorParagraphPassword = document.createElement('p');

    email.onblur = function (){
        checkEmail ();
    }
    email.onfocus = function (){
        email.classList.remove("green-border","red-border");
        errorParagraphEmail.remove();
    }
    password.onblur = function (){
        checkPassword();
    }
    password.onfocus = function (){
        password.classList.remove("green-border","red-border");
        errorParagraphPassword.remove();
    }
    sumbit.onclick = function (e){
        e.preventDefault();
        var errorMesagge = "";
        var anyError = false;
        if (!checkEmail()){
            errorMesagge += "The Email has an error. Please fix it\n"
            anyError=true;
        }
        if(!checkPassword()){
            errorMesagge += "The Password has an error. Please fix it\n"
            anyError = true;
        }
        if (anyError){
            alert(errorMesagge);
            return false;
        }
        else{
            alert("Email: " + email.value + "\nPassword: " + password.value);
            return true;
        }
    }
 //------------------------------------------------------------------------
    function checkEmail (){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (email.value.length == 0){
            email.classList.add("red-border");
            return false;
        }
        if (!emailExpression.test(email.value)){
            email.classList.add("red-border");
            errorParagraphEmail.textContent = "Wrong format of the Email, please fix it.";
            errorParagraphEmail.classList.add("error-text");
            divs[0].appendChild(errorParagraphEmail);
            return false;
        }
        else{
            email.classList.add("green-border");
            return true;
        }
    }

    function checkPassword(){
        if (!password.value.length){
            password.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(password.value) || password.value.length<8){
            password.classList.add("red-border");
            errorParagraphPassword.textContent =
            "The password is wrong. Letters and numbers allowed and must have 8 characters or more";
            errorParagraphPassword.classList.add("error-text");
            divs[1].appendChild(errorParagraphPassword);
            return false;
        }
        password.classList.add("green-border");
        return true;
    }

    function isAlphaNum (stringInput){
        stringInput=stringInput.replaceAll(" ","");
        for (var i=0;i<stringInput.length;i++){
            if (stringInput[i] < '0' || stringInput[i] > 'z' ||
            (stringInput[i] > '9' && stringInput[i] < 'A') ||
            (stringInput[i] > 'Z' && stringInput[i] < 'a')){
                return false;
            }
        }
        return true;
    }
}

window.onload = function () {
    var form = document.getElementById("logInForm");
    var label = document.getElementsByTagName("label");
    var email = document.getElementById("logInMail");
    var password = document.getElementById("logInPassword");
    var sumbit = document.getElementById("sumbitButton");
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
        if (!checkEmail()){
            alert("The Email has an error. Please fix it");
        }
        if(!checkPassword()){
            alert("The Password has an error. Please fix it");
        }
        else{
            alert("Email: " + email.value + "\n" + "Password: " + password.value);
            return true;
        }
        return false;
    }
//------------------------------------------------------------------------
    function checkEmail (){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailExpression.test(email.value)){
            email.classList.add("red-border");
            errorParagraphEmail.textContent = "Wrong format of the Email, please fix it.";
            errorParagraphEmail.classList.add("error-text");
            form.insertBefore(errorParagraphEmail, label[1]);
            return false;
        }
        else{
            email.classList.add("green-border");
            return true;
        }
    }

    function checkPassword(){
        for (var i=0;i<password.value.length;i++){
            if (password.value.charCodeAt(i) < 48 || password.value.charCodeAt(i) > 122 ||
               (password.value.charCodeAt(i) > 57 && password.value.charCodeAt(i) < 65) ||
               (password.value.charCodeAt(i) > 90 && password.value.charCodeAt(i) < 97)){
                    password.classList.add("red-border");
                    errorParagraphPassword.textContent = "Wrong format of the Password, please fix it.";
                    errorParagraphPassword.classList.add("error-text");
                    form.insertBefore(errorParagraphPassword, sumbit);
                    return false;
                }
        }
        password.classList.add("green-border");
        return true;
    }
}

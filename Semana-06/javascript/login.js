window.onload = function () {
    var form = document.getElementById("login-form");
    var label = document.getElementsByTagName("label");
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
        if (!checkEmail()){
            alert("The Email has an error. Please fix it");
            return false;
        }
        if(!checkPassword()){
            alert("The Password has an error. Please fix it");
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
        if (email.value.length==0){
            email.classList.add("red-border");
            return false;
        }
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
        if (!password.value.length){
            password.classList.add("red-border");
            return false;
        }
        else {
            for (var i=0;i<password.value.length;i++){
                if (password.value[i] < '0' || password.value[i] > 'z' ||
                (password.value[i] > '9' && password.value[i] < 'A') ||
                (password.value[i] > 'Z' && password.value[i] < 'a')){
                    password.classList.add("red-border");
                    errorParagraphPassword.textContent = "Wrong format of the Password, please fix it.";
                    errorParagraphPassword.classList.add("error-text");
                    form.insertBefore(errorParagraphPassword, sumbit);
                    return false;
                }
            }
        }
        password.classList.add("green-border");
        return true;
    }
}

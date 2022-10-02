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
        var urlLogin='https://basp-m2022-api-rest-server.herokuapp.com/login';
        var errorMesagge = "";
        var anyError = false;
        var msgEmail = '';
        var msgPassword = '';
        msgEmail = checkEmail(msgEmail);
        msgPassword = checkPassword(msgPassword);
        if (msgEmail != 'ok'){
            errorMesagge += msgEmail + "\n";
            anyError=true;
        }
        if(msgPassword != 'ok'){
            errorMesagge += msgPassword + "\n";
            anyError = true;
        }
        if (anyError){
            alert(errorMesagge);
            return false;
        }
        else{
            urlLogin=addQueryParamsUrl(urlLogin,email.value,password.value);
            fetch(urlLogin)
            .then(function (response){
                return response.json();
            })
            .then (function (data){
                if(data.success){
                    alert("¡Successful Login!\nMessage: "+data.msg);
                } else{
                    alert("¡Login Error!\nMessage: "+data.msg);
                }
            })
            .catch(function (error){
                alert("¡Contection error! \nPlease, try later. \nMessage: "+error.message);
            })
            alert("Email: " + email.value + "\nPassword: " + password.value);
            return true;
        }
    }

    function checkEmail (msg){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (email.value.length == 0){
            email.classList.add("red-border");
            msg = "The Email is required.";
            errorParagraphEmail.textContent = msg;
            errorParagraphEmail.classList.add("error-text");
            divs[0].appendChild(errorParagraphEmail);
            return msg;
        } if (!emailExpression.test(email.value)){
            email.classList.add("red-border");
            msg = "Wrong format of the Email, please fix it.";
            errorParagraphEmail.textContent = msg;
            errorParagraphEmail.classList.add("error-text");
            divs[0].appendChild(errorParagraphEmail);
            return msg;
        } else{
            email.classList.add("green-border");
            msg='ok';
            return msg;
        }
    }

    function checkPassword(msg){
        if (!password.value.length){
            password.classList.add("red-border");
            msg = 'The password is required.';
            errorParagraphPassword.textContent = msg;
            errorParagraphPassword.classList.add("error-text");
            divs[1].appendChild(errorParagraphPassword);
            return msg;
        } if (!isAlphaNum(password.value) || password.value.length<8){
            password.classList.add("red-border");
            msg =
            "The password is wrong. Letters and numbers allowed and must have 8 characters or more";
            errorParagraphPassword.textContent = msg;
            errorParagraphPassword.classList.add("error-text");
            divs[1].appendChild(errorParagraphPassword);
            return msg;
        }
        password.classList.add("green-border");
        msg = 'ok';
        return msg;
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

    function  addQueryParamsUrl(url,mail,password){
        return url+'?email='+mail+'&password='+password;
    }

}

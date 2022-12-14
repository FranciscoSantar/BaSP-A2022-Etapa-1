window.onload = function () {
    var divEmail = document.getElementById("form-field-email");
    var divPassword = document.getElementById("form-field-password");
    var email = document.getElementById("login-email");
    var password = document.getElementById("login-password");
    var sumbit = document.getElementById("sumbit-button");
    var errorParagraphEmail = document.createElement("p");
    var errorParagraphPassword = document.createElement("p");
    var textModal = document.createElement("p");
    var loginModal = document.getElementById("modal");
    var closeButton = document.getElementById("x-button");
    var modalButton = document.getElementById("button-modal");
    var modalContentText = document.getElementById("text-content");

    closeButton.onclick = function (){
        loginModal.style.display = "none";
    }
    modalButton.onclick = function (){
        loginModal.style.display = "none";
    }
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
        var errorMesagge = '* ';
        var anyError = false;
        var msgEmail = '';
        var msgPassword = '';
        msgEmail = checkEmail(msgEmail);
        msgPassword = checkPassword(msgPassword);
        if (msgEmail != 'ok'){
            errorMesagge += msgEmail + '\n* ';
            anyError=true;
        }
        if(msgPassword != 'ok'){
            errorMesagge += msgPassword + '\n';
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
                    loginModal.style.display = "block";
                    textModal.classList.remove("good-modal","error-modal");
                    modalButton.classList.remove("good-button","error-button");
                    textModal.innerText ='\n\n??Successful Login!\nMessage: '+data.msg;
                    textModal.classList.add("good-modal");
                    modalButton.classList.add("good-button");
                    modalContentText.appendChild(textModal);
                } else{
                    var msgError ='??Login Error!\nMessage: '+data.msg;
                    throw new Error (msgError);
                }
            })
            .catch(function (error){
                loginModal.style.display = "block";
                textModal.classList.remove("good-modal","error-modal");
                modalButton.classList.remove("good-button","error-button");
                textModal.innerText = error.message;
                textModal.classList.add("error-modal");
                modalButton.classList.add("error-button");
                modalContentText.appendChild(textModal);
            })
            alert('Email: ' + email.value + '\nPassword: ' + password.value);
            return true;
        }
    }

    function checkEmail (msg){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (email.value.length == 0){
            email.classList.add("red-border");
            msg = 'The Email is required.';
            errorParagraphEmail.textContent = msg;
            errorParagraphEmail.classList.add("error-text");
            divEmail.appendChild(errorParagraphEmail);
            return msg;
        } if (!emailExpression.test(email.value)){
            email.classList.add("red-border");
            msg = 'Wrong format of the Email, please fix it.';
            errorParagraphEmail.textContent = msg;
            errorParagraphEmail.classList.add("error-text");
            divEmail.appendChild(errorParagraphEmail);
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
            divPassword.appendChild(errorParagraphPassword);
            return msg;
        } if (!isAlphaNum(password.value) || password.value.length<8){
            password.classList.add("red-border");
            msg =
            'The password is wrong. Letters and numbers allowed and must have 8 characters or more';
            errorParagraphPassword.textContent = msg;
            errorParagraphPassword.classList.add("error-text");
            divPassword.appendChild(errorParagraphPassword);
            return msg;
        }
        password.classList.add("green-border");
        msg = 'ok';
        return msg;
    }

    function isAlphaNum (stringInput){
        stringInput=stringInput.replaceAll(' ','');
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

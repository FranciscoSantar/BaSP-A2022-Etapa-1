window.onload = function() {
    var nameContact = document.getElementById("contact-name");
    var emailContact = document.getElementById("contact-email");
    var selectContact = document.getElementById("contact-select")
    var messageContact = document.getElementById("contact-message");
    var divNameContact = document.getElementById("contact-name-container");
    var divEmailContact = document.getElementById("contact-email-container");
    var divSelectContact = document.getElementById("contact-select-container");
    var divMessageContact = document.getElementById("contact-message-container");
    var sumbit = document.getElementById("contact-sumbit");
    var errorParagraphNameContact = document.createElement("p");
    var errorParagraphEmailContact = document.createElement("p");
    var errorParagraphSelectContact = document.createElement("p");
    var errorParagraphMessageContact = document.createElement("p");

    nameContact.onblur = function (){
        checkNameContact ();
    }
    nameContact.onfocus = function (){
        nameContact.classList.remove("green-border","red-border");
        errorParagraphNameContact.remove();
    }

    emailContact.onblur = function (){
        checkEmailContact ();
    }
    emailContact.onfocus = function (){
        emailContact.classList.remove("green-border","red-border");
        errorParagraphEmailContact.remove();
    }

    selectContact.onblur = function (){
        checkSelectContact ();
    }
    selectContact.onfocus = function (){
        selectContact.classList.remove("green-border","red-border");
        errorParagraphSelectContact.remove();
    }

    messageContact.onblur = function (){
        checkMessageContact ();
    }
    messageContact.onfocus = function (){
        messageContact.classList.remove("green-border","red-border");
        errorParagraphMessageContact.remove();
    }

    sumbit.onclick = function (e){
        e.preventDefault();
        var errorMesagge = '';
        var anyError = false;
        var msgName = '';
        var msgEmail = '';
        var msgSelect = '';
        var msgMessage = '';
        msgName = checkNameContact(msgName);
        msgEmail = checkEmailContact(msgEmail);
        msgSelect = checkSelectContact(msgSelect);
        msgMessage = checkMessageContact(msgMessage);
        if (msgName != 'ok'){
            errorMesagge += '*' + msgName + '\n';
            anyError = true;
        } if(msgEmail != 'ok'){
            errorMesagge += '*' + msgEmail + '\n';
            anyError = true;
        } if(msgSelect != 'ok'){
            errorMesagge += '*' + msgSelect + '\n';
            anyError = true;
        } if(msgMessage != 'ok'){
            errorMesagge += '*' + msgMessage + '\n';
            anyError = true;
        } if (anyError){
            alert(errorMesagge);
            return false;
        } else{
            alert('Name: ' + nameContact.value + '\nEmail: ' + emailContact.value
            +'\nArea: ' + selectContact.value + '\nMessage: ' + messageContact.value);
            return true;
        }
    }

    function checkNameContact (msg){
        if (nameContact.value.length == 0){
            nameContact.classList.add("red-border");
            msg = 'The Name is required.';
            errorParagraphNameContact.textContent = msg;
            errorParagraphNameContact.classList.add("error-text");
            divNameContact.appendChild(errorParagraphNameContact);
            return msg;
        } if(!isAlpha(nameContact.value) || nameContact.value.length<3){
            nameContact.classList.add("red-border");
            msg = 'The name is wrong. Only letters and a length of 3 characters';
            errorParagraphNameContact.textContent = msg;
            errorParagraphNameContact.classList.add("error-text");
            divNameContact.appendChild(errorParagraphNameContact);
            return msg;
        }
        nameContact.classList.add("green-border");
        msg = 'ok';
        return msg;
    }

    function checkEmailContact (msg){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (emailContact.value.length == 0){
            emailContact.classList.add("red-border");
            msg = 'The Email is required.';
            errorParagraphEmailContact.textContent = msg;
            errorParagraphEmailContact.classList.add("error-text");
            divEmailContact.appendChild(errorParagraphEmailContact);
            return msg;
        } if (!emailExpression.test(emailContact.value)){
            emailContact.classList.add("red-border");
            msg = 'Wrong format of the Email, please fix it.';
            errorParagraphEmailContact.textContent = msg;
            errorParagraphEmailContact.classList.add("error-text");
            divEmailContact.appendChild(errorParagraphEmailContact);
            return msg;
        } else{
            emailContact.classList.add("green-border");
            msg = 'ok';
            return msg;
        }
    }

    function checkSelectContact (msg){
        if (selectContact.value === 'default'){
            selectContact.classList.add("red-border");
            msg = 'You have to select an area to contact';
            errorParagraphSelectContact.textContent = msg;
            errorParagraphSelectContact.classList.add("error-text");
            divSelectContact.appendChild(errorParagraphSelectContact);
            return msg;
        }
        selectContact.classList.add("green-border");
        msg = 'ok';
        return msg;
    }

    function checkMessageContact (msg){
        if (messageContact.value.length == 0){
            messageContact.classList.add("red-border");
            msg = 'The Message is required.';
            errorParagraphMessageContact.textContent = msg;
            errorParagraphMessageContact.classList.add("error-text");
            divMessageContact.appendChild(errorParagraphMessageContact);
            return msg;
        } if(!isAlphaNum(messageContact.value) || messageContact.value.length<3){
            messageContact.classList.add("red-border");
            msg = 'The Message is wrong. Letters and numbers allowed and must have 3 characters';
            errorParagraphMessageContact.textContent = msg;
            errorParagraphMessageContact.classList.add("error-text");
            divMessageContact.appendChild(errorParagraphMessageContact);
            return msg;
        }
        messageContact.classList.add("green-border");
        msg = 'ok';
        return msg;
    }

    function isAlphaNum (stringInput){
        stringInput=stringInput.replaceAll(' ','');
        for (var i=0 ; i<stringInput.length ; i++){
            if (stringInput[i] < ' '){
                return false;
            }
        }
        return true;
    }
    function isAlpha(stringInput){
        stringInput=stringInput.replaceAll(' ','');
        for (var i=0 ; i<stringInput.length ; i++){
            if ( stringInput[i] < 'A' || stringInput[i] > 'z' || (stringInput[i]> 'Z' && stringInput[i] < 'a')){
                return false;
            }
        }
        return true;
    }
}
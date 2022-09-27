window.onload = function() {
    var nameContact = document.getElementById("contact-name");
    var emailContact = document.getElementById("contact-email");
    var selectContact = document.getElementById("contact-select")
    var messageContact = document.getElementById("contact-message");
    var divs = document.getElementsByClassName("contact-field");
    var sumbit = document.getElementById("contact-sumbit");
    var errorParagraphNameContact = document.createElement('p');
    var errorParagraphEmailContact = document.createElement('p');
    var errorParagraphSelectContact = document.createElement('p');
    var errorParagraphMessageContact = document.createElement('p');

    nameContact.onblur = function (){
        checkNameContact ();
    }
    nameContact.onfocus = function (){
        nameContact.classList.remove("green-border","red-border");
        errorParagraphNameContact.remove();
    }

    emailContact.onblur = function (){
        checkEmailContact ();
        console.log(selectContact.value)
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
        errorParagraphMessageContact.remove();
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
        var errorMesagge="";
        var anyError=false;
        if (!checkNameContact()){
            errorMesagge+="The Name has an error. Please fix it\n"
            anyError=true;
        }
        if(!checkEmailContact()){
            errorMesagge+="The Email has an error. Please fix it\n"
            anyError=true;
        }
        if(!checkMessageContact()){
            errorMesagge+="The Message has an error. Please fix it\n"
            anyError=true;
        }
        if(!checkSelectContact()){
            errorMesagge+="You have to pick an Area to contact\n"
            anyError=true;
        }
        if (anyError){
            alert(errorMesagge);
            return false;
        }
        else{
            alert("Name: " + nameContact.value + "\nEmail: " + emailContact.value
            +"\nArea: " + selectContact.value + "\nMessage: " + messageContact.value);
            return true;
        }
    }

    function checkNameContact (){
        if (nameContact.value.length==0){
            nameContact.classList.add("red-border");
            return false;
        }
        if(!isAlpha(nameContact.value) || nameContact.value.length<3){
            console.log("Error name");
            nameContact.classList.add("red-border");
            errorParagraphNameContact.textContent = "The name is wrong. Only letters and a length of 3 characters";
            errorParagraphNameContact.classList.add("error-text");
            divs[0].appendChild(errorParagraphNameContact);
            return false;
        }
        nameContact.classList.add("green-border");
        return true;
    }

    function checkEmailContact (){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (emailContact.value.length==0){
            emailContact.classList.add("red-border");
            return false;
        }
        if (!emailExpression.test(emailContact.value)){
            emailContact.classList.add("red-border");
            errorParagraphEmailContact.textContent = "The Email is wrong.";
            errorParagraphEmailContact.classList.add("error-text");
            divs[1].appendChild(errorParagraphEmailContact);
            return false;
        }
        else{
            emailContact.classList.add("green-border");
            return true;
        }
    }

    function checkSelectContact (){
        if (selectContact.value==='default'){
            selectContact.classList.add("red-border");
            errorParagraphSelectContact.textContent = "You have to select an area to contact";
            errorParagraphSelectContact.classList.add("error-text");
            divs[2].appendChild(errorParagraphSelectContact);
            return false;
        }
        selectContact.classList.add("green-border");
        return true;
    }

    function checkMessageContact (){
        if (messageContact.value.length==0){
            messageContact.classList.add("red-border");
            return false;
        }
        if(!isAlphaNum(messageContact.value) || messageContact.value.length<3){
            messageContact.classList.add("red-border");
            errorParagraphMessageContact.textContent =
            "The Message is wrong. Letters and numbers allowed and must have 3 characters";
            errorParagraphMessageContact.classList.add("error-text");
            divs[3].appendChild(errorParagraphMessageContact);
            return false;
        }
        messageContact.classList.add("green-border");
        return true;
    }

    function isAlphaNum (stringInput){
        stringInput=stringInput.replaceAll(" ","");
        for (var i=0;i<stringInput.length;i++){
            if (stringInput[i] < " "){
                return false;
            }
        }
        return true;
    }
    function isAlpha(stringInput){
        stringInput=stringInput.replaceAll(" ","");
        for (var i=0 ; i<stringInput.length ; i++){
            if ( stringInput[i]<'A' || stringInput[i] >'z' || (stringInput[i]>'Z' && stringInput[i]<'a')){
                return false;
            }
        }
        return true;
    }
}
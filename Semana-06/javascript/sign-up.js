window.onload = function () {
    var nameEmployee = document.getElementById("sign-up-name");
    var lastnameEmployee = document.getElementById("sign-up-lastname");
    var dniEmployee = document.getElementById("sign-up-dni");
    var dateEmployee = document.getElementById("sign-up-date");
    var addressEmployee = document.getElementById("sign-up-address");
    var phoneEmployee = document.getElementById("sign-up-phone");
    var locationEmployee = document.getElementById("sign-up-location");
    var postalCodeEmployee = document.getElementById("sign-up-cp");
    var emailEmployee = document.getElementById("sign-up-email");
    var passwordEmployee = document.getElementById("sign-up-password");
    var passwordRepeatEmployee = document.getElementById("sign-up-password-repeat");
    var sumbit = document.getElementById("sumbit-button");
    var divs = document.getElementsByClassName("form-field");
    var errorParagraphNameEmployee = document.createElement('p');
    var errorParagraphLastnameEmployee = document.createElement('p');
    var errorParagraphDniEmployee = document.createElement('p');
    var errorParagraphDateEmployee = document.createElement('p');
    var errorParagraphPhoneEmployee = document.createElement('p');
    var errorParagraphAddressEmployee = document.createElement('p');
    var errorParagraphLocationEmployee = document.createElement('p');
    var errorParagraphPostalCodeEmployee = document.createElement('p');
    var errorParagraphEmailEmployee = document.createElement('p');
    var errorParagraphPasswordEmployee = document.createElement('p');
    var errorParagraphPasswordRepeatEmployee = document.createElement('p');

    nameEmployee.onblur = function (){
        checkNameEmployee ();
    }
    nameEmployee.onfocus = function (){
        nameEmployee.classList.remove("green-border","red-border");
        errorParagraphNameEmployee.remove();
    }

    lastnameEmployee.onblur = function (){
        checkLastnameEmployee ();
    }
    lastnameEmployee.onfocus = function (){
        lastnameEmployee.classList.remove("green-border","red-border");
        errorParagraphLastnameEmployee.remove();
    }

    dniEmployee.onblur = function (){
        checkDniEmployee ();
    }
    dniEmployee.onfocus = function (){
        dniEmployee.classList.remove("green-border","red-border");
        errorParagraphDniEmployee.remove();
    }

    dateEmployee.onblur = function (){
        checkDateEmployee ();
    }
    dateEmployee.onfocus = function (){
        dateEmployee.classList.remove("green-border","red-border");
        errorParagraphDateEmployee.remove();
    }

    phoneEmployee.onblur = function (){
        checkPhoneEmployee ();
    }
    phoneEmployee.onfocus = function (){
        phoneEmployee.classList.remove("green-border","red-border");
        errorParagraphPhoneEmployee.remove();
    }

    addressEmployee.onblur = function (){
        checkAddressEmployee ();
    }
    addressEmployee.onfocus = function (){
        addressEmployee.classList.remove("green-border","red-border");
        errorParagraphAddressEmployee.remove();
    }

    locationEmployee.onblur = function (){
        checkLocationEmployee ();
    }
    locationEmployee.onfocus = function (){
        locationEmployee.classList.remove("green-border","red-border");
        errorParagraphLocationEmployee.remove();
    }

    postalCodeEmployee.onblur = function (){
        checkPostalCodeEmployee ();
    }
    postalCodeEmployee.onfocus = function (){
        postalCodeEmployee.classList.remove("green-border","red-border");
        errorParagraphPostalCodeEmployee.remove();
    }

    emailEmployee.onblur = function (){
        checkEmailEmployee ();
    }
    emailEmployee.onfocus = function (){
        emailEmployee.classList.remove("green-border","red-border");
        errorParagraphEmailEmployee.remove();
    }

    passwordEmployee.onblur = function (){
        checkPasswordEmployee ();
    }
    passwordEmployee.onfocus = function (){
        passwordEmployee.classList.remove("green-border","red-border");
        errorParagraphPasswordEmployee.remove();
    }

    passwordRepeatEmployee.onblur = function (){
        checkPasswordRepeatEmployee ();
    }
    passwordRepeatEmployee.onfocus = function (){
        passwordRepeatEmployee.classList.remove("green-border","red-border","purple-border");
        errorParagraphPasswordRepeatEmployee.remove();
    }

    sumbit.onclick = function (e){
        e.preventDefault();
        var errorMesagge = "";
        var anyError = false;
        if (!checkNameEmployee ()){
            errorMesagge += "The Name has an error. Please fix it\n"
            anyError = true;
        }
        if (!checkLastnameEmployee ()){
            errorMesagge += "The Lastname has an error. Please fix it\n"
            anyError = true;
        }
        if (!checkDniEmployee ()){
            errorMesagge += "The DNI has an error. Please fix it\n";
            anyError = true;
        }
        if (!checkPhoneEmployee ()){
            errorMesagge += "The Phone has an error. Please fix it\n"
            anyError = true;
        }
        if (!checkLocationEmployee()){
            errorMesagge += "The Location has an error. Please fix it\n"
            anyError = true;
        }
        if (!checkPostalCodeEmployee()){
            errorMesagge += "The Postal Code has an error. Please fix it\n"
            anyError = true;
        }
        if (!checkEmailEmployee()){
            errorMesagge += "The Email has an error. Please fix it\n"
            anyError = true;
        }
        if (!checkPasswordEmployee()){
            errorMesagge += "The Password has an error. Please fix it\n"
            anyError = true;
        }
        if (!checkPasswordRepeatEmployee()){
            errorMesagge += "The Repeat password has an error. Please fix it\n"
            anyError = true;
        }
        if (anyError){
            alert(errorMesagge);
            return false;
        }
        else{
            alert("Name: " + nameEmployee.value + "\nLastname: " + lastnameEmployee.value +
                "\nDNI: " + dniEmployee.value + "\nBirth Date: " + getDate(dateEmployee.value) +
                "\nPhone: " + phoneEmployee.value + "\nAddress: " + addressEmployee.value +
                "\nLocalion: " + locationEmployee.value + "\nPostal Code: " + postalCodeEmployee.value +
                "\nEmail: " + emailEmployee.value + "\nPassword: " + passwordEmployee.value);
            return true;
        }
    }
    //------------------------------------------------------------------------
    function checkNameEmployee(){
        if (nameEmployee.value.length == 0){
            nameEmployee.classList.add("red-border");
            return false;
        }
        if(!isAlpha(nameEmployee.value) || nameEmployee.value.length<3){
            nameEmployee.classList.add("red-border");
            errorParagraphNameEmployee.textContent = "The name is wrong. Only letters and a length of 3 characters";
            errorParagraphNameEmployee.classList.add("error-text");
            divs[0].appendChild(errorParagraphNameEmployee);
            return false;
        }
        nameEmployee.classList.add("green-border");
        return true;
    }
    function checkLastnameEmployee(){
        if (lastnameEmployee.value.length == 0){
            lastnameEmployee.classList.add("red-border");
            return false;
        }
        if(!isAlpha(lastnameEmployee.value) || lastnameEmployee.value.length<3){
            lastnameEmployee.classList.add("red-border");
            errorParagraphLastnameEmployee.textContent = "The Lastname is wrong. Only letters and a length of 3 characters";
            errorParagraphLastnameEmployee.classList.add("error-text");
            divs[1].appendChild(errorParagraphLastnameEmployee);
            return false;
        }
        lastnameEmployee.classList.add("green-border");
        return true;
    }
    function checkDniEmployee (){
        if (dniEmployee.value.length == 0){
            dniEmployee.classList.add("red-border");
            return false;
        }
        if(!isNumber(dniEmployee.value) || dniEmployee.value.length<7){
            dniEmployee.classList.add("red-border");
            errorParagraphDniEmployee.textContent = "The DNI is wrong. Only number and a length of 7 characters or more";
            errorParagraphDniEmployee.classList.add("error-text");
            divs[2].appendChild(errorParagraphDniEmployee);
            return false;
        }
        dniEmployee.classList.add("green-border");
        return true;
    }

    function checkDateEmployee (){
        var bornYear = dateEmployee.value.slice(0,4);
        var actualYear = new Date().getFullYear();
        if (bornYear == ""){
            dateEmployee.classList.add("red-border");
            return false;
        }
        if (actualYear-bornYear<18){
            dateEmployee.classList.add("red-border");
            errorParagraphDateEmployee.textContent = "The Employee must be over 18 years old";
            errorParagraphDateEmployee.classList.add("error-text");
            divs[3].appendChild(errorParagraphDateEmployee);
            return false;
        }
        dateEmployee.classList.add("green-border");
        return true;
    }

    function checkPhoneEmployee (){
        if (phoneEmployee.value.length == 0){
            phoneEmployee.classList.add("red-border");
            return false;
        }
        if(!isNumber(phoneEmployee.value) || phoneEmployee.value.length != 10){
            phoneEmployee.classList.add("red-border");
            errorParagraphPhoneEmployee.textContent = "The Phone is wrong. Only numbers and a length of 10 characters";
            errorParagraphPhoneEmployee.classList.add("error-text");
            divs[4].appendChild(errorParagraphPhoneEmployee);
            return false;
        }
        phoneEmployee.classList.add("green-border");
        return true;
    }

    function checkAddressEmployee (){
        if (addressEmployee.value.length == 0){
            addressEmployee.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(addressEmployee.value) || addressEmployee.value.length < 5 ||
        addressEmployee.value.indexOf(" ") == -1){
            addressEmployee.classList.add("red-border");
            errorParagraphAddressEmployee.textContent =
            "The Address is wrong. Letters and numbers allowed and must have 5 characters and a space";
            errorParagraphAddressEmployee.classList.add("error-text");
            divs[5].appendChild(errorParagraphAddressEmployee);
            return false;
        }
        addressEmployee.classList.add("green-border");
        return true;
    }

    function checkLocationEmployee (){
        if (locationEmployee.value.length == 0){
            locationEmployee.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(locationEmployee.value) || locationEmployee.value.length < 3){
            locationEmployee.classList.add("red-border");
            errorParagraphLocationEmployee.textContent =
            "The Location is wrong. Letters and numbers allowed and must have 3 letters or more";
            errorParagraphLocationEmployee.classList.add("error-text");
            divs[6].appendChild(errorParagraphLocationEmployee);
            return false;
        }
        locationEmployee.classList.add("green-border");
        return true;
    }

    function checkPostalCodeEmployee (){
        if (postalCodeEmployee.value.length == 0){
            postalCodeEmployee.classList.add("red-border");
            return false;
        }
        if (!isNumber(postalCodeEmployee.value) || postalCodeEmployee.value.length < 4 ||
        postalCodeEmployee.value.length > 5){
            postalCodeEmployee.classList.add("red-border");
            errorParagraphPostalCodeEmployee.textContent =
            "The Postal Colde is wrong. Only numbers and must have a length of 4 or 5 characters";
            errorParagraphPostalCodeEmployee.classList.add("error-text");
            divs[7].appendChild(errorParagraphPostalCodeEmployee);
            return false;
        }
        postalCodeEmployee.classList.add("green-border");
        return true;
    }

    function checkEmailEmployee (){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (emailEmployee.value.length==0){
            emailEmployee.classList.add("red-border");
            return false;
        }
        if (!emailExpression.test(emailEmployee.value)){
            emailEmployee.classList.add("red-border");
            errorParagraphEmailEmployee.textContent = "The Email is wrong.";
            errorParagraphEmailEmployee.classList.add("error-text");
            divs[8].appendChild(errorParagraphEmailEmployee);
            return false;
        }
        else{
            emailEmployee.classList.add("green-border");
            return true;
        }
    }
    function checkPasswordEmployee (){
        if (passwordEmployee.value.length == 0){
            passwordEmployee.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(passwordEmployee.value) || passwordEmployee.value.length < 8){
            passwordEmployee.classList.add("red-border");
            errorParagraphPasswordEmployee.textContent =
            "The password is wrong. Letters and numbers allowed and must have 8 characters or more";
            errorParagraphPasswordEmployee.classList.add("error-text");
            divs[9].appendChild(errorParagraphPasswordEmployee);
            return false;
        }
        passwordEmployee.classList.add("green-border");
        return true;
    }

    function checkPasswordRepeatEmployee (){
        if (passwordRepeatEmployee.value.length == 0){
            passwordRepeatEmployee.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(passwordRepeatEmployee.value) || passwordRepeatEmployee.value.length < 8){
            passwordRepeatEmployee.classList.add("red-border");
            errorParagraphPasswordRepeatEmployee.textContent =
            "The password is wrong. Letters and numbers allowed and must have 8 characters or more";
            errorParagraphPasswordRepeatEmployee.classList.add("error-text");
            divs[10].appendChild(errorParagraphPasswordRepeatEmployee);
            return false;
        }
        if (passwordEmployee.value === passwordRepeatEmployee.value){
            passwordRepeatEmployee.classList.add("green-border");
            return true;
        }
        passwordRepeatEmployee.classList.add("red-border");
        errorParagraphPasswordRepeatEmployee.textContent = "The passwords don't match";
        errorParagraphPasswordRepeatEmployee.classList.add("error-text");
        divs[10].appendChild(errorParagraphPasswordRepeatEmployee);
        return false;
    }
    function isAlpha(stringInput){
        stringInput=stringInput.replaceAll(" ","");
        for (var i=0 ; i<stringInput.length ; i++){
            if ( stringInput[i] < 'A' || stringInput[i] > 'z' || (stringInput[i] > 'Z' && stringInput[i] < 'a')){
                return false;
            }
        }
        return true;
    }

    function isNumber(numberInput){
        for (var i=0 ; i<numberInput.length ; i++){
            if ( numberInput[i] < '0' || numberInput[i] > '9'){
                return false;
            }
        }
        return true;
    }

    function isAlphaNum (stringInput){
        stringInput=stringInput.replaceAll(" ","");
        for (var i=0 ; i<stringInput.length ; i++){
            if (stringInput[i] < '0' || stringInput[i] > 'z' ||
            (stringInput[i] > '9' && stringInput[i] < 'A') ||
            (stringInput[i] > 'Z' && stringInput[i] < 'a')){
                return false;
            }
        }
        return true;
    }
    function getDate(date){
        var day = date.slice(8);
        var month = date.slice(5,7);
        var year = date.slice(0,4);
        return (day + "/" + month + "/" + year);
    }
}
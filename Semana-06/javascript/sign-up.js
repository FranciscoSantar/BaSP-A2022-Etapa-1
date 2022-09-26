window.onload = function () {
    var signUpForm = document.getElementById("sign-up-form");
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
    var labels = document.getElementsByTagName("label");
    var errorParagraphNameEmployee = document.createElement('p');
    var errorParagraphLastnameEmployee = document.createElement('p');
    var errorParagraphDniEmployee = document.createElement('p');
    var errorParagraphPhoneEmployee = document.createElement('p');
    var errorParagraphAddressEmployee = document.createElement('p');
    var errorParagraphLocationEmployee = document.createElement('p');
    var errorParagraphPostalCodeEmployee = document.createElement('p');
    var errorParagraphEmailEmployee = document.createElement('p');
    var errorParagraphPasswordEmployee = document.createElement('p');

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
        errorParagraphPasswordEmployee.remove();
    }

    sumbit.onclick = function (e){
        e.preventDefault();
        if (!checkNameEmployee()){
            alert("The Name has an error. Please fix it");
        }
        if (!checkLastnameEmployee()){
            alert("The Lastame has an error. Please fix it");
        }
        if (!checkDniEmployee()){
            alert("The DNI has an error. Please fix it");
        }
        if (!checkPhoneEmployee()){
            alert("The Phone has an error. Please fix it");
        }
        if (!checkLocationEmployee()){
            alert("The Location has an error. Please fix it");
        }
        if (!checkPostalCodeEmployee()){
            alert("The Postal Code has an error. Please fix it");
        }
        if (!checkEmailEmployee()){
            alert("The Email has an error. Please fix it");
        }
        if (!checkPasswordEmployee()){
            alert("The Password has an error. Please fix it");
        }
        if (!checkPasswordRepeatEmployee()){
            alert("The Repeat Password has an error. Please fix it");
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
        if (nameEmployee.value.length==0){
            nameEmployee.classList.add("red-border");
            return false;
        }
        if(!isAlpha(nameEmployee.value) || nameEmployee.value.length<3){
            nameEmployee.classList.add("red-border");
            addErrorText(errorParagraphNameEmployee,labels[1],"Name");
            return false;
        }
        nameEmployee.classList.add("green-border");
        return true;
    }

    function checkLastnameEmployee(){
        if (lastnameEmployee.value.length==0){
            lastnameEmployee.classList.add("red-border");
            return false;
        }
        if(!isAlpha(lastnameEmployee.value) || lastnameEmployee.value.length<3){
            lastnameEmployee.classList.add("red-border");
            addErrorText(errorParagraphLastnameEmployee,labels[2],"Lastname");
            return false;
        }
        lastnameEmployee.classList.add("green-border");
        return true;
    }
    function checkDniEmployee (){
        if (dniEmployee.value.length==0){
            dniEmployee.classList.add("red-border");
            return false;
        }
        if(!isNumber(dniEmployee.value) || dniEmployee.value.length<7){
            dniEmployee.classList.add("red-border");
            addErrorText(errorParagraphDniEmployee,labels[3],"Dni");
            return false;
        }
        dniEmployee.classList.add("green-border");
        return true;
    }

    function checkPhoneEmployee (){
        if (phoneEmployee.value.length==0){
            phoneEmployee.classList.add("red-border");
            return false;
        }
        if(!isNumber(phoneEmployee.value) || phoneEmployee.value.length!=10){
            phoneEmployee.classList.add("red-border");
            addErrorText(errorParagraphPhoneEmployee,labels[5],"Phone");
            return false;
        }
        phoneEmployee.classList.add("green-border");
        return true;
    }

    function checkAddressEmployee (){
        if (addressEmployee.value.length==0){
            addressEmployee.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(addressEmployee.value) || addressEmployee.value.length <5 ||
        addressEmployee.value.indexOf(" ")==-1){

            addressEmployee.classList.add("red-border");
            addErrorText(errorParagraphAddressEmployee,labels[6],"Address");
            return false;
        }
        addressEmployee.classList.add("green-border");
        return true;
    }

    function checkLocationEmployee (){
        if (locationEmployee.value.length==0){
            locationEmployee.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(locationEmployee.value) || locationEmployee.value.length <3){
            locationEmployee.classList.add("red-border");
            addErrorText(errorParagraphLocationEmployee,labels[7],"Location");
            return false;
        }
        locationEmployee.classList.add("green-border");
        return true;
    }

    function checkPostalCodeEmployee (){
        if (postalCodeEmployee.value.length==0){
            postalCodeEmployee.classList.add("red-border");
            return false;
        }
        if (!isNumber(postalCodeEmployee.value) || postalCodeEmployee.value.length < 4 ||
        postalCodeEmployee.value.length > 5){
            postalCodeEmployee.classList.add("red-border");
            addErrorText(errorParagraphPostalCodeEmployee,labels[8],"Postal Code");
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
            addErrorText(errorParagraphEmailEmployee,labels[9],"Email");
            return false;
        }
        else{
            emailEmployee.classList.add("green-border");
            return true;
        }
    }

    function checkPasswordEmployee (){
        if (passwordEmployee.value.length==0){
            passwordEmployee.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(passwordEmployee.value) || passwordEmployee.value.length<8){
            passwordEmployee.classList.add("red-border");
            addErrorText(errorParagraphPasswordEmployee,labels[10],"Password");
            return false;
        }
        passwordEmployee.classList.add("green-border");
        return true;
    }

    function checkPasswordRepeatEmployee (){
        if (passwordRepeatEmployee.value.length==0){
            passwordRepeatEmployee.classList.add("red-border");
            return false;
        }
        if (!isAlphaNum(passwordRepeatEmployee.value) || passwordRepeatEmployee.value.length<8){
            passwordRepeatEmployee.classList.add("red-border");
            addErrorText(errorParagraphPasswordEmployee,sumbit,"Password");
            return false;
        }
        if (passwordEmployee.value === passwordRepeatEmployee.value){
            passwordRepeatEmployee.classList.add("green-border");
            return true;
        }
        passwordRepeatEmployee.classList.add("purple-border");
        addErrorText(errorParagraphPasswordEmployee,sumbit,"wrongPassword");
        return false;
    }
    //Tambien se podria stringInput.toUpperCase() y chequear entre 'A' y 'Z', no se que opcion seria mejor
    function isAlpha(stringInput){
        for (var i=0 ; i<stringInput.length ; i++){
            if ( stringInput[i]<'A' || stringInput[i] >'z' || (stringInput[i]>'Z' && stringInput[i]<'a')){
                return false;
            }
        }
        return true;
    }

    function isNumber(numberInput){
        for (var i=0 ; i<numberInput.length ; i++){
            if ( numberInput[i]<'0' || numberInput[i] >'9'){
                return false;
            }
        }
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
    function getDate(date){
        var day = date.slice(8);
        var month = date.slice(5,7);
        var year = date.slice(0,4);
        return (day+"/"+month+"/"+year);
    }
    function addErrorText(paragraph,label,topic){
        if (topic ==="wrongPassword"){
            paragraph.textContent = "The passwords don't match, please fix it.";
        }
        else{
            paragraph.textContent = "Wrong format of the " +topic+" , please fix it.";
        }

        paragraph.classList.add("error-text");
        signUpForm.insertBefore(paragraph, label);
    }
}
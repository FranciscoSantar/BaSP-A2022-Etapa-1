window.onload = function () {
    var nameEmployee = document.getElementById("sign-up-name");
    var lastnameEmployee = document.getElementById("sign-up-lastname");
    var dniEmployee = document.getElementById("sign-up-dni");
    var dateEmployee = document.getElementById("sign-up-date");
    var addressEmployee = document.getElementById("sign-up-address");
    var phoneEmployee = document.getElementById("sign-up-phone");
    var sumbit = document.getElementById("sumbit-button");
    var errorParagraphNameEmployee = document.createElement('p');
    var errorParagraphLastnameEmployee = document.createElement('p');
    var errorParagraphDniEmployee = document.createElement('p');
    var errorParagraphPhoneEmployee = document.createElement('p');
    var errorParagraphAddressEmployee = document.createElement('p');

    nameEmployee.onblur = function (){
        checkNameEmployee ();
    }
    nameEmployee.onfocus = function (){
        nameEmployee.classList.remove("green-border","red-border");
        // errorParagraphNameEmployee.remove();
    }

    lastnameEmployee.onblur = function (){
        checkLastnameEmployee ();
    }
    lastnameEmployee.onfocus = function (){
        lastnameEmployee.classList.remove("green-border","red-border");
        // errorParagraphNameEmployee.remove();
    }

    dniEmployee.onblur = function (){
        checkDniEmployee ();
    }
    dniEmployee.onfocus = function (){
        dniEmployee.classList.remove("green-border","red-border");
        // errorParagraphNameEmployee.remove();
    }

    phoneEmployee.onblur = function (){
        checkPhoneEmployee ();
    }
    phoneEmployee.onfocus = function (){
        phoneEmployee.classList.remove("green-border","red-border");
        // errorParagraphNameEmployee.remove();
    }

    addressEmployee.onblur = function (){
        checkAddressEmployee ();
    }
    addressEmployee.onfocus = function (){
        addressEmployee.classList.remove("green-border","red-border");
        // errorParagraphNameEmployee.remove();
    }

    sumbit.onclick = function (e){
        e.preventDefault();
    }
    //------------------------------------------------------------------------
    function checkNameEmployee(){
        if(!isAlpha(nameEmployee.value) || nameEmployee.value.length<3){
            nameEmployee.classList.add("red-border");
            errorParagraphNameEmployee.textContent = "Wrong format of the Password, please fix it.";
            errorParagraphNameEmployee.classList.add("error-text");
            return false;
        }
        nameEmployee.classList.add("green-border");
        return true;
    }

    function checkLastnameEmployee(){
        if(!isAlpha(lastnameEmployee.value) || lastnameEmployee.value.length<3){
            lastnameEmployee.classList.add("red-border");
            errorParagraphLastnameEmployee.textContent = "Wrong format of the Password, please fix it.";
            errorParagraphLastnameEmployee.classList.add("error-text");
            return false;
        }
        lastnameEmployee.classList.add("green-border");
        return true;
    }
    function checkDniEmployee (){
        if(!isNumber(dniEmployee.value) || dniEmployee.value.length<7){
            dniEmployee.classList.add("red-border");
            errorParagraphDniEmployee.textContent = "Wrong format of the Password, please fix it.";
            errorParagraphDniEmployee.classList.add("error-text");
            return false;
        }
        dniEmployee.classList.add("green-border");
        return true;
    }

    function checkPhoneEmployee (){
        if(!isNumber(phoneEmployee.value) || phoneEmployee.value.length!=10){
            phoneEmployee.classList.add("red-border");
            errorParagraphPhoneEmployee.textContent = "Wrong format of the Password, please fix it.";
            errorParagraphPhoneEmployee.classList.add("error-text");
            return false;
        }
        phoneEmployee.classList.add("green-border");
        return true;
    }

    function checkAddressEmployee (){
        if (!isAlphaNum(addressEmployee.value) || addressEmployee.value.length <5 ||
            addressEmployee.value.indexOf(" ")==-1){

            addressEmployee.classList.add("red-border");
            errorParagraphAddressEmployee.textContent = "Wrong format of the Password, please fix it.";
            errorParagraphAddressEmployee.classList.add("error-text");
            return false;
        }
        addressEmployee.classList.add("green-border");
        return true;
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
}
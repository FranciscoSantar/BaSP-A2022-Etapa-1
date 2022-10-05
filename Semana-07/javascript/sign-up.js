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
    var nameDiv = document.getElementById("name-field");
    var lastNameDiv = document.getElementById("last-name-field");
    var dniDiv = document.getElementById("dni-field");
    var dateDiv = document.getElementById("date-field");
    var addressDiv = document.getElementById("address-field");
    var phoneDiv = document.getElementById("phone-field");
    var locationDiv = document.getElementById("location-field");
    var postalCodeDiv = document.getElementById("postal-code-field");
    var emailDiv = document.getElementById("email-field");
    var passwordDiv = document.getElementById("password-field");
    var passwordRepeatDiv = document.getElementById("password-repeat-field");
    var errorParagraphNameEmployee = document.createElement("p");
    var errorParagraphLastnameEmployee = document.createElement("p");
    var errorParagraphDniEmployee = document.createElement("p");
    var errorParagraphDateEmployee = document.createElement("p");
    var errorParagraphPhoneEmployee = document.createElement("p");
    var errorParagraphAddressEmployee = document.createElement("p");
    var errorParagraphLocationEmployee = document.createElement("p");
    var errorParagraphPostalCodeEmployee = document.createElement("p");
    var errorParagraphEmailEmployee = document.createElement("p");
    var errorParagraphPasswordEmployee = document.createElement("p");
    var errorParagraphPasswordRepeatEmployee = document.createElement("p");
    var textModal = document.createElement("p");
    var signUpModal = document.getElementById("modal");
    var closeButton = document.getElementById("x-button");
    var modalButton = document.getElementById("button-modal");
    var modalContentText = document.getElementById("text-content");

    closeButton.onclick = function (){
        signUpModal.style.display = "none";
    }
    modalButton.onclick = function (){
        signUpModal.style.display = "none";
    }
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
        passwordRepeatEmployee.classList.remove("green-border","red-border");
        errorParagraphPasswordRepeatEmployee.remove();
    }

    if (localStorage.length){
        writeLocalStorage();
    }
    sumbit.onclick = function (e){
        e.preventDefault();
        var errorMesagge = '';
        var msgName = '';
        var msgLastName = '';
        var msgDni = '';
        var msgDate = '';
        var msgPhone = '';
        var msgAddress = '';
        var msgLocation = '';
        var msgPostalCode = '';
        var msgEmail = '';
        var msgPassword = '';
        var msgPasswordRepeat = '';
        var anyError = false;
        var urlSignUp = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';

        msgName = checkNameEmployee(msgName);
        msgLastName = checkLastnameEmployee(msgLastName);
        msgDni = checkDniEmployee(msgDni);
        msgDate = checkDateEmployee(msgDate);
        msgPhone = checkPhoneEmployee(msgPhone);
        msgAddress = checkAddressEmployee(msgAddress);
        msgLocation = checkLocationEmployee(msgLocation);
        msgPostalCode = checkPostalCodeEmployee(msgPostalCode);
        msgEmail = checkEmailEmployee(msgEmail);
        msgPassword = checkPasswordEmployee(msgPassword)
        msgPasswordRepeat = checkPasswordRepeatEmployee(msgPasswordRepeat);
        if (msgName != 'ok'){
            errorMesagge += '*' + msgName + '\n';
            anyError = true;
        } if (msgLastName != 'ok'){
            errorMesagge += '*' + msgLastName + '\n';
            anyError = true;
        } if (msgDni != 'ok'){
            errorMesagge += '*' + msgDni + '\n';
            anyError = true;
        } if (msgDate != 'ok'){
            errorMesagge += '*' + msgDate + '\n';
            anyError = true;
        }  if (msgPhone != 'ok'){
            errorMesagge += '*' + msgPhone + '\n';
            anyError = true;
        }if (msgAddress != 'ok'){
            errorMesagge += '*' + msgAddress + '\n';
            anyError = true;
        } if (msgLocation != 'ok'){
            errorMesagge += '*' + msgLocation + '\n';
            anyError = true;
        } if (msgPostalCode != 'ok'){
            errorMesagge += '*' + msgPostalCode + '\n';
            anyError = true;
        } if (msgEmail != 'ok'){
            errorMesagge += '*' + msgEmail + '\n';
            anyError = true;
        } if (msgPassword != 'ok'){
            errorMesagge += '*' + msgPassword + '\n';
            anyError = true;
        } if (msgPasswordRepeat != 'ok'){
            errorMesagge += '*' + msgPasswordRepeat + '\n';
            anyError = true;
        } if (anyError){
            alert(errorMesagge);
            return false;
        } else{
            urlSignUp = addQueryParamsUrl(
                        urlSignUp, nameEmployee.value, lastnameEmployee.value, dniEmployee.value, dateEmployee.value,
                        phoneEmployee.value, addressEmployee.value, locationEmployee.value, postalCodeEmployee.value,
                        emailEmployee.value, passwordEmployee.value);
            fetch(urlSignUp)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                if(data.success){
                    signUpModal.style.display = "block";
                    textModal.classList.remove("good-modal","error-modal");
                    modalButton.classList.remove("good-button","error-button");
                    textModal.innerText ='¡Successful Sign Up!\nMessage: '+data.msg;
                    textModal.classList.add("good-modal");
                    modalButton.classList.add("good-button");
                    modalContentText.appendChild(textModal);
                    addLocalStorage(nameEmployee.value, lastnameEmployee.value, dniEmployee.value, dateEmployee.value,
                        phoneEmployee.value, addressEmployee.value, locationEmployee.value, postalCodeEmployee.value,
                        emailEmployee.value, passwordEmployee.value);
                } else{
                    var msgError = '';
                    for (var i = 0 ; i<data.errors.length ; i++){
                        msgError += data.errors[i].msg + '\n';
                    }
                    throw new Error ('Sign Up Error!\nMessage: ' + msgError);
                };
            })
            .catch(function (error){
                signUpModal.style.display = "block";
                textModal.classList.remove("good-modal","error-modal");
                modalButton.classList.remove("good-button","error-button");
                textModal.innerText = 'Sign up Error!\n' + error.message;
                textModal.classList.add("error-modal");
                modalButton.classList.add("error-button");
                modalContentText.appendChild(textModal);
            })
            alert('Name: ' + nameEmployee.value + '\nLastname: ' + lastnameEmployee.value +
                '\nDNI: ' + dniEmployee.value + '\nBirth Date: ' + getDate(dateEmployee.value) +
                '\nPhone: ' + phoneEmployee.value + '\nAddress: ' + addressEmployee.value +
                '\nLocalion: ' + locationEmployee.value + '\nPostal Code: ' + postalCodeEmployee.value +
                '\nEmail: ' + emailEmployee.value + '\nPassword: ' + passwordEmployee.value);
            return true;
        }
    }
    function checkNameEmployee (msg){
        if (nameEmployee.value.length == 0){
            nameEmployee.classList.add("red-border");
            msg = 'The Name is required.';
            errorParagraphNameEmployee.textContent = msg;
            errorParagraphNameEmployee.classList.add("error-text");
            nameDiv.appendChild(errorParagraphNameEmployee);
            return msg;
        } if(!isAlpha(nameEmployee.value) || nameEmployee.value.length < 4){
            nameEmployee.classList.add("red-border");
            msg = 'The name is wrong. Only letters and a length of 3 characters';
            errorParagraphNameEmployee.textContent = msg;
            errorParagraphNameEmployee.classList.add("error-text");
            nameDiv.appendChild(errorParagraphNameEmployee);
            return msg;
        }
        nameEmployee.classList.add("green-border");
        msg= 'ok';
        return msg;
    }
    function checkLastnameEmployee (msg){
        if (lastnameEmployee.value.length == 0){
            lastnameEmployee.classList.add("red-border");
            msg = 'The Last Name is required.';
            errorParagraphLastnameEmployee.textContent =msg;
            errorParagraphLastnameEmployee.classList.add("error-text");
            lastNameDiv.appendChild(errorParagraphLastnameEmployee);
            return msg;
        } if(!isAlpha(lastnameEmployee.value) || lastnameEmployee.value.length < 4){
            lastnameEmployee.classList.add("red-border");
            msg = 'The Lastname is wrong. Only letters and a length of 3 characters';
            errorParagraphLastnameEmployee.textContent = msg;
            errorParagraphLastnameEmployee.classList.add("error-text");
            lastNameDiv.appendChild(errorParagraphLastnameEmployee);
            return msg;
        }
        lastnameEmployee.classList.add("green-border");
        msg='ok';
        return msg;
    }
    function checkDniEmployee (msg){
        if (dniEmployee.value.length == 0){
            dniEmployee.classList.add("red-border");
            msg = 'The DNI is required.';
            errorParagraphDniEmployee.textContent = msg;
            errorParagraphDniEmployee.classList.add("error-text");
            dniDiv.appendChild(errorParagraphDniEmployee);
            return msg;
        } if(!isNumber(dniEmployee.value) || dniEmployee.value.length < 7 || dniEmployee.value.length > 8){
            dniEmployee.classList.add("red-border");
            msg = 'The DNI is wrong. Only number and a length of 7 or 8 characters';
            errorParagraphDniEmployee.textContent = msg;
            errorParagraphDniEmployee.classList.add("error-text");
            dniDiv.appendChild(errorParagraphDniEmployee);
            return msg;
        }
        dniEmployee.classList.add("green-border");
        msg = 'ok';
        return msg;
    }
    function checkDateEmployee (msg){
        var bornYear = dateEmployee.value.slice(0,4);
        var actualYear = new Date().getFullYear();
        if (bornYear == ''){
            dateEmployee.classList.add("red-border");
            msg = 'The Born Date is required.';
            errorParagraphDateEmployee.textContent = msg;
            errorParagraphDateEmployee.classList.add("error-text");
            dateDiv.appendChild(errorParagraphDateEmployee);
            return msg;
        } if (actualYear-bornYear<18){
            dateEmployee.classList.add("red-border");
            msg = 'The Employee must be over 18 years old';
            errorParagraphDateEmployee.textContent = msg;
            errorParagraphDateEmployee.classList.add("error-text");
            dateDiv.appendChild(errorParagraphDateEmployee);
            return msg;
        }
        dateEmployee.classList.add("green-border");
        msg = 'ok';
        return msg;
    }
    function checkPhoneEmployee (msg){
        if (phoneEmployee.value.length == 0){
            phoneEmployee.classList.add("red-border");
            msg = 'The Phone is required.';
            errorParagraphPhoneEmployee.textContent = msg;
            errorParagraphPhoneEmployee.classList.add("error-text");
            phoneDiv.appendChild(errorParagraphPhoneEmployee);
            return msg;
        } if(!isNumber(phoneEmployee.value) || phoneEmployee.value.length != 10){
            phoneEmployee.classList.add("red-border");
            msg = 'The Phone is wrong. Only numbers and a length of 10 characters';
            errorParagraphPhoneEmployee.textContent = msg;
            errorParagraphPhoneEmployee.classList.add("error-text");
            phoneDiv.appendChild(errorParagraphPhoneEmployee);
            return msg;
        }
        phoneEmployee.classList.add("green-border");
        msg = 'ok';
        return msg;
    }
    function checkAddressEmployee (msg){
        if (addressEmployee.value.length == 0){
            addressEmployee.classList.add("red-border");
            msg = 'The Address is required.';
            errorParagraphAddressEmployee.textContent = msg;
            errorParagraphAddressEmployee.classList.add("error-text");
            addressDiv.appendChild(errorParagraphAddressEmployee);
            return msg;
        } if (!isAlphaNum(addressEmployee.value) || addressEmployee.value.length < 5 ||
            addressEmployee.value.indexOf(' ') == -1 || addressEmployee.value.split(' ').length > 2){
            addressEmployee.classList.add("red-border");
            msg = "The Address is wrong. Letters and numbers allowed and must have 5 characters and only one space";
            errorParagraphAddressEmployee.textContent = msg;
            errorParagraphAddressEmployee.classList.add("error-text");
            addressDiv.appendChild(errorParagraphAddressEmployee);
            return msg;
        }
        addressEmployee.classList.add("green-border");
        msg = 'ok';
        return msg;
    }
    function checkLocationEmployee (msg){
        if (locationEmployee.value.length == 0){
            locationEmployee.classList.add("red-border");
            msg = 'The Location is required.';
            errorParagraphLocationEmployee.textContent = msg;
            errorParagraphLocationEmployee.classList.add("error-text");
            locationDiv.appendChild(errorParagraphLocationEmployee);
            return msg;
        } if (!isAlphaNum(locationEmployee.value) || locationEmployee.value.length < 3){
            locationEmployee.classList.add("red-border");
            msg = 'The Location is wrong. Letters and numbers allowed and must have 3 letters or more';
            errorParagraphLocationEmployee.textContent = msg;
            errorParagraphLocationEmployee.classList.add("error-text");
            locationDiv.appendChild(errorParagraphLocationEmployee);
            return msg;
        }
        locationEmployee.classList.add("green-border");
        msg = 'ok';
        return msg;
    }
    function checkPostalCodeEmployee (msg){
        if (postalCodeEmployee.value.length == 0){
            postalCodeEmployee.classList.add("red-border");
            msg = 'The Postal code is required.';
            errorParagraphPostalCodeEmployee.textContent = msg;
            errorParagraphPostalCodeEmployee.classList.add("error-text");
            postalCodeDiv.appendChild(errorParagraphPostalCodeEmployee);
            return msg;
        } if (!isNumber(postalCodeEmployee.value) || postalCodeEmployee.value.length < 4 ||
        postalCodeEmployee.value.length > 5){
            postalCodeEmployee.classList.add("red-border");
            msg = 'The Postal Colde is wrong. Only numbers and must have a length of 4 or 5 characters';
            errorParagraphPostalCodeEmployee.textContent = msg;
            errorParagraphPostalCodeEmployee.classList.add("error-text");
            postalCodeDiv.appendChild(errorParagraphPostalCodeEmployee);
            return msg;
        }
        postalCodeEmployee.classList.add("green-border");
        msg = 'ok';
        return msg;
    }
    function checkEmailEmployee (msg){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (emailEmployee.value.length==0){
            emailEmployee.classList.add("red-border");
            msg = 'The Email is required.';
            errorParagraphEmailEmployee.textContent = msg;
            errorParagraphEmailEmployee.classList.add("error-text");
            emailDiv.appendChild(errorParagraphEmailEmployee);
            return msg;
        } if (!emailExpression.test(emailEmployee.value)){
            emailEmployee.classList.add("red-border");
            msg = 'Wrong format of the Email, please fix it.';
            errorParagraphEmailEmployee.textContent = msg;
            errorParagraphEmailEmployee.classList.add("error-text");
            emailDiv.appendChild(errorParagraphEmailEmployee);
            return msg;
        }
        else{
            emailEmployee.classList.add("green-border");
            msg = 'ok';
            return msg;
        }
    }
    function checkPasswordEmployee (msg){
        if (passwordEmployee.value.length == 0){
            passwordEmployee.classList.add("red-border");
            msg = 'The Password is required';
            errorParagraphPasswordEmployee.textContent = msg;
            errorParagraphPasswordEmployee.classList.add("error-text");
            passwordDiv.appendChild(errorParagraphPasswordEmployee);
            return msg;
        } if (!isAlphaNum(passwordEmployee.value) || passwordEmployee.value.length < 8){
            passwordEmployee.classList.add("red-border");
            msg = 'The Password is wrong. Letters and numbers allowed and must have 8 characters or more';
            errorParagraphPasswordEmployee.textContent = msg;
            errorParagraphPasswordEmployee.classList.add("error-text");
            passwordDiv.appendChild(errorParagraphPasswordEmployee);
            return msg;
        }
        passwordEmployee.classList.add("green-border");
        msg = 'ok';
        return msg;
    }
    function checkPasswordRepeatEmployee (msg){
        if (passwordRepeatEmployee.value.length == 0){
            passwordRepeatEmployee.classList.add("red-border");
            msg = 'The Password is required.';
            errorParagraphPasswordRepeatEmployee.textContent = msg;
            errorParagraphPasswordRepeatEmployee.classList.add("error-text");
            passwordRepeatDiv.appendChild(errorParagraphPasswordRepeatEmployee);
            return msg;
        } if (!isAlphaNum(passwordRepeatEmployee.value) || passwordRepeatEmployee.value.length < 8){
            passwordRepeatEmployee.classList.add("red-border");
            msg = 'The Password is wrong. Letters and numbers allowed and must have 8 characters or more';
            errorParagraphPasswordRepeatEmployee.textContent = msg;
            errorParagraphPasswordRepeatEmployee.classList.add("error-text");
            passwordRepeatDiv.appendChild(errorParagraphPasswordRepeatEmployee);
            return msg;
        } if (passwordEmployee.value === passwordRepeatEmployee.value){
            passwordRepeatEmployee.classList.add("green-border");
            msg = 'ok';
            return msg;
        }
        passwordRepeatEmployee.classList.add("red-border");
        msg = 'The Passwords dont match';
        errorParagraphPasswordRepeatEmployee.textContent = msg;
        errorParagraphPasswordRepeatEmployee.classList.add("error-text");
        passwordRepeatDiv.appendChild(errorParagraphPasswordRepeatEmployee);
        return msg;
    }

    function isAlpha (stringInput){
        stringInput=stringInput.replaceAll(' ','');
        for (var i=0 ; i<stringInput.length ; i++){
            if ( stringInput[i] < 'A' || stringInput[i] > 'z' || (stringInput[i] > 'Z' && stringInput[i] < 'a')){
                return false;
            }
        }
        return true;
    }
    function isNumber (numberInput){
        for (var i=0 ; i<numberInput.length ; i++){
            if ( numberInput[i] < '0' || numberInput[i] > '9'){
                return false;
            }
        }
        return true;
    }

    function isAlphaNum (stringInput){
        stringInput=stringInput.replaceAll(' ','');
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
        return (day + '/' + month + '/' + year);
    }
    function getDate2(date){
        var day = date.slice(8);
        var month = date.slice(5,7);
        var year = date.slice(0,4);
        return (month + '/' + day + '/' + year);
    }
    function  addQueryParamsUrl (url,name,lastName,dni,date,phone,address,location,pc,email,password){
        date=getDate2(date);
        return url+'?name='+name+'&lastName='+lastName+'&dni='+dni+'&dob='+date+'&phone='+phone+
        '&address='+address+'&city='+location+'&zip='+pc+'&email='+email+'&password='+password;
    }
    function addLocalStorage (name,lastName,dni,date,phone,address,location,pc,email,password){
        localStorage.setItem('name',name);
        localStorage.setItem('lastName',lastName);
        localStorage.setItem('dni',dni);
        localStorage.setItem('dob',date);
        localStorage.setItem('phone',phone);
        localStorage.setItem('address',address);
        localStorage.setItem('city',location);
        localStorage.setItem('zip',pc);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
    }
    function writeLocalStorage (){
        nameEmployee.value = localStorage.getItem('name');
        lastnameEmployee.value = localStorage.getItem('lastName');
        dniEmployee.value = localStorage.getItem('dni');
        dateEmployee.value = localStorage.getItem('dob');
        phoneEmployee.value = localStorage.getItem('phone');
        addressEmployee.value = localStorage.getItem('address');
        locationEmployee.value = localStorage.getItem('city');
        postalCodeEmployee.value = localStorage.getItem('zip');
        emailEmployee.value = localStorage.getItem('email');
        passwordEmployee.value = localStorage.getItem('password');
        passwordRepeatEmployee.value = localStorage.getItem('password');
    }
}
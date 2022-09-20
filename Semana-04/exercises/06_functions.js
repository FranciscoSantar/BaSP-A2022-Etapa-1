/**************************************
 *       Exercise 6: Functions        *
 *************************************/

/*a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
la consola del navegador.*/
function sum(num1, num2){
    return (num1+num2);
}
result=sum(5,7);
console.log("ex-06a:The result of the sum is: ",result);

/*b) A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número; de no ser un número, mostrar una alerta aclarando que
uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
function sum2(num1,num2){
    if (typeof num1=='number' && typeof num2=='number'){
        return (num1+num2);
    }
    else{
        alert("ex-06b: At least one of the parameters isn't a number");
        return NaN;
    }
}
result2=sum2(123,456);
console.log("ex-06b:The result of the sum is: ",result2);

/*c) Aparte, crear una función validate Integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/
function isInteger(num1){
    return Number.isInteger(num1);
}
result3=isInteger(34);
console.log("ex-06c:The number is integer?: ",result3);

/*d) A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y
que valide que los números sean enteros. En caso que haya decimales mostrar un alerta
con el error y retornar el número convertido a entero (redondeado).*/
function sum3(num1,num2){
    if (typeof num1!='number' || typeof num2!='number'){
        alert("ex-06d: At least one of the parameters isn't a number");
        return NaN;
    }
    if (!isInteger(num1)){
        alert("ex-06d: The first number was a float");
        num1=Math.round(num1);
    }
    if (!isInteger(num2)){
        alert("ex-06d: The second number was a float");
        num2=Math.round(num2);
    }
    return(num1+num2);
}
result4=sum3(34.5,15.6);
console.log("ex-06d:The result of the sum is: ",result4);

/*e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual.*/
function check(num1,num2){
    if (typeof num1!='number' || typeof num2!='number'){
        return (NaN,NaN);
    }
    if (!isInteger(num1)){
        alert("ex-06e: The first number was a float");
        num1=Math.round(num1);
    }
    if (!isInteger(num2)){
        alert("ex-06e: The second number was a float");
        num2=Math.round(num2);
    }
    return(num1,num2);
}

function sum4(num1,num2){
    num1,num2=check(num1,num2);
    if (isNaN(num1) || isNaN(num2)){
        alert("ex-06e: At least one of the parameters isn't a number");
        return NaN;
    }
    return(num1+num2);
}
result5=sum4(20,15.5);
console.log("ex-06e:The result of the sum is: ",result5);

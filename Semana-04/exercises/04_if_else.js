/**************************************
 *       Exercise 4: If-Else          *
 *************************************/

/* a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un
alerta con el mensaje “Lower than 0,5”.*/
var number=Math.random();
if (number>=0.5){
    alert("ex-04a: Greater than 0,5");
}
else{
    alert("ex-04a: Lower than 0,5");
}

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los
siguientes mensajes de alerta:
i) “Bebe” si la edad es menor a 2 años;
ii) “Niño” si la edad es entre 2 y 12 años;
iii) “Adolescente” entre 13 y 19 años;
iv) “Joven” entre 20 y 30 años;
v) “Adulto” entre 31 y 60 años;
vi) “Adulto mayor” entre 61 y 75 años;
vii) “Anciano” si es mayor a 75 años.*/
var age=2;
if (age>75){
    alert("ex-04b: Es un anciano");
}
else if (age>60){
    alert("ex-04b: Es un adulto mayor");
}
else if (age>30){
    alert("ex-04b: Es un adulto");
}
else if (age>19){
    alert("ex-04b: Es un joven");
}
else if (age>12){
    alert("ex-04b: Es un adolescente");
}
else if (age>1){
    alert("ex-04b: Es un nino");
}
else{
    alert("ex-04b: Es un bebe");
}
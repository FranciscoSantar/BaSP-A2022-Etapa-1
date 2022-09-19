/**************************************
 *       Exercise 3: Arrays           *
 *************************************/

/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los
meses 5 y 11 (utilizar console.log).*/

var months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex-03a: The 5th month is:",months[4],"and the 11th month is:",months[10]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log("ex-03b: The months in alphabetical order are:",months.sort());

/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

months.unshift("First");
months.push("Last");
console.log("ex-03c: The array with a new element at the beginning and at the end is:",months);

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

months.shift();
months.pop();
console.log("ex-03d: The array after remove the first and last element is:",months);

/* e) Invertir el orden del array (utilizar reverse). */

months.reverse();
console.log("ex-03e: The array with reverse order is:",months);

/* f) Unir todos los elementos del array en un único string donde cada mes este separado por
un guión - (utilizar join).*/
var resultExerciseF=months.join("-");
console.log("ex-03f: The array in a String with his element separated whit a '-' is,",resultExerciseF);

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar
slice).*/
var months2=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var someMonths=months2.slice(4,11);
console.log("The array with the months from May to November is:",someMonths);
/**************************************
 *       Exercise 2: Strings          *
 *************************************/

/*a) Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var text1="Programming";
console.log("ex-02a: The string in upper cases is:", text1.toUpperCase());

/*b) Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los primeros 5 caracteres guardando
el resultado en una nueva variable (utilizar substring).*/

var text2="Screwdrivers";
var resultExerciseB=text2.substring(0,5);
console.log("ex-02b: The first 5 letters in the string are:",resultExerciseB);

/*c) Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres guardando
el resultado en una nueva variable (utilizar substring).*/

var text3="PersonalComputer";
var resultExerciseC=text3.substring(text3.length-3,text3.length);
console.log("ex-02c: The last 3 letters of the string are:",resultExerciseC);

/*d) Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con la primera letra en mayúscula y las
demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var text4="fullstackDEveloper";
var resultExerciseD=text4.substring(0,1).toUpperCase()+text4.substring(1,text4.length).toLowerCase();
console.log("ex-02d: The string with the first letter capitalized is:",resultExerciseD);

/*e) Crear una variable de tipo string con al menos 10 caracteres
y algún espacio en blanco. Encontrar la posición del primer espacio
en blanco y guardarla en una variable (utilizar indexOf).*/

var text5="Travel around the world";
var resultExerciseE=text5.indexOf(" ");
console.log("ex-02e: The index of the first space in the string is:",resultExerciseE);

/*f) Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de
los ejercicios anteriores para generar un nuevo string que tenga la
primera letra de ambas palabras en mayúscula y las demás letras en
minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +).*/

var text6="learnING javaSCript";
var spaceIndex=text6.indexOf(" ");
var resultExerciseF=text6.substring(0,1).toUpperCase()+text6.substring(1,spaceIndex).toLowerCase()+" "
                +text6.substring(spaceIndex+1,spaceIndex+2).toUpperCase()+text6.substring(spaceIndex+2).toLowerCase();
console.log("ex-02f: The result of this excercise is:",resultExerciseF);
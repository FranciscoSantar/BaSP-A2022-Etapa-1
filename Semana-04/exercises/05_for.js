/**************************************
 *       Exercise 5: For              *
 *************************************/

/* a). Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
array1=["one","two","thREe","four","five"];
lengthArray=array1.length;
for(var i=0;i<lengthArray;i++){
    alert("ex-05a: "+array1[i]);
}

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
alerta por cada palabra modificada.*/
for (i=0;i<lengthArray;i++){
    alert("ex-05b: "+array1[i].substring(0,1).toUpperCase() + array1[i].substring(1,array1[i].length).toLowerCase());
}

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto
a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable
sentence. Al final mostrar una única alerta con la cadena completa.*/
var sentence="";
for (i=0;i<lengthArray;i++){
    sentence+=array1[i];
    sentence+=" ";
}
alert("ex-05c: "+sentence);

/*d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número
de la repetición, es decir que al final de la ejecución del bucle for debería haber 10
elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola
del navegador el array final (utilizar console.log).*/
array2=[];
for (i=0;i<10;i++){
    array2[i]=i;
}
console.log("ex-05d: ",array2);
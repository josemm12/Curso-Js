/*Declaraciones*/
/*Agregue punto y coma, aunque no es obligatorio 
pero si recomendable*/
let x, y, z;
x = 5;
y = 6;
z = x + y; 

/* se permiten varias declaraciones en una 
sola linea  si se separa con punto y coma*/
a = 5; b = 6; c= a + b;

/*Sentencias*/
/*Se componen de valores, operadores, expresiones, palabras clave y comentarios*/
/*Esta declaracion le dice al navegador que escriba Hello Dolly
 dentro de un elemento HTML con id="demo"*/
document.getElementById("demo").innerHTML = "Hello Dolly.";

/*Bloques de Codigo*/
/*Las sentencias pueden agruparse en bloques de codigo*/
/*En las funciones es donde mas se encuentran*/
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly.";
    document.getElementById("demo2").innerHTML = "How are you?";
}

/*Palabras clave*/
/*Las palabras clave son usadas para identificar acciones a realizar*/
/*Las palabras clave son: var, let, const, if, else, for, while, etc.*/
/*var //declara una variable
let //declara una variable de bloque
const //declara una constante   
if //declara una condicion
switch //declara una seleccion multiple
for //declara un bucle
function //declara una funcion
return  //declara una funcion   
try //declara un bloque de manejo de errores*/

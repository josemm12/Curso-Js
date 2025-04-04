//Funciones
//Bloque que realiza una tarea especifica
//Se ejecuta cuando se le invoca
/*Se puede reutilizar, utilizar muchas veces y darles diferentes regumentos
para resultados diferentes*/

let p1 = 5;
let p2 = 10;

//Dentro de los parentesis se le pasan los parametros
//Los argumentos son los valores que recibe la funcion cuando se invoca
function myFunction(p1, p2) {
    return p1 * p2;
}

console.log(myFunction(p1, p2));


//Funcion de return

//El valor de retorno terminara en x
let x = myFunction(4, 3);
console.log(x);

//La funcion devuelve el producto de a y b
function myFunctions(a,b) {
    return a * b;
}

//Acceder a la funcion sin () devuelve la funcion pero no el resultado de la misma
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
console.log(value);

//Funciones como valores de variables
let a = toCelsius(77);
let text = "La temperatura es " + a + " Celsius";
console.log(text);

//Funciones como valores de variables
let text1 = "La temperatura es " + toCelsius(77) + " Celsius";
console.log(text1);


//Variables locales
//Solo se reconocen dentro de la funcion
//Con el mismo nombre pueden ser usadas en diferentes funciones

//Code here can NOT use carName

function myFunction() {
    let carName = "Volvo";

    //Code here CAN use carName
}

//Code here can NOT use carName
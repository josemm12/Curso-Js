//Son Buenas practicas declarar siempre las variables antes de uso
// var, let, const palabras claves para declarar variables
// var solo se debe utilizar para navegadores antiguos

var x = 5;
var y = 6;
var z = x + y;

let a = 5;
let b = 6;  //let se utiliza para variables que se van a reasignar
let c = a + b;

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

//Operador de asignacion
let x = 10; // = asigna un valor a una variable
let == 20; // == es igual a ese valor

//Declarar una variable
let carName; //No tiene valor asignado (undefined)
carName = "Volvo"; //Asignar un valor a la variable

//Tambien puede asignarse el valor cuando se declara
let carName1 = "volvo";

//Afirmacion, muchas variables
let person = "John Doe", carName2 = "Volvo", price = 200; //separar con comas

//Puede ser varias lineas
let person2 = "John Doe",
carName3 = "Volvo",
price3 = 200;

//Redeclaraciones 
var carName4 = "Volvo";
var carName4; //No pierde su valor por ser con variable

let carName6 = "Volvo"; 
let ;//carName6; Error, no se puede redeclarar con let ni const

//Signo dolar $
//Funciona como un alias para la funcion principal de una biblioteca
let $ = 2; // JavaScript permite el signo dolar $ lo considera como letra
let $$$ = "hello world";
let $myMoney = 5;

//Guion bajo _ 
let _lastName = "Johnson"; //JavaScript permite el guion bajo _ lo considera como leta
// Se suele usar como alias para variables privadas




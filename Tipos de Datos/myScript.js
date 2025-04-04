//Tipos de Datos 8
//String, Number, BigInt, Boolean, Undefined, Null, Symbol, Object

//Numbers
let length = 16;
let weight = 7.5;

//Strings
let color = "Yellow";
let lastName = "Doe";

//Booleans
let x = true;
let y = false;

//Object
const person = {firstName:"John", lastName:"Doe"};

//Arrat object
const cars = ["saab", "volvo", "bmw"];

//Date object
const date = new Date("2022-03-25");


//Los tipos de Js son dinamicos
//La mismas variable puede ser utilizada para alamacenar distintios tipos de datos
let z; //z es undefined
z = 5; //z es un numero
z = "John"; //z es un string

//Operador typeof
// devuelve el tipo de dato de una variable
typeof "John" //Devuelve string
typeof 3.14 //Devuelve number
typeof true //Devuelve boolean

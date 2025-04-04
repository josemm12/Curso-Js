//Objetos

//SI ENTIENDES OBJETOS, ENTIENDES JAVASCRIPT

//Casi todo son objetos en JavaScript

/*Contenedores de propiedades (valores) 
y los metodos son funciones almacenadas en propiedades*/

//Pueden ser Valores primitivos, funciones o otros objetos
//Buena practica declararlos con la palabra clave const

//Se puede abarcar varias lineas por un inicializador de objeto
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

//Objeto vacio y luego se le agrega cuatro propiedades
const personOne = {};

//Agregar propiedades
personOne.firstName = "John";
personOne.lastName = "Doe";
personOne.age = 50;
personOne.eyeColor = "Blue";

console.log(personOne);

//Usando palabra clave new
/*No es necesario por lectura, simplicidad y velocidad de ejecucion utilizar 
palabra clave new*/
const personTwo = new Object();

personTwo.firstName = "John";
personTwo.lastName = "Doe"; 
personTwo.age = 50; 
personTwo.eyeColor = "blue";

console.log(personTwo);


//Acceder a las propiedades de un objeto
//Dos formas de acceder a las propiedades de un objeto

//1. Notacion de punto
person.firstName;

//2. Notacion de corchetes
person["firstName"];


//Valores primitivos son inmutables
//Los objetos son mutables, no modificas su contenido pero si sus propiedades

//Crea un objeto 
const personthree = {
    firsName: "John",
    lastName: "Doe",
    age: 50, eyeColor: "Blue"
}

console.log(personthree)

//Crea una copia
const a = personthree;

//cambia edad en ambas
a.age = 10;

console.log(a)
console.log(persontree)

//Const no se puede redeclarar, reasignar y si tiene alcance de bloque
//Se usa cuando se quiere que una variable no cambie su valor0

//Se les debe asignar un valor al declararlas
const PI = 3.1416;
console.log("pi: " , PI);

//incorrecto
/*const A;
A = 10;*/

//No se puede reasignar
//PI = 3.15; DARA UN ERROR
//PI = PI + 10; TAMBIEN DARA UN ERROR
//console.log("pi: " , PI);


// Objetos constantes y matrices7
//No se define un valor constante, sino una referencia constante a un valor
//Por eso no puedes reasignar un valor constante , una matriz cons o un objeto cons
/*Pero si puedes cambiar los valores de los elementos de una matriz const 
o de las propiedades de un objeto const */

//Cambiar elementos de una matriz constante 

//Creacion de una matriz constante
const cars = ["Saab", "Volvo", "BMW"];  
console.log(cars);

//Puedes cambiar un elemento
cars[0] = "Toyota";
console.log(cars[0]);

//Puedes agregar un elemento
cars.push("Audi");
console.log(cars);

//Pero no puedes reasignar la matriz
/*const cars = ["Toyota", "Volvo", "BMW"];  
cars = ["Toyota", "Volvo", "Audi"];  DARA UN ERROR*/


//Objetos constantes
//Puedes cambiar las propiedades de un objeto constante

//Creacion de un objeto constante
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);

//Puedes cambiar una propiedad
car.color = "red";
console.log(car.color);

//Puedes agregar una propiedad
car.owner = "Johnson";
console.log(car);

//Pero no puedes reasignar el objeto
/*const car = {type:"Toyota", model:"Corolla", color:"blue"};
car = {type:"Volvo", model:"EX60", color:"red"}; DARA UN ERROR*/

//Ambito de bloque
// Se puede redeclarar const n otro ambito o bloque

const x = 10;
// Aqui x es 10

{
    const x = 2;
    // Aqui x es 2
}

{
    const x = 50;
    // Aqui x es 50
}

// Aqui x es 10
//Funciones Constructoras de Objetos
//Es como un molde para crear objetos del mismo tipo
//Muchas veces se necesita crear muchos objetos del mismo tipo
//Para crear un tipo de objeto se utiliza una funcion constructora de objetos
/*Se considera una buena practica nombrar las funciones constructoras
con la primera letra en mayuscula*/

//En la funcion constructora, this no tiene ningun valor
//El valor de this se convertira en el nuevo objeto cuando se cree un nuevo objeto
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

document.getElementById("demo").innerHTML = Person;

//Ahora podemos usar new Person() para crear muchos objetos Persona

const myFather = new Person("John", " Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Lily", "Doe", 25, "brown");const mySelf = new Person("Jorge", "Doe", 30, "brown");


document.getElementById("person1").innerHTML = myFather.age;


//Valores predeterminados de la propiedad
/*Un valor asignado a una propiedad sera un valor predeterminado 
para todos los objetos creados por el constructor*/

function Person2(first, last, age, eyeColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
    this.nationality = "English";
}

/*En este caso no hay necesdiad de ingresar la nacionalidad al crear objeto
ya que no tiene un quinto parametro que lo reciva y por que ya esta definido */
/*Si intentas pasar una nacionalidad como argumento sera ignorada ya que ya 
esta definida dentro del constructor*/
const myFather2 = new Person2("John", "Doe", 50, "blue");

document.getElementById("person2").innerHTML = myFather2.nationality;


//Agregar una propieda a un objeto

myFather2.nationality = "Mexican";
document.getElementById("person2").innerHTML = myFather2.nationality;

//La nueva propiedad se agrega a myFather, no a ningun otro objeto Person


//Agregar una propiedad a un constructor
//No puede agregar una nueva propieda a un constructor, para hacerlo debes agregarla al prototipo de la funcion constructora

Person2.prototype.name = "Jorge";

document.getElementById("person2").innerHTML = myFather2.name;


//Metodos de Funcion constructora
//Una funcion constructora tambien puede tene metodos

function Person3(first, last, age, eyeColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

const myMother1 = new Person3("Ana", "Doe", 50, "blue");

document.getElementById("person3").innerHTML = myMother1.fullName();


//Agregar un metodo a un objeto
myMother1.changeName = function(name) {
    this.lastName = name;
}
//Solo es para el objeto myMother1


//Agregar un metodo a un constructor
//Nose puede agregar un metodo a un constructor eso producira un error TypeError 

//La adicion de un nuevo metodo se debe realizar en el prototipo de la funcion constructora
Person3.prototype.changeName = function(name) {
    this.lastName = name;
}

myMother1.changeName("Smith");

document.getElementById("person3").innerHTML = myMother1.lastName;


//La funcion changeName() asigne el valor de name a la propiedad de la persona lastName, sutituyendo this por myMother


//Constructores de JavaSript integrado  para todos los objetos nativos

new Object()   
new Array()    
new Map()      
new Set()     
new Date()     
new RegExp()   
new Function()

//El Math() objeto no esta en la lista, ya que es un objeto global. la new palabra clave no se puede utilizar con Math.

/*sabias
-Utiliza objetos literales {}en lugar de new Object()
-Utiliza literales de matriz [] en lugar de new Array()
-Utiliza literales de patron /()/ en lugar de new RegExp()
-utilice expreciones de funcion() {} en lugar de new Function()*/
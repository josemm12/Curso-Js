//Propiedades de Objetos
//Se pueden cambiar, agregar, eliminar y algunas son solo de lectura


const person = {
    firstName: "Jose",
    lastName: "Martinez",
    age: 40
}

//Acceder a las propiedades

//nombreObjeto.propiedad
let x = person.age;

//NombreObjeto.["propiedad"]
let y = person["age"];

//nombreObjeto[expresion]
let z = "firstName";
let o = "age";

console.log(person.firstName + " is " + person.age + " years old.")

console.log(person["firstName"] + " is " + person["age"] + " years old.")

console.log("age is " + [y])

console.log(person[z] + " is " + person[o] + " years old.")

//Agregar nuevas propiedades
person.nationality = "English";

//Prueba de que si aparece
console.log(person)

//Eliminar propiedades
//Delete elimina tanto el valor como la propiedad
delete person.age;
// o 
delete person["age"];

//Prueba de que si elimino
console.log(person)


//Objetos anidados
myObj = {
    name:"Jose",
    age: 30,
    myCars: {
        car1: "ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

//Acceder a objetos anidados con notacion de puntos o corchetes
console.log(myObj.myCars.car2)

console.log(myObj.myCars["car2"])

console.log(myObj["myCars"]["car2"])

let p1 = "myCars";
let p2 = "car2";

console.log(myObj[p1])
console.log(myObj[p1][p2])

console.log(p1)
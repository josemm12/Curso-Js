//Al mostrar un objeto JavaScript se mostrara [object Object]

const person = {
    name: 'John',
    age: 30,
    city: 'San Francisco'
};

document.getElementById('demo').innerHTML = person; // [object Object]


//Soluciones para mostrar objetos JavaScript
//1. Visualizacion de las propiedades del objeto por nombre
//2. Visualizacion de las propiedades de un objeto en un bucle
//3. Visualizacion del objeto mediante Object.values()
//4. Visualizacion del objeto mediante Object.entries()
//5. Visualizacion del objeto mediante JSON.stringify()

//Visualizacion de propiedades de objetos
document.getElementById('person').innerHTML = person.name + ', ' + person.age + ', ' + person.city;

//Visulizacion de propiedades en un bucle
let text = "";
for (let x in person) {
    text += person[x] + " ";
}

/*Debes utilizar person[x] en el bucle en lugar de person.x ya que no funcionara
 por x es la variales del bucle*/

document.getElementById('person1').innerHTML = text;


//Uso de Object.values()
//Este crea una matriz de los valores de propiedad

//Creamos un Array
const myArray = Object.values(person);

document.getElementById('person2').innerHTML = myArray;

//Uso de Object.entries()
//Simplifica el uso de objetos en bucles

const fruits = {
    Bananas:300, 
    oranges:200, 
    Apples:400
};

let text1 = "";
for (let [fruit,value] of Object.entries(fruits)) {
    text1 += fruit + ": " + value + "<br>";
}

document.getElementById('person3').innerHTML = text1;


//Usando JSON.stringify()
//Convierte un objeto JavaScript en una cadena pór el metodo JSON.stringify()
//Esta incluido en JavaScript y es compatible con todos los navegadores modernos

//El resultado sera un cadena escrita en notacion JSON
let myString = JSON.stringify(person);
document.getElementById('person4').innerHTML = myString;
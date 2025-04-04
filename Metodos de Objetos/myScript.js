//Metodos de Objetos
//Acciones que se realizan en objetos

const person = {
    firstName: 'Jose',
    lastName: "Martinez",
    id: 111,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

//Accediendo a los metodos de objetos
//Si invoca la propiedad fullName con (), se ejecurara la funcion
console.log(person.fullName())

//Si accede a la propiedad fullName sin (), devolvera la definicion de la funcion
console.log(person.fullName)


//Agregar un metodo a un Objeto con la nota
person.name = function () {
    return this.firstName + " " + this.lastName;    
}

console.log(person.name())

//Uso de metodos JavaScript
//El metodo toUpperCase() convierte un texto en mayusculas
person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
}

console.log(person.name())
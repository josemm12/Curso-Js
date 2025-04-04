//Ambito de aplicacion del bloque
//No se puede acceder a la variable let fuera del bloque {} donde se declaro
{
    let x = 2;
}
// x no se puede usar aqui

//Alcance global
//Con var se puede acceder a la variable fuera del bloque
{
    var y = 2;
}
// y se puede usar aqui

//Redeclaracion
//Con let no se puede redeclarar la variable
let x = "John Doe";
//let x = o; //Error

//Con var se puede redeclarar la variable
var y = "John Doe";
var y = "John Smith"; //No hay error


//Redecleracion de variables
var a = 10;
//aqui el valor de a es 10

{
    var a = 20;
    //aqui el valor de a es 20  
}
//aqui el valor de a es 20

// Con let dentro del bloque redeclarado no cambia el valor de a por fuera del bloque

let s = 10;
//aqui el valor de s es 10

{
    let s = 20;
    //aqui el valor de a es 20  
}
//aqui el valor de s es 10


//Redeclarando 
//Con var en cualquier parte del bloque se redeclara la variable
var b = 10;
//Aqui b es 2
var b = 3;
//aqui b es 3

//Con let no se puede redeclarar la variable
//let no permite declarar una variable en el mismo bloque 
var v = 2; //Permitido 
let v = 3; //No permitido 

{
    /*let v = 4; //Permitido
    let v = 5; //No permitido   */
}

{
    let v = 6; //Permitido
    var v = 7; //No permitido
}
//Se permite declarar let en otro bloque


//let Hostings
//Variables con var se pueden utilizar antes de declararlas

carName = "Volvo";
var carName;

//Variables con let no se pueden utilizar antes de declararlas, dara un error
carNames = "Saab";
let carNames = "Volvo";
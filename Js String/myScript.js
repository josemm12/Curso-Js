//Las cadenas sirven para almacenar texto, se pueden utilizar comillas simples o dobles.
let text = "Jose Manuel"; //Double quotes-doble comillas
let text2 = 'Jose Manuel';//Single quotes-comillas simples


/*Citas dentro de citas

Puedes usar comillas dentro de una cadena siempre y cuando no coincidan con las que las rodean. 
*/
let answer = "It 's alright";
let answer2 = "He is called 'Juan'";
let answer3 = 'He is called "Jose"';


/*Cadenas de plantilla - Template String
Las plantillas se introdujeron con ES6(JS 2016)

Las plantillas son cadenas encerradas entre comillas invertidas(`Esta es una cadena de plantilla`).
Las plantillas permiten comillas simple y dobles dentro de una cadena

NOTA: Las plantillas no son compatibles con Internet Explorer
 */
let text3 = `He's often called "Johnny"`

//Las plantillas permiten cadenas multiples
let text0 = 
`the quick
brown fox
jumps over
the lazy dog`;

console.log(text0);


/*Longitud de la cuerda - String Length
La propiedad length devuelve la longitud de una cadena.
*/
let text4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text4.length;

console.log(length); 


/*Personajes de escape - Escape Characters

Debido a que las cadenas deben escribirse entre comillas dobles, js malinterpreta esta cadena

let text = "We are the so-called "Vikings" from the north.";

La cadena se cortara a "we are the so.called" y dara un error.

Para resover este problema, puedes utiliar un caracter de escpae de barrida invertica  (\) convierte los caracteres especiales en caracteres de cadena:

\'  sinlge quote
\"  double quote
\\  backslash

Existen mas 
\b
\f
\n
\r
\t
\v

Estas se diseñaron originalemnte para maquinas de escribir, teletipos y faxes, no tienen sentido en html
*/
let text5 = "We are the so-called \"Vikings\" from the north.";
console.log(text5);

let text6 = 'It\'s alright'
console.log(text6);

let text7 = "the character \\ is called backslash"
console.log(text7);


/*Rompiendo largas filas - Breaking Long Lines

Por facilitae lectura es preferible ecitar lineas de codigo largas, una forma de dividir una declaracion es despues de un operador
*/
document.getElementById("demo").innerHTML = 
"Hello Jose";

//Una forma segura de dividir caneda es mediantte la suma de cadenas

document.getElementById("demo1").innerHTML = "Hello " + 
"Jose!";



/*Cadenas de Js como Objetos - Js String as Objects 

La String Js es un valor primitivo creado a partir de literales. Pero las cadenas tambien se pueden definir como objetos con la palabra clave new

No cree objetos String. La palabra clave new  complica el codigo y ralentiza la velocidad de ejecucion. 

Los objetos de cadena pueden producir resultados inesperados

Recordemos que = es para asignar un valor
x = 5

== es una comparacion debil o no estricta sin considerar su tipo de dato y si son diferentes trata convertirlos para hacer la comparacion
5 == "5" True ya que convierte el "5" string a un numero
true == 1 true ya que true lo convierte en un 1

=== es una comparacion estricta compara tanto el valor como el tipo de dato y no hace conversiones implicitas
5 === "5" False ya que "5" es un string
true === 1 false ya que true es un valor booleano
*/
let x = "Jose"
let y = new String("Jose");
console.log("X es un " + typeof x + " y Y es un " + typeof y);

//Al utilizar el ==operador, a e b son iguales
let a = "Jose";
let b = new String("Jose");
console.log(a==b);

//Al utilizar el ===operador, c e d son iguales
let c = "Jose";
let d = new String("Jose");
console.log(c===d);

//NOTA comparar dos objetos en Js siempre devuelve falso
// === utilizala solo para evitar errores inesperadas de conversiones de tipo
// == Solo cuando realmente necesites comparaciones con conversion implicita




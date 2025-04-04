/*Metodos basicos de String 
Las cadenas de Js son primitivas e inmutables. Todos los metodos de String producen una nueva cadena sin alterar la original

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

/*Js String Length
La length propiedad devuelve la longitud de la String
*/
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = text.length;
console.log(length);


/*Extraccion de caracteres de String
Hay 4 formas de extraer caracteres de Strign

-El metodo at(position)
-El metodo charAt(position)
-El metodo charCodeAt(position)
-Usando el acceso a la propiedad [] como en matrices
*/

/*Js String charAt()
El charAt() metodo devuelve el caracter en un indice (posicion) especificado en una String
*/
let text1 = "Hello Word";
let char = text1.charAt(1);
console.log(char);


/*Js String charCodeAt()
El charCodeAt() metodo devuelve el codigo del caracter en un indice especificado en una String
El codigo devuelve un codigo UTF-16(un entero entre 0 y 65535)
*/
let text2 = "Hello Word";
let char1 = text2.charCodeAt(0);
console.log(char1);


/*Js String at()
ES2022 introdujo el metodo String at()
Es compatible con todos los navegadores
Devuelve el caracter en un indice especificado

NOTA el at() permite el uso de indices negativos mientras que charAt()no
Ahora se puede utilizar myString.at(-2) en lugar de charAt(myString.length-2)
*/
//Obtener la tercera letra del nombre
const name = "Jose";
let letter = name.at(0);
console.log(letter);

const name1 = "Jose";
let letter1 = name1[1];
console.log(letter1);


/*Property Acces - Acceso a la propiedad 

Puede ser un poco impredecible, hace que las String parezcan matrices aunque no lo son, si no se enceuntra ningun caracter, [] devuelve indefenido, mientras que charAt() devuelve una String vacia. Es de solo lectura. str[0]="A" no genera ningun error (pero no funciona!)

let text = "Hola Jose";
text[0] = "A";  No da ningun error pero no funciona
*/

let text3 = "Hola Jose";
let char2 = text3[0];
console.log(char2);


/*Extracting String Parts - Extraccion de partes de una String
Hay 3 metodos para extraer parte de una String
-slice(start, end)
-substring(start, end)
substr(start, length)
*/
/*Js String slice()
Extra una parte de una String y devuelve la parte extraida en una nueva String
El metodo toma 2 parametros : posicion inivial y posicion final (no incluido)
*/
let text4 = "Apple, Banana, Kiwi";
let part = text4.slice(7, 13);
console.log(part);

//Si omite el segundo parametri el metodo cortara el resto de String
let part1 = text4.slice(7);
console.log(part1);

//Si un parametro es negativo, la posicion se cuenta desde el final del String
let part2 = text4.slice(-12);
console.log(part2);

//Este ejemplo conta una porcion de una String desde la posicion -12 a la -6
let part3 = text4.slice(-12,-6);
console.log(part3);


/*Js String substring()- subcadena de una String
subString() es similar a slice(), la diferencia es que los valores iniciales y finales menores a 0 son tratados como 0 en subString()

Si omite el segundo parametro, substring() eliminara el resto del String
*/
let text5 = "Apple, Banana, kiwi";
let part4 = text5.substring(7,13);
console.log(part4);

/*Js String substr
substr() is similar to slice()
la diferencia es que el segundo parametro especifica la longitud de la parte extraida

NOTA
El substr() metodo se ha eliminado (estado obsoleto) en el ulitmo estandar de Js utilice substring() o slice() en su lugar
*/
let str = "Apple, Banana, Kiwi";
let res = str.substr(7,6);
console.log(res);


/*Converting to Upper and Lower Case - Conversion a mayusculas y minusculas
Una cadena se convierte a mayusculas con toUpperCase() 
Una cadena se convierte a minusculas con toLowerCase()
*/
//toUpperCase()
let text6 = "Hello Word";
let textUpper = text6.toUpperCase();
console.log(textUpper);

//toLowerCase()
let text7 = "HELLO WORD";
let textLower = text7.toLowerCase();
console.log(textLower);


/*Js String concat }
concat() une dos o mas cadenas
El concat() metodo puede utilizarse en lugar del operador "+". Estas tres lineas hacen lo mismo

NOTA
Todos los metodos de String devuelven una caden. No modifica la String original. Las String son inmutables, las cadenas no se pueden cambiar, solo reemplazar
*/
let text8 = "Hello";
let text9 = "Word";
let text11= "Jose";
let text10 = text8.concat(" ", text9, " ", text11);
console.log(text10);


/*Js String trim()
The trim() metodo elimina los espacios en blanco de ambos lados de una String
*/

let text12 = "   Hello Word  ";
let text13 = text12.trim();
console.log(text13);

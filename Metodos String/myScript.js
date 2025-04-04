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
El metodo toma 2 parametros : posicion inicial y posicion final (no incluido)
*/
let text4 = "Apple, Banana, Kiwi";
let part = text4.slice(7, 13);
console.log(part);

//Si omite el segundo parametro el metodo cortara el resto de String
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


/*String de Js trimStart()
El metodo funciona como trim(), pero elimina los espacios en blanco solo desde el comienzo de una String
*/
let text14 = "   Hello Word  ";
let text15 = text14.trimStart();
console.log(text15);


/*String de Js trimEnd()
Fnciona tambien como trim(), pero elimina los espacios en blanco solo desde el final de una String
*/

let text16 = "  Hello Word  "
let text17 = text16.trimEnd();
console.log(text17);


/*Js String Padding
ECMAScript 2017 agrego dos metodos a String: padStart() y padEnd()
Estos permiten el relleno al principio o al final de cadena
*/
//Js String padStart()
//Rellena la String con otra String varias veces hazta alcanzar una longitud determinada
//Rellena una String con "0" hasta la longitud 4
let text18 = "5";
let padded = text18.padStart(4, "0");
console.log(padded);

//Rellene una String con "x" hasta que alcance la longitud 4
let text19 = "5";
let padded1 = text19.padStart(4, "x");
console.log(padded1);

//Nota el padStart() es un metodo de cadena, primero convierta el numero a cadena si es necesario
let numb = 5;
let text20 = numb.toString();
let padded2 = text20.padStart(4, "0");
console.log(padded2);
console.log(numb);


//Js String padEnd()
//Rellena una String con otra cadena varias veces hasta alcanzar una longitud determinada (Lo mismo que padStart() pero al final de la String)
let text21 = "5";
let padded3 = text21.padEnd(4, "0");
console.log(padded3);

let text22 = "5";
let padded4 = text22.padEnd(4,"x");
console.log(padded4);   

let numb1 = 2;
let text23 = numb1.toString();
let padded5 = text23.padEnd(4, "0");
console.log(padded5);
console.log(numb1)


/* Js String repeat
-Devuelve una String con un numero de copias de una String
-Devuelve una nueva String
-No cambia la String original

Sintaxis
string.repear(count)
Parametros
-count: el numero de veces que se repite la cadena. Si el valor es negativo o infinito, se lanzara un RangeError. Si el valor es 0, devuelve una cadena vacia
Si el valor es NaN, se convertira a 0

Valor de retorno
String una ueva Strign que contiene las copias, osea q la String almacene la cantidad de veces que se repite la String
*/
//Crea copias de un texto
//Si no le das espacio al final  de la String, el resultado estara junto o crea otra variable que le de espacio
let text24 = "Hello Jose Manuel";
let text25 = text24 + " ";
let result = text25.repeat(2);
console.log(result);


/*Replacing String Content - Remplaza el contenido de la String
El replace() remplaza un valor especifico con otro valor en una String
-No cambia la String original
-Devuelve una nueva String
-remplaza solo la primera coincidencia

Si desea reemplazar todas las coincidencias utilice una expresion regular con el indicador /g (global) activado

El metodo  distingue entre mayusculas y minusculas, por lo que "a" y "A" son diferentes si desea que no lo sea utilice una expresion regular con el indicador /i (case insensitive) activado
*/
let text26 = "Please visit Microsoft and Microsoft";
//El replace() metodo reemplaza el primer valor encontrado
console.log(text26);
let newText = text26.replace("Microsoft", "Cali");
console.log(newText);

let text27 = "Please visit Microsoft and Microsoft";
console.log(text27);
//Indicador /g (global) activado
let newText1 = text27.replace("/Microsoft/g", "Cali");
console.log(newText1);

let text28 = "Please visit Microsoft";
console.log(text28);
//Indicador /i (case insensitive) activado
let newText2 = text28.replace("/MICROSOFT/i", "Cali");
console.log(newText2);
//Las expresiones regulares se escriben sin comillas


/*Js String ReplaceAll - Js String reemplazar todo
Permite especififcar una expresion regular de una String a remplazar. Si el parametro es una expresion regular, se debe establecer el indicador /g (global), de lo contrario dara un typeError
*/
let text29 = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(text29);
//El replaceAll() metodo reemplaza todas las coincidencias de una String con otra String
text29 = text29.replaceAll("Cats", "Dogs");
console.log(text29);
text29 = text29.replaceAll("cats", "dogs");
console.log(text29);


/*Converting a String to an Array - convertir una string a una array
Js String split()
Una String se puede convertir en una array utilizando el metodo split()
text.split(",")
text.split(" ")
text.split("|")

-Si se omite es seprador el valor devuelta contendra la String completa en el indice 0
-Si el seprador es "", la matriz devuelta contendra una matriz de caracteres individuales
*/
let text30 = "a,b,c,d,e,f,g,h";
let myArray = text30.split("");
console.log(myArray[2]);
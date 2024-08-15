/* -------------------------------------------------------------------------- */
/*                               Tipos de datos                               */
/* -------------------------------------------------------------------------- */

/* --------------------------------- numero --------------------------------- */
var edad = 20
// con o sin decimal

document.write('Numero: ' + edad)

/* ----------------------------- cadena de datos ---------------------------- */
var nombre = 'Esau'
var nombre = "Esau"
var nombre = "\"Esau\""
document.write('<br>Cadena de datos: ' + nombre)

/* ---------------------------------- array --------------------------------- */
var amigos = ["Jose", "Wuenfril", "Yantuche"]
document.write('<br>Array: ' + amigos)
document.write('<br>Array: ' + amigos[1])


/* --------------------------------- objeto --------------------------------- */
var objeto = {
    color: "black",
    size: 12
}
// document.write('<br>Objeto: ' + objeto)


/* --------------------------------- boolean -------------------------------- */
var boolean = false;
document.write('<br>Boolean: ' + boolean)

/* -------------------------------- indefine -------------------------------- */
var indefinida;
document.write('<br>Indefinite: ' + indefinida)

/* ---------------------------------- null ---------------------------------- */
var nulo = null
document.write('<br>Nulo: ' + nulo)

/* --------------------------------- En html -------------------------------- */
document.write("<h2>Elemento</h2>")


/* -------------------------------------------------------------------------- */
/*                                 Operadores                                 */
/* -------------------------------------------------------------------------- */


// + Adicion 
var resultado = 4 + 3; //7

// - Substracción
var resultado = 4 - 3; // 1

// * Multiplicación
var resultado = 4 * 3; // 12

// / División 
var resultado = 4 / 2; // 2

// % Módulo
var resultado = 4 % 2; // 0 (Residuo de la división)

// ++ Incremento
var resultado = 4++; // 5

// -- Decremento
var resultado = 4--; // 3


/* -------------------------------------------------------------------------- */
!!"false" == !!"true"; //da true
!!"false" === !!"true"; //da true tambien

!"false" == !"false"; //da true
!"false" === !"false"; //da true tambien

true == true; //da true
true === true; //da true tambien


[] == ![] //da true
0 == ![] //da true
0 == false //da true
0 == 0 //da true

NaN === NaN; //da false



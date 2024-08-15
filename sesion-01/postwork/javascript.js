/* ------------------------------- Aritmética ------------------------------- */
var arit = 100 + 4 * 11
arit
var arit2 = (100 + 4) * 11
arit2

/* --------------------------- Números especiales --------------------------- */
Infinity

NaN

/* --------------------------------- Cadenas -------------------------------- */
var cad = `En el mar`
var cad1 = "Acostado en el océano"
var cad2 = 'Flotando en el océano'

var cad3 = "Esta es la primera línea\nY esta es la segunda"

var cad4 = "Un carácter de nueva línea se escribe como \"\\n\"."

/* ------------------------------- Concatenar ------------------------------- */
"con" + "cat" + "e" + "nar"

var concat = `la mitad de 100 es ${100 / 2}`

/* --------------------------- Operadores unarios --------------------------- */
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

console.log(- (10 - 2))
// → -8

/* ---------------------------- Valores booleanos --------------------------- */
// Comparación
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

console.log("Aardvark" < "Zoroaster")
// → true

console.log("Granate" != "Rubí")
// → true
console.log("Perla" == "Amatista")
// → false

console.log(NaN == NaN)
// → false

/* --------------------------- Operadores lógicos --------------------------- */
console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false

console.log(1 + 1 == 2 && 10 * 10 > 50);

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

/* ----------------------------- Valores vacíos ----------------------------- */
null
undefined

/* -------------------------------------------------------------------------- */
/*                       Conversión automática de tipos                       */
/* -------------------------------------------------------------------------- */
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

/* -------------------------------------------------------------------------- */
/*                     Cortocircuito de operadores lógicos                    */
/* -------------------------------------------------------------------------- */
console.log(null || "usuario")
// → usuario
console.log("Agnes" || "usuario")
// → Agnes

console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100


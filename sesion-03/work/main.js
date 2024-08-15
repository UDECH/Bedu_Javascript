/* -------------------------------------------------------------------------- */
/*                                   Funcion                                  */
/* -------------------------------------------------------------------------- */
// Ayuda a no repetir codigo 

var ana = 1998
var david = 1982
/* ------------------------------ calcular edad ----------------------------- */
function CalcularEdad(nac) {
    var edadNac = 2024 - nac
    return edadNac
}

console.log(CalcularEdad(ana));
console.log(CalcularEdad(david));

/* ----------------------------- calcular retiro ---------------------------- */

function aniosRetiro(nac) {
    var edad = CalcularEdad(nac)
    var ret = 65 - edad
    return ret
}

console.log(aniosRetiro(ana));

/* -------------------------------------------------------------------------- */
/*                                Potenciacion                                */
/* -------------------------------------------------------------------------- */
function power(base, exponente) {
    var num = base ** exponente
    var mat = Math.pow(base, exponente)
    var pow = 1

    for (let i = 0; i < exponente; i++) {
        pow *= base
    }

    // return num
    // return mat
    return pow
}

console.log("Potencia: " + power(5, 2));

var var1 = 10
var var2 = 3
var1 *= var2
console.log(var1);

function power2(base, exponente) {
    if (exponente == 0) {
        return 1
    }
    return base * power2(base, exponente - 1)
}
console.log("Potencia2: " + power2(2, 2));

var ocupacion = function (job, name) {
    switch (job) {
        case "developer":
            return name + "desarrolla app cool"
        case "designer":
            return name + "crea disenos increibles"

        default:
            return name + "hace otras cosas";
    }
}
console.log(ocupacion("developer", "juan"));

function logName(name) {
    console.log("Hola: " + name);
}

var logname2 = function (param) {
    console.log("Hola: " + param);
}

logname2("Ana");

(function (name) {
    console.log("hola: " + name);
})("Julia");

/* -------------------------------------------------------------------------- */
/*                            Function numero mayor                           */
/* -------------------------------------------------------------------------- */
function mayor(num1, num2) {
    if (num1 > num2) {
        console.log("Numero Mayor: " + num1);
    } else {
        console.log("Numero Mayor: " + num2);
    }
}

mayor(333, 22)

/* -------------------------------------------------------------------------- */
/*                                  Fibonacci                                 */
/* -------------------------------------------------------------------------- */


function fibonacciSequece(limit) {
    var fib = [0, 1]

    for (let i = 2; i <= limit; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[limit]
}

console.log(fibonacciSequece(0));
console.log(fibonacciSequece(1));
console.log(fibonacciSequece(2));
console.log(fibonacciSequece(3));
console.log(fibonacciSequece(4));
console.log(fibonacciSequece(5));
console.log(fibonacciSequece(6));
console.log(fibonacciSequece(7));
console.log(fibonacciSequece(8));
console.log(fibonacciSequece(9));
console.log(fibonacciSequece(10));
'use strict'

document.write("<h1>JavaScript</h1>")


/* -------------------------------------------------------------------------- */
/*                                     if                                     */
/* -------------------------------------------------------------------------- */
var time = 25

console.log("Primera Solucion");
document.write("<hr><h2>Primera Solucion</h2>")

if (time > 24 || time < 0) {
    console.log("Hora Invalida");
    document.write("<h2>Hora Invalida</h2>")
} else if (time < 12) {
    console.log("Buenos dias");
    document.write("<h2>Buenas Dias</h2>")
} else if (time < 20) {
    console.log("Buenas tardes");
    document.write("<h2>Buenas tardes</h2>")
} else if (time >= 20) {
    console.log("Buenas noches");
    document.write("<h2>Buenas Noches</h2>")
}


console.log("Segunda Solucion");
document.write("<hr><h2>Segunda Solucion</h2>")

if (time >= 0 && time < 12) {
    console.log("Buenos dias");
    document.write("<h2>Buenas Dias</h2>")
} else if (time >= 12 && time < 20) {
    console.log("Buenas tardes");
    document.write("<h2>Buenas tardes</h2>")
} else if (time >= 20 && time < 24) {
    console.log("Buenas noches");
    document.write("<h2>Buenas Noches</h2>")
} else {
    console.log("Hora Invalida");
    document.write("<h2>Hora Invalida</h2>")
}


/* -------------------------------------------------------------------------- */
/*                                   switch                                   */
/* -------------------------------------------------------------------------- */
var day = 4

switch (day) {
    case 1:
        console.log("Lunes");
        break
    case 2:
        console.log("Martes");
        break
    case 3:
        console.log("Miercoles");
        break
    case 4:
        console.log("Jueves");
        break
    case 5:
        console.log("Viernes");
        break
    case 6:
        console.log("Sabado");
        break
    case 7:
        console.log("Domingo");
        break
    default:
        console.log("No es un valor valido");
}


/* -------------------------------------------------------------------------- */
/*                                  ciclo for                                 */
/* -------------------------------------------------------------------------- */

for (let i = 1; i <= 5; i++) {
    // console.log(i+" Hola");
}

/* ------------------------------ Numeros Pares ----------------------------- */
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Numero Par: " + i);
    }

}

/* ----------------------------- Numeros primos ----------------------------- */
for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
  
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) {
      console.log(counter);
    }
  }
/* -------------------------------------------------------------------------- */
/*                                Condicionales                               */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                                     if                                     */
/* -------------------------------------------------------------------------- */

// if - La palabra clave que indica que se va a realizar una condicional.
// (... ) - Dentro de los paréntesis se coloca la condición a evaluar, la cual retorna un booleano, es decir: true o false.
// { ... } - Dentro de las llaves va el texto a ejecutar en caso de que la condición sea “true”.
// else - Se utiliza para controlar el flujo en caso de que la condición sea “false”. Si se usa “else”, el código dentro de las llaves que le siguen se ejecuta sólo cuando la condición anterior no se cumplió.

if (condition) {
    // Bloque de código cuando se cumple <condicíon>
}
else {
    // Bloque de código cuando NO se cumple <condicíon>
}

/* -------------------------------------------------------------------------- */
/*                                   Switch                                   */
/* -------------------------------------------------------------------------- */

//    En ocasiones tenemos tantas condiciones a evaluar que utilizar if/else sería abrumador, para esto existe la sentencia switch.

//    Switch evalúa una expresión comparando el valor de esa expresión con una instancia case y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.Si la expresión es igual a un case entonces se ejecuta el código determinado para esa situación.


switch (expresion) {
    case valo1:
        // Sentencias ejecutadas cuando el resultado de expresion concide con valor1
        break;

    case valorN:
        // Sentencias ejecutadas cuando el resultado de expresion concide con valorN
        deafult:
        // Sentencias ejecutadas cuando NO ocurrre una coincidencia con los anteriores casos
        break;
}

// switch: La palabra clave que indica que se va a evaluar una expresión.
// ( ... ): Dentro de los paréntesis se coloca la condición a evaluar, la cual toma el valor de una variable declarada previamente.
// { ... }: Dentro de las llaves van los case.
// case valorN: Compara la expresión con sus posibles valores y ejecuta las instrucciones en caso de que coincida con algún valor.
// default: Es ejecutada en caso de que ningún valor coincida con la expresión dada.


/* -------------------------------------------------------------------------- */
/*                                Sentencia for                               */
/* -------------------------------------------------------------------------- */

// Un ciclo for se repite hasta que una condición especificada se evalúe como false. El ciclo for de JavaScript es similar al bucle for de Java y C.

// for: La sintaxis para el inicio del ciclo. Posteriormente, abrimos paréntesis y dentro habrá 3 valores.
// Inicializador: El primer valor en el cual declaras la variable, incluyendo con cuál número inicia el ciclo.
// Condición: El segundo valor es la condición, lo que tiene que pasar para terminar la iteración.
// Incrementable: El tercer valor es el incrementable. Cada vez que termina todas las sentencias de ejecución, la variable aumenta en 1.

for (var i = 1; i <= 50; i++) {
    console.log(i);
}

/* -------------------------------------------------------------------------- */
/*                               Sentencia while                              */
/* -------------------------------------------------------------------------- */

while (condition) {

}

/* -------------------------------------------------------------------------- */
/*                             Sentencia do/while                             */
/* -------------------------------------------------------------------------- */

// El ciclo do/while es una variante del ciclo de while. Este ciclo ejecutará el bloque de código una vez, antes de verificar si la condición es verdadera, luego repetirá el bucle siempre que la condición sea verdadera.

do {

} while (condition);


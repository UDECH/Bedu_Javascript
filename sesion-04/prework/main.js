/* -------------------------------------------------------------------------- */
/*                                  Arreglos                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Arreglos -------------------------------- */
var color1 = 'Red';

var color2 = 'Blue';

var color3 = 'Green';

/* ---------------------------------- Array --------------------------------- */
var colors = ['Red', 'Blue', 'Green'];


var colors = ['Red', 'Green', 'Blue'];

console.log(colors[0]); //'Red'
console.log(colors[1]); //'Green'
console.log(colors[2]); //'Blue'
console.log(colors[3]); //'Undefined'    


/* ------------------------------ Crear arreglo ----------------------------- */

var colors = ['Red', 'Blue', 'Green'];

/* ----------------------------- arreglos vacios ---------------------------- */

var colors = [];

/* ------------------- posiciones y elementos que poseera ------------------- */

var colors = new Array(5);

// var colors = new Array(‘Red’,Green’’,Blue’’);

/* --------------------------- Acceder al arreglo --------------------------- */

console.log(colors[0]); //Red
console.log(colors[colors.lenght - 1]); //Blue

/* ---------------------------- ocuparlo despues ---------------------------- */

// var primero = colors.[0]; //Red 
// var ultimo = colors.[colors.length-1]; //Red


/* --------------------------- Recorrer el arreglo -------------------------- */


//Recorre un arreglo utlizando ForEach
colors.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
})

//Recorre un arreglo utlizando For
for (var i = 0; i < colors.lenght; i++) {
    console.log(colors[i] + " " + i);
}

// Red 0
// Green 1
// Blue 1  

/* -------------------------------------------------------------------------- */
/*                            Propiedades y Metodos                           */
/* -------------------------------------------------------------------------- */


var gato = {
    maullar() {
        console.log("Miau, miau, miauuu");
    }
};

gato.maullar();

//Salida: Miau, miau, miauuu

var obj = {
    //Propiedades
    method1(arg) {
        //código de method1
    },
    //O también: 
    method2: function (arg) {
        //código de method2
    }
};

/* -------------------------------------------------------------------------- */
/*                                   Objetos                                  */
/* -------------------------------------------------------------------------- */
var john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990
}

console.log(john['lastName']);  // 'Doe'
console.log(john.firstName);  // 'John'

var john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: function (birthYear) {
        var today = new Date();
        var year = today.getFullYear();
        return year - birthYear;
    }
}

console.log(john.calculateAge(1990)); // 30

// Actividad agregar el valor de pais: noruega  
var person = {
    firstName: 'John',
    lastName: 'Doe',
    propiedad: 'valor',
    pais: 'Noruega'
};


var car = {
    color: 'negro',
    marca: 'Mazda',
    llantas: 4
};


var perro = {
    nombre: 'morris',
    edad: 8,
    bonito: true
};


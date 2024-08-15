/* ----------------------- Paradigmas de Programación ----------------------- */
// Programación Declarativa e Imperativa

var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for (var i = 0; i < numbers.length; i++) {
    doubles.push(numbers[i] * 2);
}

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]



var numbers = [1, 2, 3, 4, 5];
var doubles = numbers.map(function (number) {
    return number * 2;
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]

/* -------------------------------------------------------------------------- */
/*                                   Clases                                   */
/* -------------------------------------------------------------------------- */


var john = {
    name: 'John',
    birthYear: 1990,
    job: 'Developer'
}
var mark = {
    name: 'Mark',
    birthYear: 1985,
    job: 'Teacher'
}
var jane = {
    name: 'Jane',
    birthYear: 1975,
    job: 'Designer'
}


/* -------------------------------------------------------------------------- */
/*                                 Constructor                                */
/* -------------------------------------------------------------------------- */

var Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}


var john = new Person('John', 1990, 'Developer');
var mark = new Person('Mark', 1985, 'Teacher');
var jane = new Person('Jane', 1975, 'Designer');

/* -------------------------------------------------------------------------- */
/*              Pilares de la programaci[on orientada a objetos]              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Herencia -------------------------------- */

var Person = function (name) {
    this.name = name;
}
var Developer = function (skills, yearsOfExperience) {
    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}


var Person = function (name) {
    this.name = name;
}

var Developer = function (name, skills, yearsOfExperience) {
    Person.call(this, name);

    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

var john = new Developer('John', 'JavaScript', 10);



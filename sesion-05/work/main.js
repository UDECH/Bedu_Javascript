/* -------------------------------------------------------------------------- */
/*                                 Constructor                                */
/* -------------------------------------------------------------------------- */
var persona = function (name, year, job) {
    this.name = name,
        this.year = year,
        this.job = job

    this.age = function () {
        var date = new Date()
    }
}

/* -------------------------------------------------------------------------- */
/*                                  Prototype                                 */
/* -------------------------------------------------------------------------- */

persona.prototype.age = function () {
    var today = new Date()
    var year = today.getFullYear()
    return year - this.year
}

/* -------------------------------------------------------------------------- */
/*                                 Instancias                                 */
/* -------------------------------------------------------------------------- */
var john = new persona("John", 1990, "developer")
var mark = new persona("John", 1975, "teacher")
var jane = new persona("John", 1985, "designer")

/* -------------------------------------------------------------------------- */
/*                                   Reto 1                                                                 */
/* -------------------------------------------------------------------------- */
var Vec = function (x, y) {
    this.x = x;
    this.y = y;
}

Vec.prototype.plus = function (other) {
    return new Vec(this.x + other.x, this.y + other.y);
}

Vec.prototype.minus = function (other) {
    return new Vec(this.x - other.x, this.y - other.y);
}

Vec.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
}


var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 


/* -------------------------------------------------------------------------- */
/*                                  Herencia                                  */
/* -------------------------------------------------------------------------- */

var Developer = function (name, year, language) {
    persona.call(this, name, year, "Developer")

    this.language = language
}

var Doctor = function (name, year, especialidad) {
    persona.call(this, name, year, "Doctor")

    this.especialidad = especialidad
}

var ana = new Developer('ana', 1999, 'JavaScript')
var bruno = new Doctor('bruno', 1995, 'Neurolo')

console.log(ana);
console.log(bruno);

console.log(ana.age());

/* -------------------------------------------------------------------------- */
/*                                   Reto 2                                   */
/* -------------------------------------------------------------------------- */

var Group = function () {
    this.members = [];
}

Group.prototype.add = function (value) {
    if (!this.has(value)) {
        this.members.push(value);
    }
}

Group.prototype.has = function (value) {
    return this.members.includes(value);
}

Group.from = function (collection) {
    var group = new Group();

    for (var i = 0; i < collection.length; i++) {
        group.add(collection[i]);
    }
    return group;
}
var group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true
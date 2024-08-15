/* -------------------------------------------------------------------------- */
/*                               Arrow Function                               */
/* -------------------------------------------------------------------------- */

var cuadrado = function (n) { return n * n }

var cuadrado2 = (n) => { return n * n }

var cuadrado3 = (n) => n * n

var cuadrado4 = n => n * n

console.log(cuadrado2(3))
console.log(cuadrado2(3))
console.log(cuadrado3(4))
console.log(cuadrado4(5))

// Invocacion inmediata
console.log((n => n * n)(5))

var f = (x, y) => {
    var w = x + y
    return w * w
}

console.log(f(5, 6));

var arr = [1, 2, 3, 4, 5, 6]

console.log(arr.map((n) => n * 2));
console.log(arr.map(function (n) { return n * 2 }));

/* -------------------------------------------------------------------------- */
/*                               Spread operator                              */
/* -------------------------------------------------------------------------- */


var obj = {
    a: 1,
    b: 2,
    c: 3
}

// var obj2 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

var obj3 = { ... obj, d:4}
console.log(obj3);

var a = [1,2,3,4,5,6]

var b = [-1,0, ... a, 6,7,8]

console.log(b);















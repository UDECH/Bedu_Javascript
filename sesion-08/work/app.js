var but1 = document.getElementById("but1")

// but1.addEventListener("click", ()=>{
//     console.log("Me diegon click");
// })

function once(argument) {
    console.log("Me dieron click por primera vez");
    but1.removeEventListener("click", one)
}

// but1.addEventListener("click", one)

var titulo= document.getElementById("titulo")
var rojo= document.getElementById("rojo")
var azul= document.getElementById("azul")
var verde= document.getElementById("verde")

// rojo.addEventListener("click", () => {
//     titulo.style = "color: red;"
// })
// azul.addEventListener("click", () => {
//     titulo.style = "color: blue;"
// })
// verde.addEventListener("click", () => {
//     titulo.style = "color: green;"
// })

function cambiacolor (color){
    return(() =>titulo.style = "color:" + color + ";")
}

rojo.addEventListener("click", cambiacolor ("red"))
azul.addEventListener("click", cambiacolor ("blue"))
verde.addEventListener("click", cambiacolor ("green"))

// var evObj = getElementById("evObj")

// evObj = addEventListener ("mousedown" , function(event){
//     // console.log(event);
//     if (event.button== 0) {
//         console.log("Click izquierdo");
//     } else if (event.button== 2) {
//         console.log("Click derecho");
//     }

// })

/* -------------------------------------------------------------------------- */
/*                                   reto 1                                   */
/* -------------------------------------------------------------------------- */

var p = document.querySelector("p");
var size;

function setSize(newSize) {
  size = newSize;
  p.style.fontSize = size + "px";
}

setSize(20);

function handleArrow(event) {
  if (event.key == "ArrowUp") {
    if (size > 80) {
      p.textContent = "💥";
      document.body.removeEventListener("keydown", handleArrow);
    } else {
      setSize(size * 1.1);
      event.preventDefault();
    }
  } else if (event.key == "ArrowDown") {
    setSize(size * 0.9);
    event.preventDefault();
  }
}

document.body.addEventListener("keydown", handleArrow);
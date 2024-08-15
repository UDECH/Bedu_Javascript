/* ------------------------- Programacion funcional ------------------------- */
/* -------------------------------------------------------------------------- */
/*                                Funcion pura                                */
/* -------------------------------------------------------------------------- */

var car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
  }
  
  function addColor(car) {
    car.color = 'Black';
    return car;
  }
  
  console.log('Before calling addColor()', car);
  
  var sameCar = addColor(car);
  
  console.log('After calling addColor()', car);
  console.log('After calling addColor()', sameCar);
  console.log('Same car?', car === sameCar); // true
  
  
  /* -------------------------------------------------------------------------- */
  


function addColor(car) {
    var newCar = Object.assign({}, car, {
      color: 'Black'
    });
  
    return newCar;
  }
  
  
  /* -------------------------------------------------------------------------- */
  


  var evenNumbers = [];

  function isEvenNumber(number){
    return number % 2 === 0;
  }

  function addEvenNumber(number){
    if(isEvenNumber(number)){
      evenNumbers.push(number);
    }
  }

  addEvenNumber(2);


/* -------------------------------------------------------------------------- */



var newArray = evenNumbers.map(function(n){
    // retunr n;
  }) 


/* -------------------------------------------------------------------------- */



if(isEvenNumber(number)){
    newArray.push(number);
  }


/* -------------------------------------------------------------------------- */



var evenNumbers = [];

function isEvenNumber(array, number){
  var newArray = evenNumbers.map(function(n){
    return n;
  });
  if(isEvenNumber(number)){
    newArray.push(number);
  }
  return newArray;
}

evenNumbers = addEvenNumber(evenNumbers, 2);


/* -------------------------------------------------------------------------- */

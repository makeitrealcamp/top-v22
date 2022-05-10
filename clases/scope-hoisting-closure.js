/* Navegador - window
NodeJS - global */

//Lexical scope (estatico)

// Global
// num
//  num1
//    num2
// perro

/* var num = 4;

function number(){
  var num1 = 4;
  function calculadora(a, b){
    var num2 = 2;
  }
}

var perro = "Fito"
console.log(num1)


var gato = "michu"

if(true){
  let persona = "pepito"
} */

/* for (var i = 0; ......){

} */

//Hoisting

/* console.log(hamster);
let hamster = "dexter"; */

//Closures
// Es una funciòn que aun siendo invocada por fuera de su lexical scope, tiene acceso a su lexical scope

function persona() {
  return function carro() {
    return "Tengo un motor";
  };
}

let johan = persona();
let car = johan();

console.log(car);

/* function multiplyByTwo(n){
  return n * 2; 
}

function multiplyByThree(n){
  return n * 3; 
} */

function multiply(factor) {
  function op(n) {
    return n * factor;
  }

  return op;
}

let multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3));
console.log(multiplyByTwo(1));

let multiplyByTen = multiply(10);
console.log(multiplyByTen(5));

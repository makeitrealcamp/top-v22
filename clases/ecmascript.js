//Parametros por defecto

const { apply } = require("mathjs");

// function suma(a, b) {
//   if (b === undefined) {
//     b = 0;
//   }
//   return a + b;
// }

// function suma(a = 0, b = 0) {
//   return a + b;
// }

// console.log(suma());
// console.log(suma(1));
// console.log(suma(1, 2));
// console.log(suma(1, 2, 3));

//Plantilla literales

// const fullName = "Pepito Peres";
// console.log("Me llamo:" + fullName + "!");
// console.log(`Me llamo ${suma}!`);
// console.log(`Me llamo ${suma()}!`);

//Desctructuring
// let obj = { a: 1, b: 2, c: 3 };

// let a = obj.a
// let b = obj.b
// let c = obj.c

// let { c: x } = obj;

// console.log(x);

// let arr = [4, 5, 6];

// let [first, loquesea, six] = arr;
// console.log(first, loquesea, six);

// spread operator

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// const person = {
//   name: "Anderson",
//   age: "31",
//   city: "Bogotá",
//   hobby: function () {
//     return "Lectura cientifica";
//   },
// };

// const fullPerson = { ...person, country: "Colombia", city: "Medellin" };
// console.log(fullPerson);
// console.log(fullPerson.hobby())

// let arr = [4, 5, 6];
// let arr2 = [100, 200, 300];

// console.log([...arr, ...arr2, 555]);

// let nums = [1, 2, 3, 4, 10, 25];

// console.log(Math.max(nums));
// console.log(Math.max.apply(null, nums));
// console.log(Math.max(...nums));

//const y let

// if (true) {
//   let num = 1;
// }

// console.log(num);
// const num = 1;

//comparación (doble o triple igual)

// console.log(1 === 1);

// doble igual
// 1 ---> 1 int
// "1" ---> char -> int
// 1 es igual al "1" = 1 ---> que si es verdad

//triple igual
// 1  es igual a "1" ? No

//arrow function

// function person(name, age) {
//   var num;
// }

// const person = function(name, age) {

// }

// const person = (name, age) => {
//   var num;
// };

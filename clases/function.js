function person(name, age) {
  return {
    name,
    age,
  };
}

const daniela = person("Daniela", 30);

console.log(daniela);

function teacher(name, age, lesson) {
  return {
    ...person(name, age),
    lesson,
  };
}

const sergio = teacher("Jonathan", 30, "clase de funciones");

console.log(sergio);

//inmutabilidad

const arr = [1, 2, 3];

arr.concat(4);
console.log("Concat", arr);

arr.push(4);
console.log("Push", arr);

const newArr = [...arr, 4, 5];
console.log(arr);
console.log(newArr);

//side effect

let num = 4;
function sideEffect(a) {
  return a;
}

console.log(sideEffect(num));

//dados los mismos argumentos que le vamos a ingresar a la funcion deben retornar el mismo valor

function suma(a, b) {
  return a + b;
}

console.log(suma(1, num));
num = 5;

console.log(suma(1, num));

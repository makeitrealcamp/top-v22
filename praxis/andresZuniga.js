/**
 * @fileoverview Script para hacer parejas aleatorias a partir de un arreglo de nombres
 * 
 * @version 1.0
 * @author Andrés Zuñiga <andres.zuniga.063@gmail.com>
 * 
 */
/**
 * Listado de estudiantes a emparejar
 * @type {Array}
 */
const STUDENTS = [
  "Daniela Torres",
  "Edinael Sanguino",
  "Jefferon Vasquez",
  "Eduardo Herrera",
  "Juan A.Albites",
  "Valentina Paredes",
  "Andrés Zuñiga",
  "Jonathan Valencia",
  "Anderson Uribe",
  "Johan Sora",
  "Crithian Cepeda",
  "Daniel Quispe",
  "Manuel Bojacá",
]

/**
 * Crea un emparejamiento aleatorio de estudiantes.
 * @param {Array} students Listado de estudiantes a emparejar
 */
function matchStudens(students) {
  let matchs = [];
  //Realizo una copia del arreglo original
  let list = students.slice();
  let count = 0;                //Para contar el numero de ciclos del while

  do {
    let match = [];                   //Para guardar el emparejamiento
    if (list.length > 3) {
      //Se selecciona el primer estudiante y se retira el listado
      let index1 = Math.floor(Math.random() * list.length);
      match.push(list.splice(index1, 1)[0]);
      //Se selecciona el segundo estudiante y se retira del listado
      let index2 = Math.floor(Math.random() * list.length);
      match.push(list.splice(index2, 1)[0]);
    } else {
      match = list.splice(0, list.length);
    }
    matchs.push(match);
    count++;
    if (count > students.length) {
      break;
    }
  } while (list.length > 0);

  return matchs;
}

console.log(matchStudens(STUDENTS));
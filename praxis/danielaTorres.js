//Este Script retorna un Array con los arrays de las parejas aleatorias
//Solución de Daniela Torres y Edinael Sanguino

let estudiantes = ["Daniela Torres", "Edinael Sanguino",
"Jefferon Vasquez", "Eduardo Herrera", "Juan A. Albites",
"Valentina Paredes", "Andrés Zuñiga", "Jonathan Valencia",
"Anderson Uribe", "Johan Sora", "Cristhian Cepeda", "Daniel Quispe",
"Manuel Bojacá"];

const randomPairs = (students) =>{
    let randomArray = [];
    const pairsArray = [];
    const num = (students.length);

    for(i=0; i < num; i++){

        let random_index = Math.floor(Math.random()*(students.length));
        let person = students[random_index];
        randomArray.push(person);
        students.splice(random_index,1);

        if(randomArray.length === 2 && students.length >= 2){
            pairsArray.push(randomArray);
            randomArray = [];
        }
        else if(students.length < 1){
            pairsArray.push(randomArray);
        }
    }
return pairsArray;
}
console.log(randomPairs(estudiantes));
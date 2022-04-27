const estudiantes = ["Daniela Torres", "Edinael Sanguino", "Jefferon Vasquez", "Eduardo Herrera", 
"Juan A. Albites","Valentina Paredes", "Andrés Zuñiga", "Jonathan Valencia", "Anderson Uribe", "Johan Sora", 
"Crithian Cepeda","Daniel Quispe", "Manuel Bojacá"];

function aleatorio(array){
    for (let i = array.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]]
    }
    let estudiantesAleatorio = array;
    const obtenerEstudiante = () => {
    return estudiantesAleatorio.pop();
    }
    let parejas ='';
    let gruposposibles= Math.floor(array.length/2);
    for(let i = 1; i<=gruposposibles; i++){
        if(estudiantesAleatorio.length === 3){
            parejas = parejas + `grupo ${i}: ` + obtenerEstudiante() + " , " + obtenerEstudiante() + " y " + obtenerEstudiante();
        }else{
            parejas = parejas + `grupo ${i}: ` + obtenerEstudiante() + " y " + obtenerEstudiante() + "\n";
        }
    }
    return parejas;
    }
console.log(aleatorio(estudiantes));


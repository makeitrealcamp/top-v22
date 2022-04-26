
// se debe importar el CDN de la libreria underscorejs.org en el index.html 
// <script src="https://cdn.jsdelivr.net/npm/underscore@latest/underscore-umd-min.js"></script>

const estudiantes = [ 'Daniela Torres',
    'Edinael Sanguino',
    'Jefferon Vasquez',
    'Eduardo Herrera',
    'Juan A. Albites',
    'Valentina Paredes',
    'Andrés Zuñiga',
    'Jonathan Valencia',
    'Anderson Uribe',
    'Johan Sora',
    'Crithian Cepeda',
    'Daniel Quispe',
    'Manuel Bojacá']

const estudiantesAleatorio = _.shuffle(estudiantes);
console.log(estudiantesAleatorio);

const obtenerEstudiante = () => {
    return estudiantesAleatorio.pop();
}
// console.log(obtenerEstudiante())
const obtenerGrupo = () => {
    
    let grupos = '';

    for(let i = 1; i<=6; i++){
        if(estudiantesAleatorio.length === 3){
            grupos = grupos + `grupo ${i}: ` + obtenerEstudiante() + " , " + obtenerEstudiante() + " y " + obtenerEstudiante();
            
        }else{
            grupos = grupos + `grupo ${i}: ` + obtenerEstudiante() + " y " + obtenerEstudiante() + "\n";
        }
    }
     return grupos;
}

console.log(obtenerGrupo());
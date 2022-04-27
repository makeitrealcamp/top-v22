const topStudents = [
    'Daniela Torres',
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
    'Manuel Bojaca']



const sortStudents = (students) => {
    students = students.sort((a, b) => 0.5 - Math.random());
   
    if(students.length % 2 == 0){
        while(students.length) {
            console.log(topStudents.splice(0,2));
        }
    }else{
        while(students.length) {
            console.log(topStudents.splice(0,2));
            if(students.length == 3){
                console.log(topStudents.splice(0,3));
            }
        }
    }
}

sortStudents(topStudents)

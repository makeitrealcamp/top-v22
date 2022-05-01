function parejas(list){
    let nameRandom = [];
    let i = 0;
    while (i < list.length){
        let random = Math.floor(Math.random() * list.length )
        if (!nameRandom.includes(list[random])){
            nameRandom.push(list[random])
            i++
        }
    }
    
    for (let j = 1; j< list.length; j+=2){
        if(nameRandom.length ===3){
             console.log([nameRandom.pop(), nameRandom.pop(), nameRandom.pop()])
            }
        else{
            console.log([nameRandom.pop(), nameRandom.pop()])
        }
    }

}

const a = [ "Daniela Torres",
    "Edinael Sanguino",
    "Jefferon Vasquez",
    "Juan A. Albites",
    "Valentina Paredes",
    "Andrés Zuñiga",
    "Jonathan Valencia",
    "Anderson Uribe",
    "Johan Sora",
    "Crithian Cepeda",
    "Daniel Quispe",
    "Manuel Bojacá"];
parejas(a);
function parejas(list){
    let numberRandom = [];
    let i = 0;
    while (i < list.length){
        let random = Math.floor(Math.random() * list.length )
        if (!numberRandom.includes(random)){
            numberRandom.push(random)
            i++
        }
    }
    for (let j = 0; j< numberRandom.length; j+=2){
        console.log([list[numberRandom[j]], list[numberRandom[j+1]]]) 

    }
    console.log(numberRandom)

    
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
    "Manuel Bojacá" ];


parejas(a);


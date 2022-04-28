const names =[ "Daniela Torres",
    "Edinael Sanguino",
    "Jefferson Vasquez",
    "Eduardo Herrera",
    "Juan A. Albites",
    "Valentina Paredes",
    "Andrés Zuñiga",
    "Jonathan Valencia",
    "Anderson Uribe",
    "Johan Sora",
    "Crithian Cepeda",
    "Daniel Quispe",
    "Manuel Bojacá" ]

function ranArr(arr) {
    let res = [...arr];
    return res.sort(function() { return Math.random() - 0.5});
}

function pairs (arr) {
    let len = arr.length;
    console.log('len: ', len);
    let arr0 = [];

    for(let i = 0; i < len / 2 - 1; i++){
        arr0[i] = arr[i] + ', ' + arr[i*2];
    }
    if(arr.length % 2 !== 0){
        arr0[arr0.length-1] = arr0[arr0.length-1] + ', ' + arr[arr.length-1]; 
        console.log('arr0.length', arr0.length);
    }
    
    return arr0;
}

function runned(arr){
    return pairs(ranArr(arr));
}
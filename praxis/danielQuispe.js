const makers = [
  "Daniela Torres",
  "Edinael Sanguino",
  "Jefferon Vasquez",
  "Eduardo Herrera",
  "Juan A. Albites",
  "Valentina Paredes",
  "Andrés Zuñiga",
  "Jonathan Valencia",
  "Anderson Uribe",
  "Johan Sora",
  "Crithian Cepeda",
  "Daniel Quispe",
  "Manuel Bojacá",
];

const randomGroup = (arr) => {
  const groups = [];
  let middle = arr.length / 2 - 0.5;
  const newArr = arr.sort(function () {
    return Math.random() - 0.5;
  });
  for (let i = 0; i < middle; i++) {
    if (i >= middle - 1) {
      console.log(newArr.slice(i * 2, i * 2 + 3));
    } else {
      console.log(newArr.slice(i * 2, i * 2 + 2));
    }
  }
};

randomGroup(makers);

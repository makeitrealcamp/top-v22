let organizatePairs = () => {
  let pairs = [
    "Daniela Torres",
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
    "Manuel Bojacá",
  ];

  let groups = [];
  for (i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * (pairs.length - 1)) + 1;
    groups.push([pairs[0], pairs[index]]);
    pairs[index] = 0;
    pairs.shift();
    let pairs2 = pairs.filter((num) => num != 0);
    pairs = pairs2;
  }
  return groups;
};
organizatePairs();

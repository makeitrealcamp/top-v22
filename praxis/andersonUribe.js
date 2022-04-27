let organizatePairs = () => {
    let pairs = [
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
    let groups = "";
    for (i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * (pairs.length - 1)) + 1;
      groups += `[${pairs[0]} es con ${pairs[index]}], \n`;
      pairs[index] = 0;
      pairs.shift();
      let pairs2 = pairs.filter((num) => num != 0);
      pairs = pairs2;
    }
    groups += `el grupo de 3 es [${pairs[0]},${pairs[1]},${pairs[2]}]`;
    return alert(groups);
  };
  organizatePairs();
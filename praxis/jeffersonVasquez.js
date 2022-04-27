let names = [
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

const getGroups = (names) => {
  let groups = "";
  let totalGroups = Math.trunc(names.length/2)

  const shuffleNames = names.sort(() => Math.random() - 0.5);
  const getShuffleStudent = () => {
    return shuffleNames.pop();
  };

  for (let i = 1; i <=totalGroups; i++) {
    if (shuffleNames.length === 3) {
      groups += `${getShuffleStudent()}  ${getShuffleStudent()}  ${getShuffleStudent()} `;
    } else {
      groups += `${getShuffleStudent()}  ${getShuffleStudent()} \n`;
    }
  }
  return groups;
};

console.log(getGroups(names));

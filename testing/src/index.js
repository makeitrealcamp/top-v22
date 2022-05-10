exports.sum = (a, b) => {
  return a + b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.subs = (a, b) => {
  return a - b;
};

exports.div = (a, b) => {
  return a / b;
};

exports.person = (_name, age) => {
  return {
    _name,
    age,
    greet() {
      return "Hola mundo soy pepito";
    },
  };
};

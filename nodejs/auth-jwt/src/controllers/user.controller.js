const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async signup(req, res) {
    try {
      const { email, password } = req.body;

      //bcrypdt.hash recibe dos argumentos
      //-- La contraseña que queremos encriptar
      //-- El salt que hace referencia a el número de procesos para encriptar
      const encPassword = await bcrypt.hash(password, 8);
      const user = await User.create({ email, password: encPassword });

      const token = jwt.sign(
        { id: user._id }, //Payload ó datos usuario
        "secretKey", //llave secreta
        { expiresIn: 60 * 60 * 24 }
      );

      res.status(201).json({ token, message: "User created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Usuario o contraseña invalida");
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        throw new Error("Usuario o contraseña invalida");
      }

      const token = jwt.sign(
        { id: user._id }, //Payload ó datos usuario
        "secretKey", //llave secreta
        { expiresIn: 60 * 60 * 24 }
      );

      res.status(201).json({ token, message: "User login successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

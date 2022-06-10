const User = require("../models/user.model");
const { transporter, welcome } = require("../utils/mailer");

module.exports = {
  async signup(req, res) {
    //const newUser = req.body;
    const newUser = {
      ...req.body,
      isValidate: false, //Bandera para saber si el usuario si tiene el correo
    };

    const user = await User.create(newUser);

    await transporter.sendMail(welcome(user));

    res.status(201).json(user);
  },

  /*   async validate(req, res) {
    const { userId } = req.params;

    const user = await User.create(userId);

    const newUser = {
      ...req.body,
      isValidate: true,
    };

    await transporter.sendMail(welcome(user));

    res.status(201).json(user);
  }, */
};

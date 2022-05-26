const User = require("../models/user.model");

module.exports = {
  create(req, res) {
    const data = req.body;

    const newUser = {
      ...data,
    };

    User.create(newUser)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};

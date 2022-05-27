const User = require("../models/user.model");

module.exports = {
  list(req, res) {
    User.find()
      .then((users) => {
        res.status(200).json({ message: "users found", data: users });
      })
      .catch((err) => {
        res.status(404).json({ message: "users not found" });
      });
  },
  show(req, res) {
    const { userId } = req.params;

    User.findById(userId)
      .select("-password")
      .populate("reviews", "title comment")
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(404).json(err));
  },
  create(req, res) {
    User.create(req.body)
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(400).json(err));
  },
};

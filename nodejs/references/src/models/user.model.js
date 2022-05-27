const { model, Schema, models } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      validate: [
        {
          validator(email) {
            return models.User.findOne({ email })
              .then((user) => !user)
              .catch(() => false);
          },
          message: "Ya existe el correo",
        },
      ],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

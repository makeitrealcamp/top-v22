const { Schema, model, models } = require("mongoose");

const emailRegex = new RegExp("[a-zA-Z0-9]{5,}@[a-z]{3,5}.com?");

const userSchema = new Schema(
  {
    rol: {
      type: String,
      required: true,
      enum: {
        values: ["admin", "superadmin", "anfitrion"],
        message: "Es un rol invalido",
      },
    },
    name: {
      type: String,
      required: [true, "El campo nombre el requerido"],
      minlength: [7, "El nombre es muy corto"],
      maxlength: [10, "El nombre es muy largo"],
    },
    age: {
      type: Number,
      required: true,
      //min: [18, "Debes ser mayor de edad"],
      max: [70, "La edad máxima es 70"],
      validate: [
        {
          validator(value) {
            if (value < 18) {
              return false;
            }
            return true;
          },
          message: "No cumple",
        },
      ],
    },
    email: {
      type: String,
      required: true,
      match: [emailRegex, "Email Invalido"], //Regular Expresions
      validate: [
        {
          validator(value) {
            return models.User.findOne({ email: value })
              .then((user) => !user) // user === null = falsyValue
              .catch(() => false);
          },
          message: "Ya existe un usuario registrado con ese correo",
        },
      ],
    },
    working: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;

const { Schema, model } = require("mongoose");

//Schema recibe dos argumentos
//-- Objeto que es la estructura del schema
//-- Objeto de opciones
//--/-- Fecha de publicación del registro
//--/-- Fecha de actualización del registro

const videoSchema = new Schema(
  {
    title: String,
    url: String,
    likes: [Number],
    description: String,
    isCopy: Boolean,
    published: Date,
  },
  {
    timestamps: true,
  }
);

//Recibe dos argumentos
//-- String con el nombre del model
//-- Schema que creamos arriba

const Video = model("Video", videoSchema);

// Video ---> youtube-video
module.exports = Video;

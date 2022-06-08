const Busboy = require("busboy");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const data = new FormData();
// data.append("username", username);
// data.append("file", file);

formData = (req, res, next) => {
  let uploadingFile = false;
  let uploadingCount = 0;

  const done = () => {
    if (uploadingFile) return;
    if (uploadingCount > 0) return;
    next();
  };

  const bb = Busboy({ headers: req.headers });
  req.body = {};

  //Captura partes que no son un archivo
  bb.on("field", (key, val) => {
    req.body[key] = val;
  });

  //Captura partes que si son un archivo
  bb.on("file", (key, stream) => {
    uploadingFile = true;
    uploadingCount++;
    const cloud = cloudinary.uploader.upload_stream(
      { upload_preset: "lesson-preset" },
      (err, res) => {
        if (err) throw new Error("Something went wrong!");

        console.log("response cloudinary", res);
        req.body[key] = res;
        uploadingFile = false;
        uploadingCount--;
        done();
      }
    );

    stream.on("data", (data) => {
      //console.log(data);
      cloud.write(data);
    });

    stream.on("end", () => {
      //console.log("finish");
      cloud.end();
    });
  });

  //Finalizar el recepcion de datos
  bb.on("finish", () => {
    //next();
    done();
  });

  req.pipe(bb);
};

module.exports = formData;

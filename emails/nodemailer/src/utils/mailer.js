const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  host: "smtp.aol.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

exports.verify = async (transporter) => {
  const connection = await transporter.verify();
  if (connection) {
    console.log("Server is ready to take our message");
  }
};

exports.welcome = (user) => {
  const styles = {
    h2: "color: gray",
  };

  return {
    from: `"${process.env.MAIL_USERNAME}" <${process.env.MAIL_USER}>`,
    to: user.email,
    subject: "Bienvenido a nuestra APP",
    html: `
    <div>
    <p>Bienvenido, </p>
    <h2 style="${styles.h2}">${user.name}</h2>
    <p> a esta aplicación que te hará descubrir un nuevo mundo.</p>
    </div>
    `,
    text: `Bienvenido ${user.name}  a esta aplicación que te hará descubrir un nuevo mundo.`,
  };
};

/* exports.validate = (user) => {
  const styles = {
    h2: "color: gray",
  };

  const endpoint = `http://localhost:8080/users/validate/${user._id}`;

  return {
    from: `"${process.env.MAIL_USERNAME}" <${process.env.MAIL_USER}>`,
    to: user.email,
    subject: "Confirma el correo",
    html: `
    <div>
    <p>Bienvenido, por favor dale click al siguiente link para confirmar tu correo.</p>
    <a href="${endpoint}">${endpoint}</a> 
    <p> a esta aplicación que te hará descubrir un nuevo mundo.</p>
    </div>
    `,
    text: `Bienvenido ${user.name}  a esta aplicación que te hará descubrir un nuevo mundo.`,
  };
}; */

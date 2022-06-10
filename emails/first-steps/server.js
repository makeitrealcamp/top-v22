const nodemailer = require("nodemailer");

(async () => {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  const user = { email: "prueba@test.com", name: "Jhon Doe" };

  const styles = {
    container: "background-color: blue; border: 1px solid black; color: white",
    title: "text-decoration: underline",
  };

  const preview = await transporter.sendMail({
    from: " 'Jhon Doe' <johndoe@test.com>",
    to: user.email,
    subject: "Welcome",
    html: `
    <div style="${styles.container}">
      <h1 style="${styles.title}">Welcome</h1>
      <p>hello, ${user.name}</p>
    </div>
    `,
    text: `Welcome. hello ${user.name}`,
  });

  console.log(nodemailer.getTestMessageUrl(preview));
})();

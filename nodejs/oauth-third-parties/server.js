require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const session = require("cookie-session");

const user = {};

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_API_KEY,
      consumerSecret: process.env.TWITTER_API_KEY_SECRET,
      callUrl: "/auth/callback",
    },
    async (token, tokenSecret, profile, done) => {
      const user = await User.findOne({ twitterId: profile._json.id_str });

      if (user) return done(null, user);

      const newUser = await User.create({
        name: profile._json.name,
        twitterId: profile._json.id_str,
      });

      return done(null, newUser);
    }
  )
);

const app = express();
const port = 8080;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    maxAge: 1000 * 60 * 60 * 24,
  })
);

app.get(
  "/auth/callback",
  passport.authenticate("twitter", {
    succesRedirect: "/auth/success",
    failureRedirect: "/auth/failure",
  })
);

app.get("/auth/success", (req, res) => {
  res.status(200).json({ message: "loged successfully" });
});

app.get("/auth/failure", (req, res) => {
  res.status(401).json({ message: "loged failed" });
});

app.get("auth/twitter", passport.authenticate("twitter"));

app.get("/auth/logout", (req, res) => {
  (req.session = null), res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

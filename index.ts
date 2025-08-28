import express, { json, urlencoded } from "express";
import { PORT } from "./utils/configs.js";
import routers from "./routes/index.js";
import passport from "passport";
import session from "express-session";
import { isLoggedIn } from "./middlewares/isLoggedIn.js";
import './auth/auth.js'
const app = express();
app.use(
  session({ secret: "supersecret", resave: false, saveUninitialized: false, cookie: {maxAge: 60*60*10}}),
  passport.initialize(),
  passport.session(),
  urlencoded({ extended: true }),
  json(),
  routers
);

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});


app.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});
app.listen(PORT, () =>
  console.log(`The application is running on port:${PORT}`)
);

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../utils/configs.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
      (request,accessToken,refreshToken,profile,done) => {
        return done(null, profile)
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((obj:any, done) => {
    done(null, obj)
})
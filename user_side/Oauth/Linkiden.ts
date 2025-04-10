require("dotenv").config();
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
import passport from "passport";
passport.use(
  new LinkedInStrategy(
    {
      clientID:process.env.Client_ID,
      clientSecret:process.env.PrimaryClient_Secret,
      callbackURL:"http://localhost:4000/auth/linkeds/callback",
      scope: ['r_emailaddress', 'r_liteprofile'],
      state: true,
    },
    function (
      accessToken: any,
      refreshToken: any,
      profile: any,
      done: Function
    ) {
      // Your user handling logic
      return done(null, profile);
    }
  ),
  
);
console.log("inkedin", process.env.Client_ID, process.env.PrimaryClient_Secret);

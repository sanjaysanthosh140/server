"use strict";
require("dotenv").config();
const TwitterClient = require("passport-twitter").Strategy;
const passport = require("passport");
//console.log(process.env)
passport.use(new TwitterClient({
    consumerKey: process.env.API_Key,
    consumerSecret: process.env.API_KeySecret,
    callbackURL: "http://localhost:4000/auth/twitter/callback",
    includeEmail: true,
}, function (token, tokenSecret, profile, done) {
    const userdata = profile._json;
    console.log("profile", userdata.id);
    done(null, userdata.id);
}));
console.log("twitter", process.env.API_Key, process.env.API_KeySecret);
module.exports = passport;

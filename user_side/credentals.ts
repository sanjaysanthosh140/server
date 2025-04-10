import { Request, Response, NextFunction } from "express";
const express = require("express");
const Router = express.Router();
const passport = require("passport");

Router.get("/oauth/twitter", passport.authenticate("twitter"));

Router.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    session:false,
    successRedirect:"http://localhost:5173/",
    failureRedirect:"/login",
  })
);

Router.get("/oauth/linkedin", passport.authenticate("linkedin"));

Router.get("/auth/linkedin/callback", passport.authenticate("linkedin", {
  session: false,
  successRedirect:"http:localhost:5173/",
  failureRedirect:"/login",
}));

module.exports = Router;

// Router.get('/auth/twitter/callback',passport.authenticate('twitter',{
// session: false,
// successRedirect: "http://localhost:5173/", // Fixed typo from 'successReidirect'
// failureRedirect: "/login"
// }))

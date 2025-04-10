"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const passport_1 = __importDefault(require("passport"));
passport_1.default.use(new LinkedInStrategy({
    clientID: process.env.Client_ID,
    clientSecret: process.env.PrimaryClient_Secret,
    callbackURL: "http://localhost:4000/auth/linkeds/callback",
    scope: ['r_emailaddress', 'r_liteprofile'],
    state: true,
}, function (accessToken, refreshToken, profile, done) {
    // Your user handling logic
    return done(null, profile);
}));
console.log("inkedin", process.env.Client_ID, process.env.PrimaryClient_Secret);

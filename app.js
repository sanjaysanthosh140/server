const express = require('express');
const morgan = require('morgan')
const app = express();
const port = 4000;
const userRute = require("./users_out/credentals")
const passport = require("passport")
require("./users_out/Oauth/twitter")
require("./users_out/Oauth/Linkiden")
const session = require("express-session")
const cors = require("cors")
// require(dotenv).config()

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],

}))

app.use(express.json())
app.use(morgan('dev'))

// app.get('/auth/twitter/callback',passport.authenticate('twitter',{
    // session:false,
    // successReidirect:"http://localhost:3000/",
    // failureRedirect:"/login"
// }))

app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized:true,
    cookie:{ secure:false } // Set to true if using HTTPS
  }));
  
  // Initialize passport AFTER session middleware
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.urlencoded({extended:true}))
  
app.use('/',userRute)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
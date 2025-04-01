const express = require('express');
const morgan = require('morgan')
const app = express();
const port = 4000;
const userRute = require("./users_out/credentals")

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})




app.use(morgan('dev'))
app.use('/',userRute)
const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");



app.use(express.json({extended: true}))

app.use("/api", require('./src/routes'))

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log('conectado a mongoDB')
    server = app.listen(port, () => {
        console.log(`Aplication listening in port ${port}`)
    })    
})
const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const dotenv=require("dotenv");

const Router = require("./routes/routes");
const res = require("express/lib/response");

const app=express();
dotenv.config();


// pug 
app.set('view engine', 'pug');

//#region db connection to cloud

mongoose.connect(process.env.DB_CONNECT,{
    useUnifiedTopology:true,useNewUrlParser:true
},()=>{
    console.log("Connection Established to DB")
});

//#endregion


// midleware
app.use(bodyParser.json());
app.use("/",Router);

app.listen(8080, () => {
  console.log("Server is running at port ");

});

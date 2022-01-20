const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const dotenv=require("dotenv");

const Router = require("./routes/routes");
const res = require("express/lib/response");

const app=express();
dotenv.config();


const path = require("path"); 



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

//#region pug-test
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// controller 
app.use("/pugTest",(req,res)=>{
  res.render("index", { title: "This is title" });
  // second argument  {optional}  {object ->passes to the template}. become local variables in the template. 
  // However, index.pug doesn't use title locally; instead, the template it extends,layout.pug, uses it.

  //res.status(200).send("WHATABYTE: Food For Devs");
})

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
}); 
// The views setting tells Express what directory it should use as the source of view template files. In this case, you set the views directory as the source using the path.join() method, which creates a cross-platform file path.

// The view engine setting tells Express what template engine to use, which in this case, is pug.
//#endregion
app.listen(3000, () => {
  console.log("Server is running at port 3000");

});

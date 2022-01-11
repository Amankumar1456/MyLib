const express = require("express");
const Books = require("../Model/Books");
//const BookController=require("./Controller/BookController")
const BookController=require('../Controller/BookController.js')
const app=express();

app.get("/",async (req,res)=>{
    try {
        console.log("Getting all the books  ")
        const book=await Books.find();
        res.json(book);

    } catch (error) {
        console.log(error);
        res.json(error);
    }
});
app.get("/trial",BookController.)
// app.post("/",);
// app.get("/:bookId")
// app.put("/:bookId");
// app.delete("/:bookId")


module.exports=app;
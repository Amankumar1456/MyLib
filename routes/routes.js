const express = require("express");
const Books = require("../Model/Books");
//const BookController=require("./Controller/BookController")
const BookController=require('../Controller/BookController.js')
const app=express();

app.get("/",async (req,res)=>{
    try {
        console.log("Getting all the books")
        const book=await Books.find();
        console.log("book vale find ke niche");
        res.json(book);

    } catch (error) {
        console.log(error);
        res.json(error);
    }
});
app.get("/trial",BookController.book_all);

app.put("/putReq",async (req,res)=>{
    console.log(req);
    const books={
        title:req.body.title,
        author:req.body.author,
        genere:req.body.genere
    }
    const book=new Books.save(books);
    console.log("book saved");
    res.json(book);
    
})
// app.post("/",);
// app.get("/:bookId");
// app.put("/:bookId");
// app.delete("/:bookId")


module.exports=app;
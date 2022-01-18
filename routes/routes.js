const express = require("express");
const Books = require("../Model/Books");
//const BookController=require("./Controller/BookController")
const BookController=require('../Controller/BookController.js')
const app=express();

app.get("/get-all",async (req,res)=>{
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

app.put("/add-book",async (req,res)=>{
    console.log(req);
    const books={
        title:req.body.title,
        author:req.body.author,
        genere:req.body.genere
    }
    const book=new Books(books);
    await book.save();
    console.log("book saved");
    res.json(book);
    
})
app.put("/detail/:title",async(re,res)=>{
    try {
        var title=req.params.title;
        var result=Books.findOne({"title":title});
        res.send(result); 
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})
app.get("/update/:title",async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
});
app.get("/isAwake",async (req,res)=>{
    res.send("I am up...")
})
app.put("/delete/:title",async(req,res)=>{
    try {
        var title=req.params.title;
        Books.findOneAndRemove({"title":title})
        res.send()
    } catch (error) {
        console.error(error);

    }
})


module.exports=app;
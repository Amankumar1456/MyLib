const mongoose=require("mongoose");


const BookSchema= new mongoose.Schema({
    title:String,
    author:String,
    genere:String

});

module.exports=mongoose.model("MyCollection",BookSchema);
// this will create a collection with teh name "Books"
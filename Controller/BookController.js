// importing models
const Books = require("../Model/Books");
// importing routes
const routes=require("../routes/routes");


// Get all Books
exports.book_all = async (req,res)=> {
    try {
        const book=await Books.find();
        res.json(book);

    } catch (error) {
        console.log(error);
        res.json(error);
    }
};
// Get single Books
async function book_details (req,res){
    try {
        const book=await Books.findById(req.params.book_details)
        res.json(book);
    } catch (error) {
        res.json(error);
    }
};
// add new Book 
const book_add=async (req,res)=>{
    try {
        const book={
            title:req.body.title,
            author:req.body.author,
            genere:req.body.genere
        }
       await Books.save(book);
        res.json(book);
    } catch (error) {
        res.json(error);
    }
};
// update Book
const book_update=async (req,res)=>{
    try {
        const book={
            title:req.body.title,
            author:req.body.author,
            genere:req.body.genere
        }
    } catch (error) {
        console.log(error);
    }
};
// delete Book
const book_delete=async (req,res)=>{
    
};


// exports

module.exports= {book_details};
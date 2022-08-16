const UserModel= require("../models/booklist")


const booksData=async function(req,res){
    let bookData=req.body
    let save= await UserModel.create(bookData)
    res.send({msh:save})   
}



    const bookListget=async function(req,res){
        let booli=await UserModel.find({bookName:"poor ",authorName:"roberta"})
        res.send(booli)
    }

    module.exports.bookli=bookListget
    module.exports.books=booksData
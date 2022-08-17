

const mongoose = require('mongoose');


const bookSchema=new mongoose.Schema({
        bookName:{
            type:String,
            require:true
        },
        authorName:String,
        price:{
            ind:Number,
            euro:Number},
    year:Number,
    authorName:String,
    totalPages:Number,
    stockAvailable:Boolean
    
    },{timestamps:true})


    module.exports = mongoose.model('book',bookSchema)//books
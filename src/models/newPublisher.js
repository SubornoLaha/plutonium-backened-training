const mongoose = require('mongoose');

const publisherSchema=new mongoose.Schema({
        name:String,
        HeadQuarter:String

},{timestamps:true})

module.exports=mongoose.model('publisher',publisherSchema)
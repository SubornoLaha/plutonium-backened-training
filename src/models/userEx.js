const mongoose = require('mongoose');


const exPostSchema= new mongoose.Schema({
        name:String,
        age:Number,
        emailid:{
                type:String,
                required:true
        }
},{timestapms:true})


module.exports=mongoose.model('expost',exPostSchema)
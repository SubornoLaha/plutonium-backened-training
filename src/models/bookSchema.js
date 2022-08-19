const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
        name:String,
        author_id:{
                type:String,
                require:true
        },
        price:Number,
        ratings:Number
})
module.exports=mongoose.model('bookSchema',bookSchema)





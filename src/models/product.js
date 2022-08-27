const mongoose=require('mongoose')

const proSchema=new mongoose.Schema({
        name:String,
        category:String,
        price:{
                type:Number,
                require:true
        }
})

module.exports = mongoose.model('product', proSchema)
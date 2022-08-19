const bookSchema=require('../models/bookSchema')
const authorSchema=require("../models/authorSchema")


//Write create APIs for both books and authors 
const fun1=async function(req,res){
        let data =req.body
        let saveData=await bookSchema.create(data)
        res.send({msg1:saveData})
}
const fun2 = async function(req,res){
        let data=req.body
        let saveData=await authorSchema.create(data)
        res.send({msg2:data})
}

//List out the books written by "Chetan Bhagat" 
const fun3=async function(req,res){
        let name=await authorSchema.find({author_name:"Chetan Bhagat"})
        let authorId=name[0].author_id
        let bookName=await bookSchema.find({author_id:authorId}).select({name:1,_id:0})
        res.send(bookName)
}
//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response
const fun4=async function (req,res){
        let bookName=await bookSchema.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
        let price=bookName.price
       let authorId=bookName.author_id
       let authorName=await authorSchema.find({author_id:authorId})
     
       res.send(authorName)
}


 //Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 

 const fun5=async function(req,res){
        let price=await bookSchema.find({price:{$gte:50,$lte:100}})
        
     let arr=[]
      for(let i=0;i<price.length;i++){
        let id=price[i].author_id
        const authorName=await authorSchema.find({author_id:id})
        arr.push(authorName[0].author_name)
      }
      res.send(arr)
 }


module.exports={fun1,fun2,fun3,fun4,fun5}

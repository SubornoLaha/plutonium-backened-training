const userModel = require("../models/bookModel")
// userModel = require("../models/userModel")




let fun1=async function(req,res){
    let data=req.body
    let data2=await userModel.create(data)
    res.send(data2)
}

let fun2=async function(req,res){
    let data=await userModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg:data})
}

let fun3=async function(req,res){
    let data=req.body.year
    let data2=await userModel.find({year:{$eq:data}})
    res.send(data2)
}

let fun4=async function(req,res){

}

let fun5=async function(req,res){
    let data=await userModel.find({'prices.ind':{$in:[100,500,300]}})
res.send(data)
}

let fun6=async function(req,res){
    let data=await userModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
res.send(data)
}

module.exports={fun1,fun2,fun3,fun4,fun5,fun6}
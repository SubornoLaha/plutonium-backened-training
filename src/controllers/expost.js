const userExPost=require('../models/userEx')

let ex= async function(req,res){
        let data=req.body
        let save=await userExPost.create(data)
        res.send({msg:save})}


        module.exports.ex=ex
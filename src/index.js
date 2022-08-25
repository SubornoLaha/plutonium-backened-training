const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




// Write a middleware that logs (console.log) some data everytime any API is hit
// Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
app.use (
   
       function (req,res,next){
            var ip = req.connection.remoteAddress
            let adate=new Date()
            var ip1 = req.connection.remoteRoute
            console.log ("inside GLOBAL MW");
            console.log(ip,ip1,adate,req.originalUrl)
        next()
        }
        
  
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

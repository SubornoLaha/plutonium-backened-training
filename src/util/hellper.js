// Problem 2
// Module 2 : src/util/helper.js

// 	- printDate() : prints the current date
// 	- printMonth() : prints the current month
// 	- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler


const printDate = function ()
{
        console.log(`The current date is 06-08-2022`)
}
const printMonth=function(){
        console.log("The current month is august")
}
const getBatchInfo =function()
{
        console.log(" plutonium, W3D4, the topic for today is Nodejs module system")
}

module.exports.name1=printDate
module.exports.name2=printMonth
module.exports.name3=getBatchInfo

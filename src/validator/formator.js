
// Problem 3
// Module 3: src/validator/formatter.js
// 	- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// 	- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// 	- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler



const trim=function(){
        let r=`    my name is ssuborno    `
        let u=r.trim()
        console.log(u)
}
const changeToUpperCase=function(){
        let gh=`SuBoRNo`
        let ra=gh.toUpperCase() 
        console.log(ra)
}
const changeToLowerCase=function(){
        
                let gh=`SuBoRNo`
                let ra=gh.toLowerCase() 
                console.log(ra)
}
module.exports.yo=changeToLowerCase
module.exports.no=trim
module.exports.tes=changeToUpperCase
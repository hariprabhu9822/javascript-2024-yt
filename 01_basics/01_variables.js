// semicolons are not so imp in js 

const accountId = 232342;
// const variable value cannot be changed

let accountEmail = "hari@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

/*If u dont give value to a variable that is u just declare it then it's value becomes undefined
Eg : let account
So value of account variable will be undefined */
let accountState

// accountId = 67
// above line will give error saying "typeerror: Assignment to constant variable."

accountEmail = "vinil@gmail.com"
accountPassword = "11111"
accountCity = "margao"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// dont use var in JS 
// bcoz os issue in block scope and functional scope 
// instead always use let
const accountId = 232342;
// const variable value cannot be changed

let accountEmail = "hari@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 67
// above line will give error saying "typeerror: Assignment to constant variable."

accountEmail = "vinil@gmail.com"
accountPassword = "11111"
accountCity = "margao"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])
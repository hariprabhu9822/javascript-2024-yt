// to convert datatypes from 1 form to another , they have methods which start from capital letters like Number ,String ,Boolean

let score1 = "34abc"

console.log(typeof(score1))
console.log(typeof score1)

let valueInNumber1 = Number(score1)
console.log(typeof(valueInNumber1))
console.log(valueInNumber1) //Number class converts string into number type but it is not of correct format. as 33abc is not a number .just 33 could have been number

let score2 = null
let score3 = undefined

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2))
console.log(valueInNumber2)

let valueInNumber3 = Number(score3)
console.log(typeof(valueInNumber3))
console.log(valueInNumber3)

// values and their conversion into numbers 
// "33"=>33 
// "33abc"=>NaN 
// true=>1
// false=>0

let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

let isLoggedIn3 = "eded"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3)

// values and their conversion into Boolean
// 1 => true 0 => false
// "" => false
// "dede" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);
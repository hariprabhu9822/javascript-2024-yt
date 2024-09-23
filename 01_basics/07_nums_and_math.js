const num1 = 45
console.log(num1)

// another way of declaring number by using objects new keyword
// adv of this is that it will store only number and nothing else like string 
// paste this in inspect console log to see all functions of it 
const num2 = new Number(35)
console.log(num2)

console.log(num2.toString().length)
// to add decimal points 
console.log(num2.toFixed(2))

const num3 = 123.897
console.log(num3.toPrecision(4))

const num4 = 1000000
console.log(num4.toLocaleString())
console.log(num4.toLocaleString('en-IN'))

// ************maths library***********
// paste this in inspect console log to see all functions of it 
console.log(Math)
console.log(Math.abs(-6))
console.log(Math.round(6.7))
console.log(Math.ceil(6.7))
console.log(Math.min(5,6,8,4,9,8,5))
console.log("random fn")
// gives values btw 0 and 1. can be 0 also
console.log(Math.random())

// to get values btw 1 and 10
// added +1 to not get 0
console.log(Math.floor(Math.random()*10)+1)

// now to get values btw a min and a maax value 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) + min ))

const name = "hari"
const value = 23

console.log(name + value + " years old")
// instead of this we can write 
console.log(`hello my name is ${name} and my age is ${value}`)

// another way of declaring string through object
const name2 = new String('vinil')
// the values of that string will be stored as arrays but they are not arrays.
// like 0:v ,1:i ,2:n ,3:i ,4:l. you can see this in inspect console log
console.log(name2[3])
console.log(name2.length)
// this is primitive i.e call by value so it will not change the values at original posn
console.log(name2.toUpperCase())
console.log(name2.charAt(2))
console.log(name2.indexOf('i'))

const newName = name2.substring(0,4)
// -ve values cannot be used
console.log(newName)

const newName2 = name2.slice(-5,2)
// -ve values can be used
console.log(newName2)

// trim: removes white spaces before and after a string 
const newName3 = "    hari    "
console.log(newName3)
console.log(newName3.trim())

const name4 = "hari"
console.log(name4.replace("h","b"))
console.log(name4.includes("h"))

const name5 = 'hari-prabhu-margao'
console.log(name5.split('-'))

// datatypes are divided into 2 types based on the way they are stored in memory and accessed
// 1.primitive(call by value)
// we get a copy of vriable declared
//   7 types:string1, boolean, number, null, undefined ,symbol, BigInt


// 2.non primitive(call by reference)
// we get reference of the variable declared i.e whatever changed will reflect at original posn
// types: arrays, objects, functions

// js is a dynamically types language. 
// as we dont have to mention the type of datatype. we can drecty assign it any value Int, string etc
let arr=5
arr="dd"


// array , objects , functions
const values = ["heuue","cecec","xsxas"]
let myObj = {
    name:"hari",
    age:45
}
const myFunction = function(){
    console.log("hello")
}
console.log(typeof myObj)
console.log(typeof myFunction)


// Memory
// 2 types :Stack (primitive), Heap(non-primitive)

// primitive(call by value)
let name1 = "hari"
let name2 = name1
// here only copy of name1 is passed to name2 and not the reference of name 1 i.e the address
name2 ="harsh"

console.log(name1)
console.log(name2)

// non-primitive(call by reference )
// here the address or reference is passed instead of just passing values.
// so anything changed will reflect at the original posn also 
let userOne = {
    email : "hari@gmail.com",
    upi : "hari@ydl"
}

let userTwo = userOne

userTwo.email = "vinil@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
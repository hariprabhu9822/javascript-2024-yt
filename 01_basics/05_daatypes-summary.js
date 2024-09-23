// datatypes are divided into 2 types based on the way they are stored in memory and accessed
// 1.primitive(call by value)
//   7 types:string1, boolean, number, null, undefined ,symbol, BigInt


// 2.non primitive(call by reference)
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
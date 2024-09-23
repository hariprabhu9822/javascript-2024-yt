console.log("2" > 1)  //works but should not be used..must use same datatypes

// equality check (==) and comparison operator(<,>) works differently
// comparison converts null to a number treating it as 0
// thats why null>=0 and null<=0 is true while null<0 and null>0 is false
console.log(null==0)
console.log(null>0)
console.log(null>=0)
console.log(null<=0)

// "===" checks for datatype as well as value if both are equal
console.log("checking for ===")
console.log("2"===2)
console.log(2===2)
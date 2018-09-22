
module.exports = {
    groupAdultsByAgeRange: function() {
    }
}    

const grouping = [
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ]


  
var youngerThan20 = grouping.filter(function(a) {
    return a.age < 20
})
console.log(youngerThan20)

var between21and30 = grouping.filter(function(a){
    return a.age >= 21 && a.age <= 30
})
console.log(between21and30)

var between31and40 = grouping.filter(function(a){
    return a.age >= 31 && a.age <= 40
})
console.log(between31and40)

var between41and50 = grouping.filter(function(a){
    return a.age >= 40 && a.age <= 50 
})
console.log(between41and50)

var olderThan51 = grouping.filter (function(a) {
    return a.age >= 51
})
console.log(olderThan51 )



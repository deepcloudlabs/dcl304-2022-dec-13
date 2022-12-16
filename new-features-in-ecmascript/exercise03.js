let fruits = {
    apple: 10,
    orange: 100,
    grapes: 50
}

console.log(fruits.apple)
console.log(fruits['apple'])
console.log(Object.entries(fruits))
console.log("Entries:")
for (let [key,val] of Object.entries(fruits)){
    console.log(`${key} ==> ${val}`)
}
console.log("Values:")
for (let val of Object.values(fruits)){
    console.log(`${val}`)
}
console.log("Keys:")
for (let key of Object.keys(fruits)){
    console.log(`${key}`)
}
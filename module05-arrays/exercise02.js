names1 = ["jack", "james", "ben", "jin", "sun"]
for (let i = -1; i <= names1.length; ++i) {
    console.log(`names1[${i}]: ${names1[i]}`);
}
myIndex = {toString: function(){return "3";}}
console.log(names1["2"])
console.log(names1[2])
console.log(names1[myIndex])
numbers = [4,8,15,16,23,42]
numbers.forEach((number,i,arr) => i==(arr.length-1) ? console.log("last element: "+number): console.log(i+": "+number));
numbers = [4,8,15,16,23,42]
console.log(numbers.indexOf(42)) // 5
console.log(numbers.indexOf(32)) // -1
console.log(numbers.indexOf(42) >= 0) // true
console.log(numbers.indexOf(32) >= 0) // false
console.log(numbers.includes(42)) // true
console.log(numbers.includes(32)) // false
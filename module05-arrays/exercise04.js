let numbers = [3, 4, 5, 7, 23, 108, 42, 36, 64, 72]
let numOfEvens = 0;
for (let i = 0; i < numbers.length; ++i) {
    let number = numbers[i];
    if (number % 2 === 0)
        numOfEvens++;
}
console.log(`Number of even numbers is ${numOfEvens}`);
numOfEvens = 0;
for (let i in numbers) {
    let number = numbers[i];
    if (number % 2 === 0)
        numOfEvens++;
}
console.log(`Number of even numbers is ${numOfEvens}`);
numOfEvens = 0;
for (let number of numbers) {
    if (number % 2 === 0)
        numOfEvens++;
}
console.log(`Number of even numbers is ${numOfEvens}`);
// Functional Programming:
//     i. Higher-Order Function
//    ii. Pure Function -> Lambda Expression
numOfEvens =
    numbers.filter(function (n) {
        return n % 2 === 0;
    })
        .map(function (u) {
            return 1;
        })
        .reduce(function (acc, u) {
            return acc + u;
        }, 0);
console.log(`Number of even numbers is ${numOfEvens}`);
numOfEvens =
    numbers.filter(n => n % 2 === 0)
        .map(u => 1)
        .reduce((acc, u) => acc + u, 0);
console.log(`Number of even numbers is ${numOfEvens}`);
let accumulate = (counts, n) => {
    counts[n]++;
    return counts;
};
let toEven = u => u % 2
let [evens, odds] =
    numbers.map(toEven)
        .reduce(accumulate, [0, 0]);
console.log(`number of odds: ${odds}, number of evens: ${evens}`);
let isThereAnyEvenNumber = numbers.some(u => u % 2 == 0)
let isAllEvens = numbers.every(u => u % 2 == 0)
numbers = [3, 42, 5, 7, 23, 108, 42, 36, 42, 72]
let index = numbers.indexOf(42);
while (index > -1) {
    console.log(`Found at ${index}`);
    index = numbers.indexOf(42,index+1);
}
foundAt =
numbers.map((number,index)=>number==42?index:-1)
       .filter(n => n!==-1)
console.log(foundAt)
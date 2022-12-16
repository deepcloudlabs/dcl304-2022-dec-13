numbers = [
    [1,2,3],
    [4],
    [
        [5,6,7],
        [8,9],
        10
    ]
]
console.log(numbers.flat())
console.log(numbers.flat(1))
console.log(numbers.flat(2))
console.log(numbers.flatMap(value=> [value.length]))
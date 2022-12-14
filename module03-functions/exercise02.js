function fun(a, b, c) {
    a = a || 3;
    b = b || 2;
    c = c || 1;
    return c * b + a;
}

function gun(a = 3, b = 2, c = 1) {
    return c * b + a;
}

function sun(a, b, c) {
    if (arguments.length != 3)
        throw "You must provide exactly 3 arguments!"
    for (let arg of arguments){
        if (typeof(arg) !== 'number')
            throw "You must provide an integer!"
    }
    return c * b + a;
}

console.log(sun(1,2,3))
console.log(gun(1))
console.log(gun(1, 2))
console.log(gun(1, 2, 3))
console.log(gun(1, 2, 3, 4))
console.log(gun(1, 2, 3, 4, 5))

// lambda expression,
// functional programming: higher-order functions: filter/map/reduce/some/any
// generator function,
// async function
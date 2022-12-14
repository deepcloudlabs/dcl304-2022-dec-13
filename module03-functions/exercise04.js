function fun(n) {
    if (n > 100 || n < 1)
        throw "n must be between 1 and 100.";
    return n**5;
}

console.log(fun(10))
console.log(fun(101))

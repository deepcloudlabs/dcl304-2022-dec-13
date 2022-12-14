let numbers = [3, 4, 5, 7, 23, 108, 42, 36, 64, 72];
function* filter(arr,predicate_fun) { // generator function + higher-order function
    for (let value of arr){
        if (predicate_fun(value))
            yield value;
    }
}
function* map(arr,map_fun) { // generator function + higher-order function
    for (let value of arr){
        yield map_fun(value);
    }
}
function reduce(arr,reduce_fun,init) { // higher-order function
    let result = init;
    for (let value of arr) {
        result = reduce_fun(result, value);
    }
    return result;
}

numOfEvens =
    reduce(map(filter(numbers, function (n) {
        console.log(`filtering ${n}`)
        return n % 2 === 0;
    }),function (u) {
            console.log(`mapping ${u} to 1`)
            return 1;
        }
    ),function (acc, u) {
            console.log(`reducing to ${acc}`)
            return acc + u;
        }, 0);
console.log(numOfEvens)
// generator function
function* filter(arr,predicate_fun) {
    for (let value of arr){
        if (predicate_fun(value))
            yield value;
    }
}
function* map(arr,map_fun) {
    for (let value of arr){
        yield map_fun(value);
    }
}



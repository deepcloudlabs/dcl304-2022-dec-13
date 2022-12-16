function get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_lottery_numbers(size, max) {
    const numbers = [];
    while (numbers.length < size) {
        const number = get_random_int(1, max);
        if (numbers.includes(number)) continue;
        numbers.push(number);
    }
    numbers.sort((x, y) => x - y);
    return numbers;
}

function* gen_lottery(max, size, column) {
    for (let i = 0; i < column; ++i){
        console.log(`Yielding ${i+1}. lottery numbers...`);
        yield get_lottery_numbers(size, max);
    }
}

function* peek(numbers){
    for (let nums of numbers) {
        console.log(`peeking at the values: ${nums}`);
        yield nums;
    }
}
function* sum(numbers){
    for (let nums of numbers){
        let accumulate = 0;
        for (let num of nums)
            accumulate += num;
        let counter=0;
        for (let i=0;i<1_000_000_000;++i) counter++;
        console.log(counter);
        yield accumulate;
    }
}

for (let acc of sum(peek(gen_lottery(60,6,10)))){ // pipeline -> synchronous
    console.log(`Accumulated values: ${acc}`);
}
// stream processing -> filter/map/reduce
// asynchronous pipeline
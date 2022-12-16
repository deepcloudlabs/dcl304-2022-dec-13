const {get_lottery_numbers} = require("./utility")

function* gen_lottery(max, size, column) {
    for (let i = 0; i < column; ++i){
        console.log(`Yielding ${i+1}. lottery numbers...`);
        yield get_lottery_numbers(size, max);
    }
}

function sync_lottery(max, size, column) {
    const numbers = [];
    for (let i = 0; i < column; ++i)
        numbers.push(get_lottery_numbers(size, max));
    return numbers;
}

const lottery_numbers = sync_lottery(60, 6, 10);
lottery_numbers.forEach(nums => console.log(nums));
console.log("Generator function example:")
for (let nums of gen_lottery(60,6,10)){
    console.log(`Printing lottery numbers: ${nums}.`);  // pipeline
}

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

exports = {get_random_int, get_lottery_numbers}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function fun(n) {
    return new Promise((resolve, reject) => {
        console.log(`fun(${n}) is called.`)
        setTimeout(() => {
            console.log(`fun(${n}) resolving.`)
            resolve(n ** 3);
        }, Math.floor(10_000 * Math.random()) + 3_000);
    })
}

async function gun() {
    console.log(await Promise.all(numbers.map(fun)))
}

gun().then(() => {
    console.log("gun() is done.")
})

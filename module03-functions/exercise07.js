function fun() {
    return new Promise((resolve,reject)=>{

        setTimeout( () => {
            resolve(42);
        }, 5_000);
        /*
        let i = 0;
        while (i < 1_000_000_000) {
            i++;
            if (i === 10_000 || i === 100_000)
                console.log(`i: ${i}`);
        }
        */
    });
}

console.error("Before fun() is called.");
fun().then(result => console.log(`result: ${result}`))
     .catch(  err => console.error(err));

console.error("After fun() is called.");

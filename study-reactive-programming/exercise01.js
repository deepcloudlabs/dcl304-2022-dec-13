function sync_fun() {
    if (Math.random() <= 0.5)
        return 42; // success
    throw "Something is wrong!"; // failure

}

function async_fun() {
    return new Promise((resolve, reject) => {
        if (Math.random() <= 0.5)
            resolve(42); // success
        reject("Something is wrong!"); // failure
    });
}

// Calling-side: Synchronous, Blocking
try {
    let sync_result = sync_fun();
    // success
    console.log(`Success: ${sync_result}`);
} catch (err){ // failure
    console.log(`Failure: ${err}`);
}

// Calling-side: Asynchronous, Non-blocking
let async_result = null;
async_fun().then(res => {
                async_result = res;
                console.log(`Success: ${async_result}`);
            }) // success
           .catch(err => console.log(`Failure: ${err}`)); // failure

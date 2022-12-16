function async_fun() {
    return new Promise((resolve, reject) => {
        if (Math.random() <= 0.5)
            resolve(42); // success
        reject("Something is wrong!"); // failure
    });
}
const preciousResource = {
    "close": function(){
        console.log("Resource is released!");
    }
}
async_fun().then( result => console.log(result))
           .catch( err => console.log(err))
           .finally( preciousResource.close)
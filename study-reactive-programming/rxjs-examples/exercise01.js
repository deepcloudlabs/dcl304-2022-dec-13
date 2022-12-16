const {Observable} = require("rxjs");

const observable = new Observable(observer => {
    let counter = 0;
    observer.next(counter);
    const timerId = setInterval(() => {
        counter++;
        observer.next(counter);
    }, 500);
    return function unsubscribe(){ clearInterval(timerId)};
});

let subscription = observable.subscribe(console.log);
setTimeout(()=>{
   subscription.unsubscribe();
},15_000);
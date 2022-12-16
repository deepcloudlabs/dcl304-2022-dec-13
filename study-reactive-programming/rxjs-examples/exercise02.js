const {Observable, map} = require("rxjs");

const observable = new Observable(observer => {
    let counter = 0;
    observer.next(counter);
    const timerId = setInterval(() => {
        counter++;
        observer.next(counter);
    }, 1_000);
    return function unsubscribe(){ clearInterval(timerId)};
});

let subscription = observable.pipe(
    map(n => n**3)
).subscribe(console.log);

setTimeout(()=>{
   subscription.unsubscribe();
},15_000);
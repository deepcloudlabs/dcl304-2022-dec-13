async function fun() {
  return 42
}
async function gun(){
    let res = await fun();
    return res**2;
}
console.error("Before fun() is called.");
fun().then(result => console.log(`result: ${result}`))
     .catch(  err => console.error(err));

console.error("After fun() is called.");
gun().then(result => console.log(`gun(): ${result}`))

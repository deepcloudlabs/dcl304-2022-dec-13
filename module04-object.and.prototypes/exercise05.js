class Customer {
    constructor({identity, fullname, email, phone}) {
        this.identity = identity;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        // this.sayHello = this.sayHello.bind(this)
    }

    sayHello = () => { // lambda expression
        console.log(`Hello, ${this.fullname}!`)
    }
}


let jack = new Customer({
    identity: "1",
    "fullname": "jack bauer",
    "phone": "+90-555-5555",
    "email": "jack@example.com"
})

console.log(jack)
jack.sayHello() // sayHello(jack)
setInterval(jack.sayHello, 2000);
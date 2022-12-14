class Customer {
    constructor({identity, fullname, email, phone}) {
        this.identity = identity;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
    }
}

class Customer2 {
    constructor(identity, fullname, email, phone) {
        this.identity = identity;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
    }
}

let jack = new Customer({
    identity: "1",
    "fullname": "jack bauer",
    "phone": "+90-555-5555",
    "email": "jack@example.com"
})

let kate = new Customer2("1", "jack@example.com", "jack bauer", "+90-555-5555");
console.log(jack)
console.log(kate)
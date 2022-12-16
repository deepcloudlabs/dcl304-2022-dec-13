class Employee {
    #firstName = ""
    #lastName = ""
    #identity = ""
    #salary = 8_000;

    constructor(identity, firstName, lastName, salary) {
        this.#identity = identity;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#salary = salary;
    }
    #fun(){
        console.log("have private fun()...")
    }
    gun(){
        this.#fun();
    }
    get salary() {
        return this.#salary;
    }

    set salary(value) {
        if (value < this.#salary)
            throw "cannot accept new salary";
        this.#salary = value;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get identity() {
        return this.#identity;
    }
}

const jack = new Employee("11111111110", "jack", "bauer", 100_000);
console.log(jack)
console.log(jack.identity)
console.log(jack.firstName)
console.log(jack.lastName)
console.log(jack.salary)
jack.salary = 200_000;
console.log(jack.salary)
// exception: jack.salary = 150_000;
jack.gun()
// error: jack.fun()

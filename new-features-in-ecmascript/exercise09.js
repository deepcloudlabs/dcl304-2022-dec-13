class Employee {
    constructor() {
    }
    get #firstName(){
        return "jack";
    }
}

const jack = new Employee();
console.log(jack)
console.log(jack.firstName)
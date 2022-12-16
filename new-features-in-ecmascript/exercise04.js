const kate = {
    "identity": "11111111110",
    "fullname": "kate austen",
    "birthYear": 1988,
    "iban": "TR1",
    "salary": 100_000,
    "increaseSalary": function(rate){
        this.salary *= (1.0 + rate);
    }
}
//console.log(Object.getOwnPropertyDescriptors(kate))
console.log(Object.getOwnPropertyDescriptor(kate,"salary"))
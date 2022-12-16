const kate = {
    "identity": "11111111110",
    "fullname": "kate austen",
    "birthYear": 1988,
    "iban": "TR1",
    "salary": 100_000
}

const {identity, fullname,...kate_remaining} = kate;
console.log(identity)
console.log(fullname)
console.log(kate_remaining)
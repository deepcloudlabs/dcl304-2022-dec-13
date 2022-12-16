const names = [
    "kate austen",
    "jack bauer",
    "ben linus",
    "sun kwon",
    "jin kwon"
]

for (let name of names) {
    console.log(name.padStart(12, "*"))
    console.log(name.padEnd(12, "*"))
}

salaries = [10_000, 200_000, 5_000, 125_000, 1_000_000]
for (let salary of salaries) {
    console.log(salary.toString().padStart(12, "#"));
    console.log(salary.toString().padStart(12, "0"));
}

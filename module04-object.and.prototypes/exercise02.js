class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

}

let circleA = new Circle(1,1,100)
let circleB = new Circle(1,1,100)

Circle.prototype.color = "Red";

for (let p in circleA) {
    console.log(`circleA[${p}]: ${circleA[p]}`)
}
for (let p in circleB) {
    console.log(`circleB[${p}]: ${circleB[p]}`)
}
circleA.color = "Green";
console.log(circleA.hasOwnProperty("radius")) // true
console.log(circleA.hasOwnProperty("color")) // true
console.log(circleA.color)

delete circleA.color
console.log(circleA.hasOwnProperty("radius")) // true
console.log(circleA.hasOwnProperty("color")) // false
console.log(circleA.color)

delete Circle.prototype.color
console.log(circleA.hasOwnProperty("radius")) // true
console.log(circleA.hasOwnProperty("color")) // false
console.log(circleA.color)

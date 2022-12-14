// Object-Based Programming Language
let unitCircle = { // singleton
    x: 0,
    y: 0,
    radius: 1,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

// Class-based Programming Language
let Circle = function (x = 0, y = 0, radius = 1.0) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
}

class Circle6 {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

}

const circleA = new Circle(); // unit circle
const circleB = new Circle(-10, 10, 100); // another circle
const circleC = new Circle6(10, -10, 100); // another circle
console.log(circleA.area())
console.log(circleB.area())
console.log(circleC.area())
console.log(circleC.x)
console.log(circleC['x'])
console.log(circleC.y)
console.log(circleC['y'])
console.log(circleC.radius)
console.log(circleC['radius'])
for (let p in circleC) { // p: 'x', 'y', 'radius'
    console.log(`circleC[${p}]: ${circleC[p]}`)
}

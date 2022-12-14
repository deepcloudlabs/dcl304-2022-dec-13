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

class ColorfulCircle extends Circle {
    constructor(x,y,radius,color) {
        super(x,y,radius);
        this.color = color;
    }
}

blueCircle = new ColorfulCircle(1,1,100,"Blue");
for (let p in blueCircle) {
    console.log(`blueCircle[${p}]: ${blueCircle[p]}`)
}
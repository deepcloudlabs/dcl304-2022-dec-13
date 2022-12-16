class Circle { // immutable
    #x = 0;
    #y = 0;
    #radius = 0;
    constructor(x,y,radius) {
        this.#x = x;
        this.#y = y;
        this.#radius = radius;
    }
    area(){
        delete this.#x;
        return Math.PI * this.#radius **2;
    }
    get x(){ return this.#x}
    get y(){ return this.#y}
    get radius(){ return this.#radius}
    static compare(circleA,circleB){
        if (circleA.radius >= circleB.radius)
            return circleA;
        return circleB;
    }
    static PI = Math.PI;
}

const circle1 = new Circle(0,0,100);
const circle2 = new Circle(0,0,200);
const circle3 = Circle.compare(circle1,circle2);
console.log(circle3.radius)
console.log(Circle.PI)
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
        return Math.PI * this.#radius **2;
    }
    get x(){ return this.#x}
    get y(){ return this.#y}
    get radius(){ return this.#radius}
}
class ColorfulCircle extends  Circle {
    #color = "red";
    constructor(x,y,radius,color) {
        super(x,y,radius);
        this.#color = color;
    }
    get color(){return this.#color;}
}
const unitCircle = new Circle(0,0,1);
const blueUnitCircle = new ColorfulCircle(0,0,1,"blue");
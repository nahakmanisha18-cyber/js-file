//Program : 1
let greeting = (msg: string): void => {
    console.log(msg);
}
greeting("Good Mornig");
///Output : Good Mornig


//Program : 2
function circ(r: number): number {
    return 3.14 * r * r;
}
console.log("Area of Circle = ", circ(5));
//Output : Area of Circle =  78.5


//Program : 3
function tria(l: number, h: number): number {
    return (l * h / 2);
}
console.log("Area of Triangle = ", tria(10, 10));
//Output : Area of Triangle =  50


//Program : 4
let rect = function (l: number, h: number): number {
    return l * h;
}
console.log("Area of rectangle =", rect(5, 5));
//Output :Area of rectangle = 25


//program : 5
let for1 = function (a: number, b: number, c: number): number {
    let ans: number = (b * b * 4 * a * c) / (2 * a);
    return ans;
}
console.log("Formula1 = ", for1(5, 3, 2));
//Output : Formula1 = 36


//Program : 6
let for2 = function (a: number, b: number): number {
    let ans2: number = (a * a) + (2 * a * b) + (b * b);
    return ans2;
}
console.log("Formula2 = ", for2(5, 6));
//Output : Formula2 = 121


//Program : 7
let cel = function (f: number): number {
    let c: number = (f - 32) / 1.8;
    return c;
}
console.log("Celsius = ", cel(95));
//Output : Celsius = 35


//Program : 8
let fah = function (c: number): number {
    let f: number = (c * 1.8) + 32;
    return f;
}
console.log("Fahrenheit = ", fah(35));
//Output : Fahrenheit = 95


//Program : 9
let che = function (n: number): void {
    if (n % 2 == 0) {
        console.log(n, "is Even number");
    } else {
        console.log(n, "is Odd number");
    }
}
che(2);
//Output :2 'is Even number'


//program : 10
let swa = function (a: number, b: number): void {
    a = b + a; // 30
    b = a - b; //20
    a = a - b; //10
    console.log("A = ", a);
    console.log("B = ", b);
}
swa(10, 20);
//Output : A = 20 , B = 10
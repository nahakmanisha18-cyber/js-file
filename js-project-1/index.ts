
// Program : 1 (Area of Triangle)
let base: number = Number(prompt("Enter triangle base :"));
let height: number = Number(prompt("Enter triangle height:"));
let area: number = (base * height) / 2;   // area = 1/2 * base * height
console.log("Area of Triangle = ", area);


// Program : 2 (Celsius to Fahrenheit)
let Celsius: number = Number(prompt("Enter temperature in Celsius:"));
let f: number = (9 * Celsius) / 5 + 32;
console.log("Temperature in Fahrenheit = ", f);


// Program : 3 (Area of Rectangle)
let len: number = Number(prompt("Enter rectangle length:"));
let wid: number = Number(prompt("Enter rectangle width:"));
let area2: number = len * wid;   // Area of Rectangle
console.log("Area of Rectangle = ", area2);


// Program : 4 (Area of Circle)
let r: number = Number(prompt("Enter radius:"));
let area3: number = 3.14 * r * r;      // pi × r × r
console.log("Area of Circle = ", area3);


// Program : 5 (Feet to Inches)
let feet: number = Number(prompt("Enter value in feet:"));
let inches: number = feet * 12;        // 1 foot = 12 inches
console.log("Inches = ", inches);


// Program : 6 (Mathematical Formulas)
let a: number = Number(prompt("Enter value of a:"));
let b: number = Number(prompt("Enter value of b:"));

// Formula: a^2 - b^2 = (a - b)(a + b)
let result: number = (a - b) * (a + b);
console.log("a^2 - b^2 = ", result);

// Formula: (a-b)^2 = a^2 - 2ab + b^2
let result1: number = (a * a) - (2 * a * b) + (b * b);
console.log("(a-b)^2 = ", result1);

let c: number = Number(prompt("Enter value of c:"));

// Formula: (a+b+c)^2
let result2: number =(a * a) + (b * b) + (c * c) +(2 * a * b) + (2 * a * c) + (2 * b * c);
console.log("(a+b+c)^2 = ", result2);

// Formula: (a-b-c)^2
let result3: number =(a * a) + (b * b) + (c * c) -(2 * a * b) - (2 * a * c) + (2 * b * c);
console.log("(a-b-c)^2 = ", result3);

// Formula: (a-b)^3
let result4: number = (a * a * a) - (3 * a * a * b) + (3 * a * b * b) - (b * b * b);
console.log("(a-b)^3 = ", result4);







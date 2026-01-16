// Program : 1 (Area of Triangle)
let base = Number(prompt("Enter triangle base :"));
let height = Number(prompt("Enter triangle height:"));
let area = (base * height) / 2;   // area = 1/2 * base * height
console.log("Area of Triangle = ", area);

// Program : 2 (Celsius to Fahrenheit)
let Celsius = Number(prompt("Enter temperature in Celsius:"));
let f = (9 * Celsius) / 5 + 32;
console.log("Temperature in Fahrenheit = ", f);

// Program : 3 (Area of Rectangle)
let len = Number(prompt("Enter rectangle length:"));
let wid = Number(prompt("Enter rectangle width:"));
let area2 = len * wid;   // Area of Rectangle
console.log("Area of Rectangle = ", area2);

// Program : 4 (Area of Circle)
let r = Number(prompt("Enter radius:"));
let area3 = 3.14 * r * r;      // pi × r × r
console.log("Area of Circle = ", area3);

// Program : 5 (Feet to Inches)
let feet = Number(prompt("Enter value in feet:"));
let inches = feet * 12;        // 1 foot = 12 inches
console.log("Inches = ", inches);

// Program : 6 (Mathematical Formulas)
let a = Number(prompt("Enter value of a:"));
let b = Number(prompt("Enter value of b:"));

// Formula: a^2 - b^2 = (a - b)(a + b)
let result = (a - b) * (a + b);
console.log("a^2 - b^2 = ", result);

// Formula: (a-b)^2 = a^2 - 2ab + b^2
let result1 = (a * a) - (2 * a * b) + (b * b);
console.log("(a-b)^2 = ", result1);

let c = Number(prompt("Enter value of c:"));

// Formula: (a+b+c)^2
let result2 = (a * a) + (b * b) + (c * c) + (2 * a * b) + (2 * a * c) + (2 * b * c);
console.log("(a+b+c)^2 = ", result2);

// Formula: (a-b-c)^2
let result3 = (a * a) + (b * b) + (c * c) - (2 * a * b) - (2 * a * c) + (2 * b * c);
console.log("(a-b-c)^2 = ", result3);

// Formula: (a-b)^3
let result4 = (a * a * a) - (3 * a * a * b) + (3 * a * b * b) - (b * b * b);
console.log("(a-b)^3 = ", result4);


//Examples :
//Output :
//program : 1
/*
Enter triangle base:10
Enter triangle height:15
Area of Triangle =  75
*/

//program : 2
/*
Enter temperature in Celsius:10
Temperature in Fahrenheit =  50
*/

//program : 3
/*
Enter rectangle length:20
Enter rectangle width:15
Area of Rectangle = 300
*/

//program : 4
/*
Enter radius:5
Area of Circle = 78.5
*/

//program : 5
/*
Enter value in feet:5
Inches = 60
*/

//Program : 6
/*
Enter value of a:10
Enter value of b:5
Enter value of c:10

 a ^ 2 - b ^ 2 =  75
(a - b) ^ 2 =  25
(a + b + c) ^ 2  =  625
 (a - b - c) ^ 2  =  25
(a - b) ^ 3 =  125

*/
// program : 1 (Table)
let num1 = Number(prompt("Enter the number: "));
let i = 1;
let j = num1;

while (i <= 10) {
    console.log(num1, "x", i, "=", j);
    i++;
    j = num1 * i;
}


// program : 2 (Factorial)
let num2 = Number(prompt("Enter a number to find factorial: "));
let fact = 1;
let k = 1;

while (k <= num2) {
    fact = fact * k;
    k++;
}
console.log("Factorial of", num2, "is", fact);


// program : 3 (Armstrong number 1–1000)
let num3 = 1;

do {
    let stor = num3;
    let digit;
    let sum = 0;

    do {
        digit = stor % 10;
        sum = sum + (digit * digit * digit);
        stor = (stor - digit) / 10;
    } while (stor > 0);

    if (sum === num3) {
        console.log(num3);
    }

    num3++;
} while (num3 <= 1000);


// program : 4 (Palindrome numbers)
let b = Number(prompt("Enter the palindrome limit:"));
let num4 = 1;

while (num4 <= b) {
    let value2 = num4;
    let reversed = 0;

    while (value2 > 0) {
        let digit = value2 % 10;
        reversed = reversed * 10 + digit;
        value2 = (value2 - digit) / 10;
    }

    if (reversed === num4) {
        console.log(num4 + " is a Palindrome number");
    }

    num4++;
}


// program : 5 (Fibonacci)
let n = Number(prompt("Enter number of Fibonacci terms:"));
let a = 0;
let d = 1;
let c;

console.log(a);
console.log(d);

for (let i = 3; i <= n; i++) {
    c = a + d;
    console.log(c);
    a = d;
    d = c;
}


// program : 6 (Sum 0 to 30)
let num5 = 0;
let sum5 = 0;

do {
    sum5 += num5;
    console.log("Adding:", num5, "=> Running sum:", sum5);
    num5++;
} while (num5 <= 30);


// program : 7 (FizzBuzz)
let num7 = 1;

do {
    if (num7 % 3 === 0 && num7 % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num7 % 3 === 0) {
        console.log("Fizz");
    } else if (num7 % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num7);
    }

    num7++;
} while (num7 <= 100);


// program : 8 (1-2-3-...-10)
let num6 = "";

for (let i = 1; i <= 10; i++) {
    num6 += i;

    if (i < 10) {
        num6 += "-";
    }
}

console.log(num6);


// program : 9 (Square sum)
let sum9 = 0;
let num9 = "";

for (let i = 1; i <= 10; i++) {
    let square = i * i;
    sum9 += square;

    num9 += square;

    if (i < 10) {
        num9 += "+";
    }
}

num9 += "=" + sum9;
console.log(num9);


// program : 10 (Pattern)
console.log("Pattern:");

for (let o = 5; o >= 1; o--) {
    let line = "";

    for (let q = 5; q >= o; q--) {
        line += q + " ";
    }

    console.log(line);
}


// program : 11 (Number Pattern)
let p = 1;
console.log("Pattern:");

for (let l = 5; l >= 1; l--) {
    let line1 = "";

    for (let m = 5; m >= l; m--) {
        line1 += p + " ";
        p++;
    }

    console.log(line1);
}
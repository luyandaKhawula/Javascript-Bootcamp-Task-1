//Exercise 1
let number = 10;
let decimal = 5.5165646;

let sum = number + decimal;
let difference = number - decimal;
let product = number * decimal;
let quotient = number / decimal;
let remainder = number % decimal;
let exponent = number ** decimal;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);
console.log("Exponent: " + exponent);

//Exercise 2
let isBigger = number > decimal;
let isSmaller = number < decimal;
let isEqual = number == decimal;
let isNotEqual = number != decimal;
let isGreaterOrEqual = number >= decimal;
let isLessOrEqual = number <= decimal;

let x = 8;
let y = 12;
console.log("Is " + x + " greater than " + y + "? " + (x > y));
console.log("Is " + x + " less than or equal to " + y + "? " + (x <= y));
console.log("Is " + x + " equal to " + y + "? " + (x == y));
console.log("Is " + x + " not equal to " + y + "? " + (x != y));

let a = true;
let b = false;

let andOperation = a && b;
let orOperation = a || b;
let notOperation = !a;

console.log("AND Operation: " + andOperation);
console.log("OR Operation: " + orOperation);
console.log("NOT Operation: " + notOperation);

let p = 10;

p += 6;
console.log(p);

p -= 3;
console.log(p);

p *= 2;
console.log(p);

p /= 2.5;
console.log(p);

p %= 3;
console.log(p);
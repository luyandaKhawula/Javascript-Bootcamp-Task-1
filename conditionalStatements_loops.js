//Exercise 1
//1.
let temperature = 13;


if (temperature < 0) {
    console.log("It's freezing!");
} 
else if(temperature >= 0 && temperature <= 15){
    console.log("It's cold.");
}
else if(temperature >= 16 && temperature <= 25){
    console.log("It's mild.");
}
else if(temperature > 25){
    console.log("It's warm.");
}
else{
    console.log("Temperature is not defined.");
}

//2.
switch (true){
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25): 
        console.log("It's mild.");
        break;
    case (temperature > 25): 
        console.log("It's warm.");
        break;
    default:
        console.log("Temperature is not defined.");
        break;    
}

//Exercise 2
//1.
let number = 24;

if(number % 2 == 0 && number % 3 == 0){
    console.log("Divisible by both.");
}
else if(number % 2 == 0){
    console.log("Divisible by 2.");
}
else if(number % 3 == 0){
    console.log("Divisible by 3.");
}
else{
    console.log("Not divisible by 2 or 3.");
}

//2.
switch (true){
    case (number % 2 == 0 && number % 3 == 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 == 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 == 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;    
}

//Exercise 3
//1.
for (let i = 1; i <= 10; i++){
    console.log(i);
}

//2.
for (let i = 1; i <= 20; i++){ 
    if (i % 2 == 0) {
        console.log(i);
    }
}

//3.
let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i;
}
console.log("Sum of numbers from 1 to 100 is: " + sum);

//4.
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++){
    console.log(numbers1[i]);
}

//5.
const numbers = [3, 7, 2, 5, 10, 6];
let largest = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > numbers[i - 1]){
        largest = numbers[i];
    }
}
console.log(largest);

//Exercise 4
//1.
let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

//2.
let j = 1;
while (j <= 20){
    if (j % 2 == 0){
        console.log(j);
    }
    j++;
}

//3.
sum = 0;
let k = 1;
while (k <= 100){
    sum += k;
    k++;
}
console.log("Sum of numbers from 1 to 100 is: " + sum);

//4.
let l = 5;
while(l < 50){
    if(l % 5 == 0){
        console.log(l);
    }
    l++;
}

//Exercise 5
//1.   
let a = 1;
do {
    console.log(a);
    a++;
}
while (a <= 10);

//2.
let b = 1;
let sum1 = 0;
do {
    sum1 += b;
    b++;
}
while (b <= 100);
console.log("Sum of numbers from 1 to 100 is: " + sum1);

//3.
let userNum = 0;
do {
    userNum = prompt("Enter a number greater than 10 : ");
    console.log("The number is smaller than 10.")
}
while (userNum <= 10);
console.log("The number is greater than 10.");

//4.
let userNum1 = 0;
let randomNum = Math.floor(Math.random() * 10) + 1;
do {
    userNum1 = prompt("Guess the number between 1 and 10: ");
    if (userNum1 != randomNum) {
        console.log("Wrong guess. Try again.");
    }
}
while (userNum1 != randomNum);
console.log("Congratulations! You guessed the number: " + randomNum);
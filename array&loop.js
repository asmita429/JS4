// Loops with Arrays

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

for (let i = 0; i < fruits.length; i = i + 2) {
    console.log(`even index fruit ${i}, ${fruits[i]}`);
}

// print in reverse order
fruits.push("pineapple");
for (let i = fruits.length - 1; i >= 0; i-- ) {
    console.log(i, fruits[i]);
}

// Nested Loops with Nested Arrays

let heroes = [ 
    ["ironman", "spiderman", "thor"], 
    ["superman", "wonderman", "flash"]
];

for (let i = 0; i < heroes.length ; i++) {
    console.log(`heroes #${i}`);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j= ${j}, ${heroes[i][j]}`);
    }
}


let student = [ 
    ["asmita", 80], 
    ["subash", 85], 
    ["prakriti", 90]
];

for (let i = 0; i < student.length; i++) {
    console.log(`info of student #${i+1}`);
    for(let j = 0; j < student[i].length; j++) {
        console.log(student[i][j]);
    }
}


// for of loop
// for (element of collection) { //code }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (fruit of fruits) {
    console.log(fruit);
}

for (char of "asmita") {
    console.log(char);
}

// Nestedd for of loop

for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}


// Practice Qs

let arr = [1,2,3,4,5,6,2,3];
let num = 2;    //remove all occurrences of 2

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);


// find no. of digits in a number

let number = 287152;
let count = number.toString().length;
console.log(count);


// find sum of digits in a number.

let sum = 0;

while (number > 0) {
    sum += number % 10;
    number = Math.floor(number/10);
}
console.log(`sum of digits is ${sum}`);


// print factorial

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}
console.log(`factorial of ${n} is ${factorial}`);


// print largest number in an array

let array = [100, 40, 2, 4, 9, 200];
let largest;

for (let i = 0; i < array.length; i++) {
    largest = array[0];
    if (largest < array[i]) {
        largest = array[i];
    }
}
console.log(`largest element in array is ${largest}`);


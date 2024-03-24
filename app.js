// Loops - used to iterate a piece of code.

// for (initialization; condition; updation) { //piece of code.}

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for (let i = 1; i <= 5; i++) {
  console.log(i); //1,2,3,4,5
}

// dry run -> test on paper pencil

for (let i = 5; i >= 1; i--) {
  console.log(i); //5,4,3,2,1
}

// print all odd numbers (1 to 15)

for (let i = 1; i <= 15; i = i + 2) {
  console.log(i); //1,3,5,7,9,11,13,15
}

// print all even numbers from(2 to 10)

for (let i = 2; i <= 10; i = i + 2) {
  console.log(i); //2,4,6,8,10
}

// infinite loops - when end condition is always true.
// Make sure there is no infinite loop in the code eg:

//for (let i = 1; i >= 0; i++) { //code }
//for (let i = 1; i <= 5; i--){ //code }
//for (let i = 1; ; i++) { //code }


// Print multiplication table for 5

for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);
}

// let n = prompt("enter your number");
// n = parseInt(n); //convert to integer

// for (let i = n; i <= n*10; i = i + n) {
//     console.log(i);
// }


// Nested for loop

for (let i = 1; i <= 3; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(j); //inner loop
    }
}


// right half pyramid
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
    console.log("\n");
}


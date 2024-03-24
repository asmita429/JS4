// while loop

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// odd numbers
i = 1;
while (i <= 5) {
    console.log(i);
    i = i + 2;
}

// even numbers
i = 2;
while (i <= 5) {
    console.log(i);
    i = i + 2;
}


// Favotite Movie Game

// let favMovie = "Avatar";
// let guess = prompt("guess my favourite movie");

// while ((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("wrong guess, try again");
// }

// if (guess == favMovie) {
//     console.log("congrats!");
// } else {
//     console.log("you quit.")
// }


// code refactoring

let favMovie = "Avatar";
let guess = prompt("guess my favourite movie");

while (guess != favMovie) {
    if (guess == "quit") {
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess, try again");
}

if (guess == favMovie) {
    console.log("congrats!");
}


// Break statement

i = 1;
while (i <= 5 ) {
    if (i == 3) {
        break;
    }
    console.log(i); //1,2
    i++;
}
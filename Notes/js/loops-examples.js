// 20 parking spots
// 1 car
//
// let parkingSpots = 20
//
// while (parkingSpots > 0){
//     parkingSpots--;
//     console.log("There are " + (20 - parkingSpots) + " spots available")
// }




// while(parkingSpots = 20){
//     var y = Math.floor(Math.random() * 10) + 1;
//     if (y < 6)
//         y = 0
//     else
//         y= 1
//     console.log("There are " + (20 - parkingSpots) + " spots available")
//     parkingSpots = parkingSpots - y
// }
// console.log("You found a parking spots!")




// let i = 0; //starting point
// while(i < 10){
//     console.log("iteration: ", i);
//     i++ //this is the same as i = i + 1;
// }

// let i = 0;
// while(i <= 15){
//     console.log("----------")
//     console.log("i before i++: ",  i)
//     i++
//     console.log("i after i++: ",  i)
// }

// Do While loops always executes codes before checking conditional
// // loop through numbers 0 - 50 by 2s
// let x = 0
// do {
//     console.log("Current number is: ", x)
//     x = x + 2
// }  while (x <= 50)

// let i = 0
// while(i <= 10){
//     console.log("Iteration #: " + i);
//     i++;
// }
//
// let j = 0
// do {
//     console.log("Loop number #" + j);
//     j++;
// }while (j <= 10)


// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.

// let password = prompt("Please put in your password");
// while( password !== "password"){
//     alert("That is the wrong password");
//     password = prompt("Please put the correct password");
// }
// alert("Correct Password");
// // or
// let correctPass = "123abd";
// let input = prompt("Please put in your password");
//
// while(input !== correctPass){
//     alert("Wrong password try again");
//     input = prompt("Please put the correct password");
// }
// alert("Password Accepted");



//// FOR loops
////Plain english
////for(1; 2; 3;){
    //code
////};
//1. Starting point
//2. Stopping point or conditionals
//3. How to iterate

// for(let i = 0; i <= 15; i++){
//     console.log("My favorite number is: " + i);
// }


// let dozens = 0;
// // want 4 dozens
//
// for( let eggs = 0; eggs <= 48; eggs++){
//    dozens = (eggs /12)
//     console.log("I have " + eggs + " many eggs")
//     console.log("I have " + dozens + " dozens eggs")
// }

// NESTED LOOPS

// for(let counter = 1; counter<=5; counter++){
//     console.log("First counter: " + counter);
//     for(let counterTwo = 5; counterTwo > 0; counterTwo--){
//         console.log("Second counter " + counterTwo);
//     }
// }
for(let i = 1; i <= 9; i++){
    let a = "";
    // console.log("a outer: ", a)
    for(let k = i ; k > 0; k--){
        a += i;
        //   console.log("a inner ",a)

    }console.log("after inner ", a)
}













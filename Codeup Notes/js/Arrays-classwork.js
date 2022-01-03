
// items in array are started from the number 0 // .length always counts the number of elements in an array

// let favoriteFoods = ["Chocolate", "Chicken with Mole", "Ice Cream", "Hamburgers", "Steak"];
// console.log(favoriteFoods);
// console.log(favoriteFoods[3]);
// favoriteFoods[0] = favoriteFoods[0] + " 1"
// favoriteFoods[1] = favoriteFoods[1] + " 2"
// favoriteFoods[2] = favoriteFoods[2] + " 3"
// favoriteFoods[3] = favoriteFoods[3] + " 5"
// favoriteFoods[4] = favoriteFoods[4] + " 4"
//
// console.log(favoriteFoods)
//command + control + space == emoji😀




// let students = ["Gerald", "Mark", "Mina", "Jason", "Justin", "Justin"];
// console.log(students);
// console.log(students[3]);
// console.log(students[5]);
// // adding last name to first name
// // access the element you want to change
// //re-assign value to equal what you want
// console.log(students[4]);
// students[4] = students[4] + " Sebastian"; // or students[4] += " Sebastian";
// console.log(students[4]);
// let students = ["Gerald", "Mark", "Mina", "Jason", "Justin", "Justin"];
// let indexOfJustin = students.indexOf("Justin");
// console.log(indexOfJustin); // 4
// let otherIndexOfJustin = students.lastIndexOf("Justin");
// console.log(otherIndexOfJustin); // 5


//Accessing an Array
//nameOfArray[positionWithinArray] !!! Remember it always starts at zero
//Accessing arrays returns the value inside of that position

// //Values that can be stored
// let laurasFavoriteAnimals = ["Frog", "Lion", "Penguin"];
// let laura = ["Laura", 31, "San Antonio", "Mac", ["Pizza", "French Fries", "Ice Cream"], 2021, laurasFavoriteAnimals];
// let lauraAge = laura[1];
// console.log(lauraAge);
// /// Ways to access the inner array
// let laurasFavoriteFoods = laura[4]
// console.log(laurasFavoriteFoods)
// console.log(laurasFavoriteFoods[1])
// console.log(laura[4][1])   // reads from left too right (goes out to in)
// function desiredAge(num){
//     return num - 10
// }
// console.log(desiredAge(lauraAge))
// console.log(laura)

// //Function
// function nameOfFunction(num1, num2){
//     return num1 + num2;
// }
// console.log(nameOfFunction(1,2))
//It is possible to pass a function or an anonymous function
// function nameOfFunction2(num1, functionName){
//     return num1
//console.log(nameOfFunction2(4, function(){
//  console.log("Hey, there!")
///}));
// function sayHello(){
//     console.log("Say Hello!")
// }
// console.log(sayHello);
// function nameOfFunction2(num1, functionName){
//     console.log("Doing background task")
//     functionName()
//     return num1



// //Methods
// //methods are basically pre-existing functions // command + click to get descriptions of methods and other IDs ex command click parseInt();
// Math.random(); // will generate a random number 0 - 1
// console.log(); // will log what we want in the console has to be put in between the ()
// parseInt(); // Will give you a number from a string or NaN if not a number



let ages = [14, 23, 89, 5, 25, 36];
for(let i = 0; i < ages.length; i++){
    console.log(ages[i] * 2);
}
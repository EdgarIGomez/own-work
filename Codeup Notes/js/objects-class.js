// console.log("Objects")  ///Sam recommends using browser to view objects
//
// //let person = {};        // This is an empty object as of this moment in the code
//
// //alternative way to make objects let person = new Object();
//
//
// let birthdayObject = {
//     month: "November",
//     day: 22,
//     getDetails: function(){
//         return this.month + " " + this.day     //This is recommended because this.day is not hard coded and and helps you with making dynamic functions
//     }       ///birthdayObject.month works too but not recommended and will not work well with dynamic functions
// } //To show that an object can have different types of values in it
//
//
// let person = {
//     name: "Jack",
//     birthday: {                //birthdayObject
//         month: "November",   //You can also just put the object in another object to achieve the same result
//         day: 22,
//     },
//     isTall: false
// }                   //Another way to make an object recommended is you have all information at the time of creation
//
// function createPerson(name){
//     return {
//         firstName: name,
//         greeting: function () {
//         return console.log("Hello my name is " + this.firstName) // if hard coded will not work when used with different objects
//     },
//
//     }
// }
// let personTwo = createPerson("Laura");
// let personThree = createPerson("Ry");
//
// console.log(personTwo)
// console.log(personThree)
//
// console.log(typeof person);
//
// let array = [1, 2, 3, true, false]; //The index can also be called the key value in an index
//
// person["name"] = "Matt Lewis"; // Added the key name and added the value "Matt Lewis" to it at the same time(not required to add value for the keys(can pass variables with this method
//
// person.birthday = "Sep,22"; // Alternative way to add keys and values to that key in an object
//
// person.isTall = true; // another example of adding keys (recommended to use camel casing for naming anything in javascript)


let dog = {
    breed: "Huskey",
    colors: ["brown", "black", "white"],
    sex: "f",
    name: "Luna"
    isFloofer: true,
    bark: function (loud) {
        if (loud) {
            console.log("Woof Woof!!")
        } else {
            console.log("ruf ruf");
        }

    },
    getDetails: function () {
        return this.colors[0] + " " + this.breed + " named " + this.name;
    }
};

function createDoggo(name, colors, breed) {
    return {
        breed: breed,
        colors:colora,
        sex: "f",
        name: name,
    isFloofer: true,
        bark: function (loud) {
            if (loud) {
                console.log("Woof Woof!!")
            } else {
                console.log("ruf ruf");
            }
             },
    getDetails: function () {
        return this.colors[0] + " " + this.breed + " named " + this.name;
        }
};
}

let collectionOfDogs = []

collectionOfDogs.push(createDoggo("Bella", ["brown", "black"], "Rottweiler"));
collectionOfDogs.push(createDoggo("Max", ["Brown"], "Labrador"));
collectionOfDogs.push(createDoggo("Maximus", ["black", "white"], "Husky"))

// collectionOfDogs.forEach(function (dog)){
//     console.log(collectionOfDogs.name + );
// }

// document.getElementsByTagName('body')[0].innerHTML += YourString to append to html



// console.log(`${variable here that calls something} the rests of the words here`) This is how back ticks work
// multiple variables can be used but another ${} is needed
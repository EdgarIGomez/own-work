let samsDogs = ["Blue", "Luna", "Scamp"];

console.log(samsDogs);

console.log("Before adding", samsDogs);

samsDogs.unshift("Spot")  //allows you to add an additional element to an arrays to the start you can pass multiple arguments

console.log("After adding", samsDogs);

samsDogs.push("Rex");  ///Add element to the end of the arrays

console.log("After adding to the end", samsDogs);

console.log("Removing last index");

samsDogs.pop(); /// removes the last element in an array

console.log("After pop", samsDogs);

console.log("Before Shifting");

samsDogs.shift(); /// Removes the first element in an array

console.log("After Shifting");

console.log("Fetching index of Luna");

console.log("Luna's index ", samsDogs.indexOf("Luna")) ///indexOf grabs the index of the element you are asking for: side note lastIndexOf grabs the last instance of the element you are searching for

console.log(samsDogs.filter(function(dog){
    return dog.includes("u");
}));   /// Little bit of looking how to look for specific stuff in in arrays

let sliced = samsDogs.slice(0,1); /// To separate a certain part of the array stores it in variable that is defined

console.log(sliced);  /// slice works with the first number is the starting index and the second number is the index you want stop at

console.log("original", samsDogs);

samsDogs.reverse(); /// a modifier method that reverses the arrays

console.log("Reversed the array", samsDogs);

console.log("Sorting the dogs", samsDogs.sort()); /// will sort the elements by alphabetical or numerical order

console.log("samsDogs as strings", samsDogs.join("")); //lets you turn your array into a string (what is in here is how you want to join them)

let searchTerm = "soup,tomato,no-garlic,1hour";

let parsedSearchTerms = searchTerm.split(","); // Split the sting into an an by splitting at the designated character

console.log("Parsed Searched Terms", parsedSearchTerms); //Side note if nothing is in the operator for split it wont do anything

let name = "Samuel";

console.log("Flipping the string ", name.split("").reverse().join("")) /// Example of chain method


//Spread operator extra learning

let numbers = [1, 4, 6];
console.log([...samsDogs, ...numbers]);

console.log([9.2, ...numbers]); ///using the spread operator to add elements to the arrays but if we want to modify arrays we have to reassign it

console.log([...numbers, 12]);


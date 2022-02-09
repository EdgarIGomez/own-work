//February 8th 2022
//Write a function that removes any duplicates from an array.
// Input: [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
// expected output: [2,3,5,8,1,6,7,4]

function noDuplicates(array) {
    let uniqueNumbers = []
    array.filter(number => {
        if(!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number)
        }else{
        }
    });
    return uniqueNumbers.sort(function (a, b) {
        return a - b
    })
}

console.log(noDuplicates([2, 3, 5, 8, 3, 1, 2, 6, 3, 2, 7, 8, 2, 4, 7,13, 15, 24]));

//February 9th 2022
// write a function that takes a string as argument and returns the number of vowels contained in that string.
//     The vowels are “a”, “e”, “i”, “o”, “u”.
// input: "helicopter"
// output: 4
// reason: there are 4 vowels in the input word helicopter

function howManyVowels(string) {
    let numberOfVowels = 0
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === "a" ||string.charAt(i) === "e" ||string.charAt(i) === "i" ||string.charAt(i) === "o" ||string.charAt(i) === "u"){
            numberOfVowels++
        }else {

        }
    }
    return numberOfVowels
}

console.log(howManyVowels("helicopter"));
console.log(howManyVowels("Digital Monsters"));
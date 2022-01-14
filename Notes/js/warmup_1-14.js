//Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.

let names = ["Ryan", "Kieren", "Jason", "Mary", "Jo", "Jake"];

console.log(names[0].length);

function fourLetters(array) {
    let fourLetterNames = []
    console.log(fourLetterNames)
    for(let i = 0; i < array.length; i++) {
        if(array[i].length === 4){
             fourLetterNames.push([array[i]])
            console.log(fourLetterNames)
        }else {

        }
    }
}

fourLetters(names)
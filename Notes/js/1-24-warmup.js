// PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34

function addAllNumbers(numbers) {
    let sum = 0
    let number = numbers.split("")
    console.log(number)
    for(let i = 0; i < number.length; i++){

         let sumTotal = sum + parseInt(number[i])
         console.log(sumTotal)
    }

}
addAllNumbers("42958372")
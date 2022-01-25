//!-25-22 Warmup
//Find any duplicates or repeated number in a string of numbers, return an object that shows which numbers were duplicated consecutively how many times

function numberRepeat(numbers) {
    let numberObject = {};
    let numbersArray = numbers.split("");
    for(let i = 0; i < numbersArray.length; i++){
        if((parseInt(numbersArray[i]) - parseInt(numbersArray[i + 1]) === 0)){
            if(numberObject.numbersArray[i] == null){
                numberObject.numbersArray[i] = 1
            } else {
                numberObject.numbersArray[i]++
            }
        }
    }
}

numberRepeat("42992338111134")
// write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
//
// input example: "bJIENsdfRAIRVIrsRFAijgRar"
let test = "bJIENsdfRAIRVIrsRFAijgRar"
// console.log(test.charAt(3))


test.charAt()
function checkCaseOfLetter(string) {
   let test = string.toString();
    for(let i = 0; i < string.length; i++) {
        if((/[a-zA-Z]/).test(test.charAt(i)) === true){
            if((test.charAt(i)) === (test.charAt(i).toUpperCase())){
                console.log(test.charAt(i), "is an Uppercase Letter");
            } else {
                console.log(test.charAt(i), "is a Lowercase Letter");
            }
        } else {
            console.log(test.charAt(i), "is not a letter");
        }
    }
}
checkCaseOfLetter(test);
checkCaseOfLetter("bJI*ENsd4fRAIR5VIrsRFA-ijgRar");




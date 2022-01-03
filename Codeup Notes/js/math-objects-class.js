console.log(Math.random()); //Will give a random number 'between' 0 and 1 remember between a lot of decimal places "floating number"

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}                   // Gives random number between mix and max still gives a floating number

function getRandomInt(min, max){
    const randomNumber = Math.random() * (max -min) + min;
    console.log("before Floor || Ceil", randomNumber); // integer means whole number
    console.log("after Floor", Math.floor(randomNumber)); // Will round down to the lowest integer
    console.log("after Ceil", Math.ceil(randomNumber)); // Will round up to the highest integer
    console.log("after rounding", Math.round(randomNumber)); // Will round down or up depending on decimal place
    return Math.floor(randomNumber);
}

console.log(getRandomArbitrary(0, 100));

console.log(getRandomInt(0, 100));

console.log(Math.pow(8, 2));  // This is to add exponents to numbers

console.log(8 ** 2); // Updated javascript sign to do exponents for numbers

console.log("PI", Math.PI); // Will give pi with a lot of decimal places

console.log("E", Math.E); // Is used for log stuff big brain math that I dont completely remember 8E**2

console.log(.1 * .2); // Javascript has a floating point math error where it will be off by really small decimal places

console.log(((10 * .1) * (10 * .2) / 10)); // To be able to get the .2 that .1*.2 that we would want to get from the math above

console.log(isNaN(null))


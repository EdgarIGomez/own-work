'use strict' ;
// BOM Intro





// Set Dialogue

// prompt()

// confirm()     These are the three dialogue BOM events that are available in the browser to use.

// alert()

// Set Interval

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () { //Anonymous function is used for the first parameter of set interval could also be a named function
    if (count >= max) {
        clearInterval(intervalId); // clearInterval() used to stop the interval from calling the function again after the interval passes
        console.log('All done');
    } else {   //Works just like any other if/else loop except it loops at a 1 second interval thanks to the interval
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);



// Set Timer

var delay = 5000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);  // will call this function after the delay hits 0 milliseconds

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring
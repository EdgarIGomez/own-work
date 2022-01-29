// https://api.jquery.com link to jQuery Documentation
//Some notes
//methods can be chained together ex: .method().method().method()
//some methods accept 2 or no parameters 2 parameters ex: .css no parameter ex: .text()
// document.getElementById("heading"); // DOM
// //$()  // Jquery
//
// let firstP = $("#p-one");
// console.log(firstP);
//
// let heading = $("#heading");
// console.log(heading);
// let valHeading = heading.text(); //$("#heading").text works too .html will give us the inner html of the element grabbed
// console.log(valHeading);
//
// $("#p-one").addClass("border")
//
// let user1 = {
//     name: "laura",
//     isLoggedIn: false,
//     age: 31
// }
//
// $("#p-one, #heading").css("background-color", "lightblue")
//
// $("ul li:nth-child(2)").css("color", "green")
//Pseudo Code
//Find element to work on
//put into variable
//create the function
//on double click change bg color dark and text to white
//
// let btn = $("button");
//
// btn.dblclick(function () {
//     $("*").css({"background-color": "darkblue", "color": "white"})
// })

//hover over list turns blue while on it and turns green once leaves
//identify elements (li)
//hover event
//function for hover in change color to blue
//function for hover out change color to green

$("li").hover(function(){
    $(this).css("background-color", "lightblue");
}, function () {
    $(this).css("background-color", "lightgreen");
    }
    )




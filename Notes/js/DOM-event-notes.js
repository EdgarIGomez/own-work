// Change background color of table of contents

//1. Identify the element you want to listen to the event
//2. Retrieve the element we want form step 1
//3. Add event listener to element retrieved from step 2
//4. Identify what the event is listening too
//5. Add an event function that triggers when the event happens
//6. What change do we want to make
//7. Link the event and function together




//id="orange"
var orangeToC = document.getElementById("orange")
console.log(orangeToC);
function changeOrange() {
    orangeToC.style.color = "orange"
}

document.getElementById("orange").addEventListener("click", changeOrange)

let h1El = document.getElementsByTagName("h1")[0]
console.log(h1El);

let btn = document.getElementById("btn")
console.log(btn)

btn.addEventListener("click", function() {
    h1El.style.color = "pink"
})

document.getElementById("darkmode").addEventListener("click", function() {
    let bod = document.getElementsByTagName("body")[0]
    if(bod.style.backgroundColor !== "black"){
        bod.setAttribute("style", "background-color: black; color: white;")
    } else {
        bod.setAttribute("style", "background-color: white; color: black;")

    }
})
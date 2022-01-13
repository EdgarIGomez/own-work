// let userName = prompt("What is your name?")
//
// let userNameSpan = document.getElementById("name")
//
// console.log("prompt answer;", userName)
// console.log("retrieved span;", userNameSpan)
//
// // Update entire html element
// //userNameSpan.innerHTML = userName;
//
// // Just changes the text of the element
// userNameSpan.textContent = userName;

// other ways to get elements from the html are
//getElementsByClass
//getElementByTagName
//getElementById

let changeParagraph = document.getElementsByClassName("changeText")
console.log(changeParagraph)

changeParagraph[0].textContent = "The weather outside is frightful and the fire is so delightful and since we've no place to go let it snow, let it snow, let it snow."

let myH1 = document.getElementById("greeting")

myH1.setAttribute("style", "color: red");
/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening");
let optionOneButton = document.querySelector(".option-one");
let optiontwoButton = document.querySelector(".option-two");
let Optionthreebutton = document.querySelector(".option-three");
let optionOnescreen = document.querySelector(".option-one-screen");
let optiontwoscreen = document.querySelector(".option-two-screen");
let buttons = document.querySelector(".buttons");
let optionOneEnd = document.querySelector(".option-One-End");
let optiontwoEnd = document.querySelector(".option-two-end");

let ButtonOne = function() {

};
optionOneButton.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOnescreen.style.display = "block";
};
optiontwoButton.onclick = function() {
    opening.style.display = "none";
    optiontwoscreen.style.display = "block";
    buttons.style.display = "none";
};
Optionthreebutton.onclick = function() {
    optiontwoscreen.style.display = "none";
    optiontwoEnd.style.display = "block";
};



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!




.onclick=function(){

};

*/
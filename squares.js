let squareArea = document.querySelector("#squarearea");
// let squareArea = document.getElementById("squarearea")
let squareCount = parseInt(Math.random()*21)+30; // 30-50
//Make some variable for a really big zIndex
let zIndexCounter = 1;

for(let i = 0;i<squareCount;i++){
    addSquare();
}

function addSquare(){
    //make a square
    let square = document.createElement("div");
    square.className = "square";

    let size = parseInt(Math.random()*11)+45;
    square.style.width = size + "px";
    square.style.height = size + "px";

    square.style.left = parseInt(Math.random()*(squareArea.clientWidth - size))+"px";
    square.style.top = parseInt(Math.random()*(squareArea.clientHeight - size))+"px";
    square.style.backgroundColor = getRandomColor();

    // I can put a onclick and a function(this)

    //put it on the screen
    squareArea.append(square);
}

function getRandomColor(){
    // Make a color string
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i <6;i++){
        color+=letters.charAt(parseInt (Math.random()*letters.length));
    }
    //return that string
    return color;
}

//make a function to add one square
//Make sure that I set that as the onclick for the button

//Make a function that changes all of the colors of the squares
//Make sure the button calls it

function changeColors(){
    let allSquares = document.querySelectorAll(".square");

}
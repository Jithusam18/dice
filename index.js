function dice() {

    var rdmnum1 = (Math.floor(Math.random() * 6) + 1);

    var imgsource = "https://raw.githubusercontent.com/Jithusam18/Roll-the-Dice/main/Roll%20the%20Dice/images/dice" + rdmnum1 + ".png";

    var image1 = document.querySelectorAll("img")[0].setAttribute("src", imgsource);


    var rdmnum2 = (Math.floor(Math.random() * 6) + 1);

    var imgsource = "https://raw.githubusercontent.com/Jithusam18/Roll-the-Dice/main/Roll%20the%20Dice/images/dice" + rdmnum2 + ".png";

    var image1 = document.querySelectorAll("img")[1].setAttribute("src", imgsource);

    if (rdmnum1 > rdmnum2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    } else if (rdmnum1 < rdmnum2) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    } else {
        document.querySelector("h1").innerHTML = "draw";
    }
}

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    dice();
})

function reset() {
    document.querySelector("h1").innerHTML = "Roll The dice";
}

let resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener('click', event => {
    reset();
})
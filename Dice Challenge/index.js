var first = 1;
var Score1 = 0;
var Score2 = 0;
var k = 0;
var m = 0;
var result = document.getElementById("result");
function editname() {
    player1 = prompt("Player 1 Name ");
    player2 = prompt("Player 2 Name");
    document.querySelector("h2.player1").innerHTML = player1;
    document.querySelector("h2.player2").innerHTML = player2;
}
function rolldice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1")
        .setAttribute("src", "/images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2")
        .setAttribute("src", "/images/dice" + randomNumber2 + ".png");
    if (first == 1) {
        Score1 += randomNumber1;
        document.getElementById("Score1").innerHTML = Score1;
        first = 0;
        result.innerHTML = document.querySelector("h2.player2").innerHTML + " turn";
    }
    else {
        Score2 += randomNumber2;
        document.getElementById("Score2").innerHTML = Score2;
        first = 1;
        result.innerHTML = document.querySelector("h2.player1").innerHTML + " turn";
    }


    if (Score1 > 20) {
        result.innerHTML = "Congratulations!" + document.querySelector("h2.player1").innerHTML + "wins!";
    }
    else if (Score2 >= 20) {
        result.innerHTML = "Congratulations!" + document.querySelector("h2.player2").innerHTML + " wins!";
    }

}



//These are all the high score functions
function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

//sort array from higest to lowest
    highscores.sort(function(a,b) {
        return b.score - a.score;
    });

//make and store each high score with for each loop function using list
    highscores.forEach(function(score) {
        var liResult = document.createElement("li");
        liResult.textContent = score.initials + " - " + score.score;

        var olEl = document.getElementById("highscores");
            olEl.appendChild(liResult);
    });
}

//Reset scores
    function clearHighscores() {
        window.localStorage.removeItem("highscores");
        window.location.reload();
    }

    document.getElementById("clear").onclick = clearHighscores;

//Show high scores on load
        printHighscores();
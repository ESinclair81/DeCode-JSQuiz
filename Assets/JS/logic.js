//Quiz Variables

var currentQuestion = 0;
var time = questions.length * 10;
var timerId;

//Dom Element Variables 

var timerEL = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");

var startButton = document.getElementById("start");
var saveButton = document.getElementById("save");

var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//Start of Quiz
function startQuiz() {

//this hides the start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

//This Reveals and starts the questions 
    questionsEl.removeAttribute("class");

//Timer start
    timerId = setInterval(clockTick, 1000);

//display starting time
    timerEl.textcontent = time;

    getQuestion();
}

function getQuestion() {

//Grabbing the current question from the list
    var currentQuestion = questions[currentQuestion];

//Refreshing to appropriate question title
    var titleEl = document.getElementById("question-title");
    titleEl.textContentt = currentQuestion.title;

//Clearing last answers
    choicesEl.innerHTML ="";

    
}
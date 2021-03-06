// This is the questions array

var questions = [
    {
        title: "What does PERSISTENCE refer to in JavaScript terms?",
        choices: ["A file path that cannot fail", "The act of performing a PERSE","A user value that stays saved throughout a webpage", "When a coder codes for over 24 hours straight" ],
        answer: "A user value that stays saved throughout a webpage"
    },
    
    {
        title: "Which one of these HTML Drag and Drop API events signifies the drag event is over?",
        choices: ["dragdone","dragend","draggone","drag-end"],
        answer: "dragend"
    },
    
    {
        title: "What does the abbreviation JSON stand for?",
        choices: ["Java Script Object Name","JavaScript Only Notes", "Java Script Object Node", "JavaScript Object Notation"],
        answer: "JavaScript Object Notation"
    },
    
    {
        title: "Another way of describing a callback is:_____?",
        choices: ["passing a function through an event", "a prompt box that takes data a site refers to later", "passing a function through another function", "a function that makes mobile phones ring" ],
        answer: "passing a function through another function"
    },
    
    {
        title: "What suffix should be used for a DOM element?",
        choices: [" .El", " .el", " .domEl", " .DOM" ],
        answer: " .El"
    },
    
    {
        title: "Which of the below is an example of a variable declaration?",
        choices: [" var.thingy"," 8 > 0i", " x is y", "var x = y" ],
        answer: "var x = y"
    },
    
    {
        title: "Which of these symbols should be used to create a code block?",
        choices: [" {}", "[]", "()", "]};" ],
        answer: "{}"
    },
    
    {
        title: "i++ is an example of  _________?",
        choices: ["a variable that adds things twice", "increment expression","increment object", "variable expression" ],
        answer: "increment expression"
    },
    
    {
        title: "Which of the following do not refer to types of JavaScript data?",
        choices: ["boolean, symbolic, number", "number, boolean, grid", "string, object, function", "number, boolean, string" ],
        answer: "number, boolean, string"
    },
    
    {
        title: "What other language uses a similar comment syntax style to that used in JavaScript?",
        choices: ["HTML","CSS","Pascal", "all of the above"],
        answer: "CSS"
    }
    ];


// Quiz Variables

var currentQuestionIndex= 0;
var time = questions.length * 15;
var timerId;

// Dom Element Variables 


var timerEl = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");

var startBtn = document.getElementById("start");
var saveBtn = document.getElementById("save");

var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


// Start of Quiz
function startQuiz() {


// this hides the start screen
   var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

// This Reveals and starts the questions 
    questionsEl.removeAttribute("class");

// Timer start
    timerId = setInterval(clockTick, 1000);

// display starting time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {

// Grabbing the current question from the list
    var currentQuestion = questions[currentQuestionIndex];

//Refreshing to appropriate question title
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

// Clearing last answers
    choicesEl.innerHTML = "";

// Choices in loop
currentQuestion.choices.forEach(function(choice, i) {

    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

choiceNode.textContent = i + 1 + ". " + choice;

// Add event listener click per Choice
choiceNode.onclick = questionsClick;

//Show on page
choicesEl.appendChild(choiceNode);
});

}

// These are the responses to answers
function questionsClick() {

// If user put wrong answer,
    if (this.value !== questions[currentQuestions].answer) {

// Time reduction
time -=15;

    if (time < 0) {
    time = 0;
    }

//show updated time
timerEl.textContent = time;

feedbackEl.textContent = "INCORRECT :(";

    } else {
    feedbackEl.textContent = "YES! :)"
    }

//Display feedback
feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
    feedbackEl.setAttribute("class", "hide");
}, 1000);

//next q and more
currentQuestion++;
    if (currentQuestions === questions.length) {
    quizEnd();
        } else {
    getQuestions();  
    }      
}

//stop the timer
function quizEnd() {
    clearInterval(timerId);

//end screen display
    var endScreenEl = document.getElementById("game-over");
    endScreenEl.removeAttribute("class");

//display final result
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

//hide questions again
    questionsEl.setAttribute("class", "hide");
}

//This is the clockTick function for the timer
    function clockTick() {
        time--;
        timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}

//This is the Top Coders high score function

function saveHighscore() {
    var initials = initialsEl.value.trim();

    if (initials !== "") {

//Retrieve saved high scores
        var highscores = 
        JSON.parse(window.localStorage.getItem("highscores")) || [];

//latest score display in latest score onject to save
        var latestScore  = {
            score: time,
            initials: initials
        };

//commit latest score to local storage
        highscores.push(latestScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

// Jump to Top Coders Page
        window.location.href = "highscores.html";
    }
}
        function checkForEnter(event) {
        if (event.key === "Enter") {
            saveHighscore();
        }
    }

//user clicks section

//click button for intiial to be saved
    saveBtn.onclick = saveHighscore;

//click button to start quiz
    startBtn.onclick = startQuiz;

//click button for initials to be entered
    initialsEl.onkeyup = checkForEnter;




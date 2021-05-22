var quests = [
    {
        ques: "Commonly used data types DO NOT include: ",
        choices: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
        answer: "3.alerts"
    },

    {
        ques: "The condition in an if / else statement is enclosed within _____. ",
        choices: ["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"],
        answer: "3.parentheses"
    },

    {
        ques: "Arrays in JavaScript can be used to store ____.",
        choices: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        answer: "4.all of the above"
    },

    {
        ques: "Strings values must be enclosed within ______ when being assigned to variables.",
        choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"],
        answer: "3.quotes"
    },

    {
        ques: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["1.JavaScript", "2.terminal/bash", "3.for loops", "4.console.log"],
        answer: "4.console.log"
    },
];

var startQzBut = document.getElementById('startQz')
var homeTitle = document.getElementById('title')
var homeInfo = document.getElementById('info')
var newQstnBox = document.getElementById('questionsBox')
var questionEl = document.getElementById('questions')
var finishedQz = document.getElementById('done')

var opt1 = document.getElementById('but1')
var opt2 = document.getElementById('but2')
var opt3 = document.getElementById('but3')
var opt4 = document.getElementById('but4')
var answrcheck = document.getElementById('check')
var final = document.getElementById('finalScore')

var correctpoint = 0;
var questionNum = 0;
var quesIndex = 0;

var submitBtn = document.getElementById('subBut')
var initialIn = document.getElementById('initInput')

startQzBut.addEventListener('click', startQuiz)
opt1.addEventListener('click', chose1) ;
opt2.addEventListener('click', chose2) ;
opt3.addEventListener('click', chose3) ;
opt4.addEventListener('click', chose4) ;

function startQuiz() {
    quesIndex = 0;
    console.log('Quiz has begun')
    startQzBut.classList.add('hide')
    homeTitle.classList.add('hide')
    homeInfo.classList.add('hide')

    newQstnBox.classList.remove('hide')
    nextQues()
}

function nextQues() {

    questionEl.innerText = quests[quesIndex].ques;
    opt1.textContent = quests[quesIndex].choices[0];
    opt2.textContent = quests[quesIndex].choices[1];
    opt3.textContent = quests[quesIndex].choices[2];
    opt4.textContent = quests[quesIndex].choices[3];
}

function checkAn(answer) {
    answrcheck.style.display = "block";

    if (quests[quesIndex].answer === quests[quesIndex].choices[answer]) {
        correctpoint++;
        answrcheck.textContent = "Correct!";
    }
    else {
        answrcheck.textContent = "Wrong!";
    }

    quesIndex++;

    if (quesIndex < quests.length) {
        nextQues();
    }
    else {
        doneQuiz();
    }
}

function chose1() { checkAn(0); }
function chose2() { checkAn(1); }
function chose3() { checkAn(2); }
function chose4() { checkAn(3); }

function doneQuiz() {

    finishedQz.classList.remove('hide')
    newQstnBox.classList.add('hide')
    final.textContent = correctpoint;
}
var startQzBut = document.getElementById('startQz')
var homeTitle = document.getElementById('title')
var homeInfo = document.getElementById('info')
var newQstnBox = document.getElementById('questionsBox')
var questionEl = document.getElementById('questions')
var opt1 = document.getElementById('btn1')
var opt2 = document.getElementById('btn2')
var opt3 = document.getElementById('btn3')
var opt4 = document.getElementById('btn4')



var questionNum = 0;
var quesIndex = 0;
var answer;

startQzBut.addEventListener('click', startQuiz)


function startQuiz() {
    console.log('Quiz has begun')
    startQzBut.classList.add('hide')
    homeTitle.classList.add('hide')
    homeInfo.classList.add('hide')

    newQstnBox.classList.remove('hide')
    showQuestion()
}

function next() {

}

function showQuestion() {

    questionEl.innerText = quests[quesIndex].ques;
    opt1.textContent = quests[quesIndex].choices[0];
    opt2.textContent = quests[quesIndex].choices[1];
    opt3.textContent = quests[quesIndex].choices[2];
    opt4.textContent = quests[quesIndex].choices[3];
}

function selAnsr() {

}

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
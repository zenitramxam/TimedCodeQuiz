var startQzBut = document.getElementById('startQz')
var homeTitle = document.getElementById('title')
var homeInfo = document.getElementById('info')
var newQstnBox = document.getElementById('questionsBox')

startQzBut.addEventListener('click', startQuiz)


function startQuiz() {
    console.log('Quiz has begun')
    startQzBut.classList.add('hide')
    homeTitle.classList.add('hide')
    homeInfo.classList.add('hide')
    newQstnBox.classList.remove('hide')
}

function nxtQues() {

}

function selAnsr() {

}
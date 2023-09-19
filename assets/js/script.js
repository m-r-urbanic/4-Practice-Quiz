var questionDisplay = document.querySelector(".question-provided");
var startGame = document.querySelector(".start-game");
var itemDisplayOne = document.querySelector(".item-1");
var itemDisplayTwo = document.querySelector(".item-2");
var itemDisplayThree = document.querySelector(".item-3");
var itemDisplayFour = document.querySelector(".item-4");
var timerElement = document.querySelector(".timer-count");

/*var questionAsk;
var questionOptionOne;
var questionOptionTwo;
var questionOptionThree;
var questionOptionFour;*/
var randomQuestionSelect;
var selectedQuestion;
var timerCount;

var questionArray = [];

/* create questions and answers as selectable objects */
var questionOne = {
    question:"One",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test",
    correct: 1
}

var questionTwo = {
    question:"Two",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay",
    correct: 2
}

var questionThree = {
    question:"Three",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test",
    correct: 4
}

var questionFour = {
    question:"Four",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testittttttttttttttng teeeeeeeeeee",
    answerFour: "Yay",
    correct: 1
}

var questionFive = {
    question:"five",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Questtttttttttttion teeeeeeeeeee",
    answerFour: "Test",
    correct: 3
}

var questionSix = {
    question:"six",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testingtttttttttttttttttt teeeeeeeeeee",
    answerFour: "Yay",
    correct: 4
}

var questionSeven = {
    question:"seven",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Questttttttttttttttttttttion teeeeeeeeeee",
    answerFour: "Test",
    correct: 3
}

var questionEight = {
    question:"eight",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testitttttttttttttng teeeeeeeeeee",
    answerFour: "Yay",
    correct: 1
}
var questionNine = {
    question:"nine",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Questtttttttttttttttttion",
    answerFour: "Test",
    correct: 4
}

var questionTen = {
    question:"ten",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testtttttttttttttting",
    answerFour: "Yay",
    correct: 3
}

/* make array of possible questions */
questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

console.log(questionArray[2]);


function giveQuestion(){
    // create function that gets a random type
    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    // select random question using the random function
    randomQuestionSelect = getRandom(Object.values(questionArray));
    console.log(randomQuestionSelect);
}



/* Change list items based on question selected */
function changeItem(){
    giveQuestion();

    /* change selected question */
    selectedQuestion = randomQuestionSelect;  

    /* set questions equal to the selected question and the selected question's answer */
    /*
    questionAsk = selectedQuestion.question
    questionOptionOne = selectedQuestion.answerOne
    questionOptionTwo = selectedQuestion.answerTwo
    questionOptionThree = selectedQuestion.answerThree
    questionOptionFour = selectedQuestion.answerFour

    questionDisplay.textContent = questionAsk
    itemDisplayOne.textContent = questionOptionOne
    itemDisplayTwo.textContent = questionOptionTwo
    itemDisplayThree.textContent = questionOptionThree
    itemDisplayFour.textContent = questionOptionFour
    */


    questionDisplay.textContent = selectedQuestion.question
    itemDisplayOne.textContent = selectedQuestion.answerOne
    itemDisplayTwo.textContent = selectedQuestion.answerTwo
    itemDisplayThree.textContent = selectedQuestion.answerThree
    itemDisplayFour.textContent = selectedQuestion.answerFour

    /* delete used question from array of options */
    getIndex = questionArray.indexOf(selectedQuestion);
    console.log(getIndex);
    const removed = questionArray.splice(getIndex,1);

    console.log(questionArray);

}

changeItem();

let clickCounter = 0;

// count how many times the function has been called (used to count clicks)
function clickFunction() { 
    clickCounter = clickCounter + 1;
    console.log(clickCounter);
}

let winAmount = 0;

// count how many times the function has been called (used to count clicks)
function winCounter() { 
    winAmount = winAmount + 1;
    console.log("win amount" + winAmount);
}

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 100;

function startTimer() {
    // Start the timer
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    // When the time runs out
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timeEl.textContent = "Game Over";
    }

  }, 1000);
}

function hideStart() {
    var toggleStart = document.getElementById("start-card");
    if (toggleStart.style.display === "none") {
      toggleStart.style.display = "block";
    } else {
      toggleStart.style.display = "none";
    }
}


function isTrueOne(){
    if (selectedQuestion.correct == 1)
    {
        console.log("true");
        winCounter();
    }
    else
    {
        console.log("false");
        secondsLeft = secondsLeft -10;
    }
}

function isTrueTwo(){
    if (selectedQuestion.correct == 2)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
        secondsLeft = secondsLeft -10;
    }
}

function isTrueThree(){
    if (selectedQuestion.correct == 3)
    {
        console.log("true");
        winCounter();
    }
    else
    {
        console.log("false");
        secondsLeft = secondsLeft -10;
    }
}


function isTrueFour(){
    if (selectedQuestion.correct == 4)
    {
        console.log("true");
        winCounter();
    }
    else
    {
        console.log("false");
        secondsLeft = secondsLeft -10;
    }
}

// define functions to be called by each button
function beginGame() {
    startTimer();
    hideStart();

    
}
function functionOne() {
    isTrueOne();
    changeItem();
    clickFunction();
}

function functionTwo() {
    isTrueTwo();
    changeItem();
    clickFunction();
}

function functionThree() {
    isTrueThree();
    changeItem();
    clickFunction();
}

function functionFour() {
    isTrueFour();
    changeItem();
    clickFunction();
}

startGame.addEventListener("click",beginGame);
itemDisplayOne.addEventListener("click", functionOne);
itemDisplayTwo.addEventListener("click", functionTwo);
itemDisplayThree.addEventListener("click", functionThree);
itemDisplayFour.addEventListener("click", functionFour);
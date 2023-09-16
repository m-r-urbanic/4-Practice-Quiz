var questionDisplay = document.querySelector(".question-provided");
var itemDisplayOne = document.querySelector(".item-1");
var itemDisplayTwo = document.querySelector(".item-2");
var itemDisplayThree = document.querySelector(".item-3");
var itemDisplayFour = document.querySelector(".item-4");

/*var questionAsk;
var questionOptionOne;
var questionOptionTwo;
var questionOptionThree;
var questionOptionFour;*/
var randomQuestionSelect;
var selectedQuestion;

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
    answerThree: "Testing",
    answerFour: "Yay",
    correct: 1
}

var questionFive = {
    question:"five",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test",
    correct: 3
}

var questionSix = {
    question:"six",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay",
    correct: 4
}

var questionSeven = {
    question:"seven",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test",
    correct: 3
}

var questionEight = {
    question:"eight",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay",
    correct: 1
}
var questionNine = {
    question:"nine",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test",
    correct: 4
}

var questionTen = {
    question:"ten",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
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

    /* refactorduplicated code */

    

}

changeItem();

function isTrueOne(){
    if (selectedQuestion.correct == 1)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}
isTrueOne();
    /* refactorduplication code */
function isTrueTwo(){
    if (selectedQuestion.correct == 2)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}

function isTrueThree(){
    if (selectedQuestion.correct == 3)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}


function isTrueFour(){
    if (selectedQuestion.correct == 4)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}

function functionOne() {
    isTrueOne();
    changeItem();
}

function functionTwo() {
    isTrueTwo();
    changeItem();
}

function functionThree() {
    isTrueThree();
    changeItem();
}

function functionFour() {
    isTrueFour();
    changeItem();
}

var optionOneClick = document.querySelector(".item-1");
optionOneClick.addEventListener("click", functionOne);

var optionTwoClick = document.querySelector(".item-2");
optionTwoClick.addEventListener("click", functionTwo);

var optionThreeClick = document.querySelector(".item-3");
optionThreeClick.addEventListener("click", functionThree);

var optionFourClick = document.querySelector(".item-4");
optionFourClick.addEventListener("click", functionFour);
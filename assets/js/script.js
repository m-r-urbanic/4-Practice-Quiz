var questionDisplay = document.querySelector(".question-provided");
var itemDisplayOne = document.querySelector(".item-1");
var itemDisplayTwo = document.querySelector(".item-2");
var itemDisplayThree = document.querySelector(".item-3");
var itemDisplayFour = document.querySelector(".item-4");

var questionAsk;
var questionOptionOne;
var questionOptionTwo;
var questionOptionThree;
var questionOptionFour;
var randomQuestionSelect;
var selectedQuestion;

var questionArray = [];

/* create questions and answers as selectable objects */
var questionOne = {
    question:"One",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionTwo = {
    question:"Two",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}

var questionThree = {
    question:"Three",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionFour = {
    question:"Four",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}

var questionFive = {
    question:"five",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionSix = {
    question:"six",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}

var questionSeven = {
    question:"seven",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionEight = {
    question:"eight",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}
var questionNine = {
    question:"nine",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionTen = {
    question:"ten",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
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

giveQuestion();
/* change selected question */
selectedQuestion = randomQuestionSelect;


console.log(selectedQuestion.question)
console.log(selectedQuestion.answerOne)
console.log(selectedQuestion.answerTwo)
console.log(selectedQuestion.answerThree)
console.log(selectedQuestion.answerFour)

giveQuestion();
/* change selected question */
selectedQuestion = randomQuestionSelect;


console.log(selectedQuestion.question)
console.log(selectedQuestion.answerOne)
console.log(selectedQuestion.answerTwo)
console.log(selectedQuestion.answerThree)
console.log(selectedQuestion.answerFour)

/* set questions equal to the selected question and the selected question's answer */
questionAsk = selectedQuestion.question
questionOptionOne = selectedQuestion.answerOne
questionOptionTwo = selectedQuestion.answerTwo
questionOptionThree = selectedQuestion.answerThree
questionOptionFour = selectedQuestion.answerFour

/* Change list items based on question selected */
function changeItem(){
    questionDisplay.textContent = questionAsk
    itemDisplayOne.textContent = questionOptionOne
    itemDisplayTwo.textContent = questionOptionTwo
    itemDisplayThree.textContent = questionOptionThree
    itemDisplayFour.textContent = questionOptionFour

}

changeItem();
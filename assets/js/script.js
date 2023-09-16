

var itemDisplayOne = document.querySelector(".item-1")
var itemDisplayTwo = document.querySelector(".item-2")
var itemDisplayThree = document.querySelector(".item-3")
var itemDisplayFour = document.querySelector(".item-4")

var questionOptionOne
var questionOptionTwo
var questionOptionThree
var questionOptionFour
var selectedQuestion

/* create questions and answers as selectable objects */
var questionOne = {
    question:"insert here",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionTwo = {
    question:"insert here",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}

var questionThree = {
    question:"insert here",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionFour = {
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}

var questionFive = {
    question:"insert here",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionSix = {
    question:"insert here",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}

var questionSeven = {
    question:"insert here",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionEight = {
    question:"insert here",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}
var questionNine = {
    question:"insert here",
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var questionTen = {
    question:"insert here",
    answerOne:":(",
    answerTwo:"mtest",
    answerThree: "Testing",
    answerFour: "Yay"
}

/* make array of possible questions */
const questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

/* change selected question */
selectedQuestion = questionOne



console.log(selectedQuestion.answerOne)
console.log(selectedQuestion.answerTwo)
console.log(selectedQuestion.answerThree)
console.log(selectedQuestion.answerFour)

/* set questions equal to the selected question and the selected question's answer */
questionOptionOne = selectedQuestion.answerOne
questionOptionTwo = selectedQuestion.answerTwo
questionOptionThree = selectedQuestion.answerThree
questionOptionFour = selectedQuestion.answerFour

/* Change list items based on question selected */
function changeItem(){
    itemDisplayOne.textContent = questionOptionOne
    itemDisplayTwo.textContent = questionOptionTwo
    itemDisplayThree.textContent = questionOptionThree
    itemDisplayFour.textContent = questionOptionFour

}

console.log(questionArray[2]);

changeItem();
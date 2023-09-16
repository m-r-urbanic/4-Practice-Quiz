

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
var objectTest = {
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

var objectTestTwo = {
    answerOne:"One",
    answerTwo:":)",
    answerThree: "Question",
    answerFour: "Test"
}

/* change selected question */
selectedQuestion = objectTest


console.log(selectedQuestion.answerOne)
console.log(selectedQuestion.answerTwo)
console.log(selectedQuestion.answerThree)
console.log(selectedQuestion.answerFour)


/* Change list items based on question selected */
function changeItem(){
    itemDisplayOne.textContent = questionOptionOne
    itemDisplayTwo.textContent = questionOptionTwo
    itemDisplayThree.textContent = questionOptionThree
    itemDisplayFour.textContent = questionOptionFour

}

changeItem();
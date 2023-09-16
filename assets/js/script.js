

var itemDisplayOne = document.querySelector(".item-1")
var itemDisplayTwo = document.querySelector(".item-2")
var itemDisplayThree = document.querySelector(".item-3")
var itemDisplayFour = document.querySelector(".item-4")

var questionOptionOne
var questionOptionTwo
var questionOptionThree
var questionOptionFour

function setQuestion(){
    questionOptionOne = "One"
    questionOptionTwo = ":)"
    questionOptionThree = "Question"
    questionOptionFour = "Test"
}

setQuestion();


/* Change list items based on question selected */
function changeItem(){
    itemDisplayOne.textContent = questionOptionOne
    itemDisplayTwo.textContent = questionOptionTwo
    itemDisplayThree.textContent = questionOptionThree
    itemDisplayFour.textContent = questionOptionFour

}

changeItem();
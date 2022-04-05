

function generate_random(max_number) {
    return Math.round(Math.random() * max_number);
}
// Select elements on page to interact with 
const button = document.querySelector('button')
const answer = document.querySelector('#answer')

// Add a click even to the button
button.addEventListener('click', function(){
    // Procedure goes here
    // 0 -> Yes, definitely
    // 1 -> No, certainly not! 
    // 2 -> Ask again later.
    // 3 -> I really dont care 

    // Generate random number 
let randomNumber = generate_random(3);

    // turn the random number into  an answer using the key above
let answerText = "";

if (randomNumber == 0) {
    answerText = "Yes, definitely!";
} else if (randomNumber == 1) {
answerText = "No, certainly not!";
} else if (randomNumber == 2) {
    answerText = "Ask again later.";
} else {
    answerText = "I really dont care.";
}

    // display the answer in the answer paragraph
    answer.innerHTML = answerText;

});
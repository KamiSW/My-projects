const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const answersArr = ['Without a doubt.', ' Yes.', 'Better not tell you now.', 'Very doubtful',
    'No.', 'Of course!', 'You know that better than I', 'Not so good.', 'It is good', 'It is very bad.'
];




const shakeImg = () => {
    ball.classList.add('shake-animaton');
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    ball.classList.remove('shake-animaton');
    if (input.value !== "" && input.value.slice(-1) === '?') {
        showAnswer()
        error.textContent = '';

    } else if (input.value !== "" && input.value.slice(-1) !== '?') {
        console.log('nie ok')
        error.textContent = 'Your question should end with "?" ';
        answer.textContent = '';
    } else {
        error.textContent = 'Please ask your question! ';
        answer.textContent = '';

    }

}




const showAnswer = () => {


    const number = Math.floor(Math.random() * 10);
    answer.innerHTML = `<span>Odpowiedź:</span>
    ${
        answersArr[number]}`;





}

ball.addEventListener("click", shakeImg);
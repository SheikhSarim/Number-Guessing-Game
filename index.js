let ran;
const Player_guess = document.getElementById('guess');
let btn = document.getElementById('btn');
let remaining = document.getElementById('remainingCount');
let previous = document.getElementById('previousList');
let loHi = document.getElementById('loHi');
let maxGuess = 0;
let numGues = 0;
let prevGuess = [];
let NewBtn = document.getElementById('NewBtn');

const difficultySelect = document.getElementById('difficulty');
const guessInput = document.getElementById('guess');
let feedbackDiv = document.getElementById('invalid-feedback');

function startGame() {
    const difficulty = parseInt(difficultySelect.value); // Use base 10 for parsing

    ran = Math.floor(Math.random() * difficulty + 1);
    // console.log(ran + "  " + `${difficulty}`);

    maxGuess = 10;
    numGues = 0;
    prevGuess = [];
    remaining.innerHTML = maxGuess;
    previous.innerHTML = "";
    loHi.innerHTML = "";
    Player_guess.value = "";


    Player_guess.setAttribute('max', difficulty);

  
    $('#gameOverModal').modal('hide');


}

// Event listener for difficulty change
difficultySelect.addEventListener('change', startGame);

(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let guess = parseInt(Player_guess.value); 
            validation(guess);

            if (form.checkValidity()) {
                console.log('Form is valid and guess processed.');
            } else {
                form.classList.add('was-validated');
            }
        }, false);
    });
})();
function validation(guess) {
    const difficultyValue = parseInt(difficultySelect.value);


    let feedbackMessage = '';


    // Validate input based on difficulty
    if (guess > difficultyValue) {
        feedbackMessage = `Value must be less than or equal to ${difficultyValue}.`;
    } else if (isNaN(guess) || guess <= 0) {
        feedbackMessage = 'Cannot be zero or negative. Please enter a valid number.';
    } else if (prevGuess.includes(guess)) {
        feedbackMessage = 'You already guessed that number.';
    } else {
        
        feedbackDiv.innerHTML = '';
        Player_guess.classList.remove('is-invalid');
        Player_guess.classList.add('is-valid');
        prevGuess.push(guess);
        previous.innerHTML = prevGuess.join(', '); 
        CheckGuess(guess);
        return; 
    }

    // If validation failed
    feedbackDiv.innerHTML = feedbackMessage;
    Player_guess.classList.remove('is-valid');
    Player_guess.classList.add('is-invalid');
}
function CheckGuess(guess) {
    if (guess < ran) {
        loHi.innerHTML = "Too Low!";
    } else if (guess > ran) {
        loHi.innerHTML = "Too High!";
    } else {
        $('#Victory').modal('show');
        return; 
    }

    numGues++;
    remaining.innerHTML = maxGuess - numGues;

    if (numGues >= maxGuess) {
        endGame();
    }
}

function endGame() {
    $('#gameOverModal').modal('show');
    document.getElementById('secretNumber').innerHTML = `${ran}`;
}

document.getElementById('infoBtn').addEventListener('click', () => {
    $('#instruction').modal('show');
})


window.onload = startGame;

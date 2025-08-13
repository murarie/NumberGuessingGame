let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('resultPanel').innerText = "";
}

function checkGuess() {
    const guess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (!guess || guess < 1 || guess > 100) {
        document.getElementById('resultPanel').innerText = "Please enter a number between 1 and 100!";
        return;
    }

    if (guess === secretNumber) {
        document.getElementById('resultPanel').innerText = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    } else if (guess < secretNumber) {
        document.getElementById('resultPanel').innerText = "Too low! Try again.";
    } else {
        document.getElementById('resultPanel').innerText = "Too high! Try again.";
    }
}

function resetGame() {
    document.getElementById('guessInput').value = "";
    startGame();
}

startGame();

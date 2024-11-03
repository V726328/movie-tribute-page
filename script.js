const quotes = [
    "Stay who you are, not a perfect soldier, but a good man.",
    "I choose to run towards my problems and not away from them.",
    "Just because something works doesn't mean it can't be improved.",
    "He may have been your father but he wasn't your daddy.",
    "Vengeance has consumed you ... I'm done letting it consume me.",
    "I can't control their fear, only my own.",
    "Don't waste it. Don't waste your life.",
    "If you're nothing without the suit, then you don't deserve it.",
    "What is grief if not love persevering?",
    "With great power comes great responsibility.",
    "Part of the Journey is the End.",
    "Every Breath You Take...",
    "I Can Do This All Day.",
    "The One And Only.",
    "I Am Iron Man.",
    "You Could Not Live With Your Own Failure.",
    "I'm Always Angry.",
    "Avengers Assemble."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerText = quotes[randomIndex];
}

function startQuiz1() {
    const quizDisplay1 = document.getElementById('quizDisplay1');
    quizDisplay1.innerHTML = `
        <h3>1.How many Infinity Stones are there?</h3>
        <button id="b3" onclick="checkAnswer('correct')">6</button>
        <button id="b4" onclick="checkAnswer('wrong')">5</button>
    `;
}

function startQuiz2() {
    const quizDisplay2 = document.getElementById('quizDisplay2');
    quizDisplay2.innerHTML = `
        <h3>2.What was the first film released in the Marvel Cinematic Universe?</h3>
        <button id="b3" onclick="checkAnswer('correct')">Iron Man</button>
        <button id="b4" onclick="checkAnswer('wrong')">Captain America First Avenger</button>
    `;
}

function startQuiz3() {
    const quizDisplay3 = document.getElementById('quizDisplay3');
    quizDisplay3.innerHTML = `
        <h3>3.What type of doctor is Stephen Strange? </h3>
        <button id="b3" onclick="checkAnswer('correct')">Neuro Surgeon</button>
        <button id="b4" onclick="checkAnswer('wrong')">Orthopedic Surgeon</button>
    `;
}


function startQuiz4() {
    const quizDisplay4 = document.getElementById('quizDisplay4');
    quizDisplay4.innerHTML = `
        <h3>4.What is the name of Thor’s home realm? </h3>
        <button id="b3" onclick="checkAnswer('correct')">Asgard</button>
        <button id="b4" onclick="checkAnswer('wrong')">Midgard</button>
    `;
}


function startQuiz5() {
    const quizDisplay5 = document.getElementById('quizDisplay5');
    quizDisplay5.innerHTML = `
        <h3>5. Which actor voices the character of Groot?</h3>
        <button id="b3" onclick="checkAnswer('correct')">Vin Diesel</button>
        <button id="b4" onclick="checkAnswer('wrong')">Chris Evans</button>
    `;
}


function checkAnswer(answer) {
    if (answer === 'correct') {
        alert("Correct!");
    } else {
        alert("Try Again!");
    }
}

function showCharacter(character) {
    alert(`Showing details for ${character}`);
}


newQuote();
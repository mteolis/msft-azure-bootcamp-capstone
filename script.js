document.getElementById('emojiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const answers = {
        question1: getRadioValue('question1'),
        question2: getRadioValue('question2'),
        question3: getRadioValue('question3')
    };
    const emoji = calculateEmoji(answers);
    displayResult(emoji);
});

function getRadioValue(name) {
    const selectedOption = document.querySelector(`input[name="${name}"]:checked`);
    return selectedOption ? selectedOption.value : null;
}

function calculateEmoji(answers) {
    const color = answers.question1;
    const animal = answers.question2;
    const mood = answers.question3;

    if (color === 'blue' && animal === 'dog' && mood === 'happy') {
        return '😄';
    } else if (color === 'blue' && animal === 'dog' && mood === 'sad') {
        return '🙁';
    } else if (color === 'blue' && animal === 'dog' && mood === 'excited') {
        return '😃';
    } else if (color === 'blue' && animal === 'cat' && mood === 'happy') {
        return '😺';
    } else if (color === 'blue' && animal === 'cat' && mood === 'sad') {
        return '😿';
    } else if (color === 'blue' && animal === 'cat' && mood === 'excited') {
        return '😸';
    } else if (color === 'blue' && animal === 'rabbit' && mood === 'happy') {
        return '🐰😄';
    } else if (color === 'blue' && animal === 'rabbit' && mood === 'sad') {
        return '🐰😔';
    } else if (color === 'blue' && animal === 'rabbit' && mood === 'excited') {
        return '🐰😃';
    } else if (color === 'red' && animal === 'dog' && mood === 'happy') {
        return '🐶😄';
    } else if (color === 'red' && animal === 'dog' && mood === 'sad') {
        return '🐶🙁';
    } else if (color === 'red' && animal === 'dog' && mood === 'excited') {
        return '🐶😃';
    } else if (color === 'red' && animal === 'cat' && mood === 'happy') {
        return '🐱😺';
    } else if (color === 'red' && animal === 'cat' && mood === 'sad') {
        return '🐱😿';
    } else if (color === 'red' && animal === 'cat' && mood === 'excited') {
        return '🐱😸';
    } else if (color === 'red' && animal === 'rabbit' && mood === 'happy') {
        return '🐰🐶';
    } else if (color === 'red' && animal === 'rabbit' && mood === 'sad') {
        return '🐰😔';
    } else if (color === 'red' && animal === 'rabbit' && mood === 'excited') {
        return '🐰😃';
    } else if (color === 'green' && animal === 'dog' && mood === 'happy') {
        return '🐶🙂';
    } else if (color === 'green' && animal === 'dog' && mood === 'sad') {
        return '🐶😢';
    } else if (color === 'green' && animal === 'dog' && mood === 'excited') {
        return '🐶😁';
    } else if (color === 'green' && animal === 'cat' && mood === 'happy') {
        return '🐱🙂';
    } else if (color === 'green' && animal === 'cat' && mood === 'sad') {
        return '🐱😢';
    } else if (color === 'green' && animal === 'cat' && mood === 'excited') {
        return '🐱😁';
    } else if (color === 'green' && animal === 'rabbit' && mood === 'happy') {
        return '🐰🐶';
    } else if (color === 'green' && animal === 'rabbit' && mood === 'sad') {
        return '🐰😢';
    } else if (color === 'green' && animal === 'rabbit' && mood === 'excited') {
        return '🐰😁';
    } else {
        return '😐';
    }
}

function displayResult(emoji) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Your Emoji is: ${emoji}</h2>`;
}


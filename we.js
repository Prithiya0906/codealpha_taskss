let currentQuestionIndex = 0;
let score = 0;

// Sample questions array
const questions = [
    {
        question: "What is the capital of France?",
        options: ["A) Paris", "B) London", "C) Berlin", "D) Madrid"],
        answer: "A"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["A) Earth", "B) Jupiter", "C) Saturn", "D) Mars"],
        answer: "B"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["A) O2", "B) H2O", "C) CO2", "D) NaCl"],
        answer: "B"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["A) Charles Dickens", "B) Mark Twain", "C) William Shakespeare", "D) Jane Austen"],
        answer: "C"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["A) Nucleus", "B) Ribosome", "C) Mitochondria", "D) Endoplasmic Reticulum"],
        answer: "C"
    }
];

// Load the current question
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const options = document.querySelectorAll('.option');

    // Set the question text
    questionElement.innerText = questions[currentQuestionIndex].question;

    // Set the options text
    options.forEach((option, index) => {
        option.innerText = questions[currentQuestionIndex].options[index];
    });
}

// Handle answer selection
function selectAnswer(selected) {
    const selectedOption = document.querySelectorAll('.option');
    selectedOption.forEach(option => {
        option.classList.remove('selected'); // Remove previous selection
    });
    document.querySelector(`.option:nth-child(${selected})`).classList.add('selected'); // Highlight selected option
}

// Submit the answer
function submitAnswer() {
    const selectedOption = document.querySelector('.selected');
    if (!selectedOption) {
        alert("Please select an answer before submitting.");
        return;
    }

    const selectedAnswer = selectedOption.innerText.charAt(0); // Get the selected answer (A, B, C, D)

    // Check if the answer is correct
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer is: ${questions[currentQuestionIndex].answer}`);
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Display final score
        const resultElement = document.getElementById('result');
        resultElement.innerText = `Your final score: ${score}/${questions.length}`;
        document.querySelector('.quiz-container').style.display = 'none'; // Hide quiz container
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
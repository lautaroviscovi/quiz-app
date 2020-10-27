const quizData = [
    {
        question: "How old is Elon Musk?",
        a: "52",
        b: "37",
        c: "24",
        d: "49",
        correct: "d",
    }, {
        question: "What is the most used programming languaje in 2020?",
        a: "Java",
        b: "Python",
        c: "JavaScript",
        d: "C#",
        correct: "c",
    }, {
        question: "Which Apollo mission was the first one to land on the Moon?",
        a: "Apollo 9",
        b: "Apollo 11",
        c: "Apollo 10",
        d: "Apollo 13",
        correct: "b",
    }, {
        question: "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
        a: "Nitrogen",
        b: "Helium",
        c: "Hydrogen",
        d: "Carbon",
        correct: "a",
    }, {
        question: "What is the chemical formula for ammonia?",
        a: "CO2",
        b: "NO3",
        c: "CH4",
        d: "NH3",
        correct: "d",
    }, {
        question: "In Roman Numerals, what does XL equate to?",
        a: "40",
        b: "60",
        c: "15",
        d: "90",
        correct: "a",
    }, {
        question: "How many sides does a heptagon have?",
        a: "8",
        b: "6",
        c: "5",
        d: "7",
        correct: "d",
    }, {
        question: "What is the alphanumeric representation of the imaginary number?",
        a: "e",
        b: "i",
        c: "n",
        d: "x",
        correct: "b",
    }, {
        question: "How many countries does Spain have a land border with?",
        a: "2",
        b: "4",
        c: "5",
        d: "3",
        correct: "c",
    }, {
        question: "What is the capital of Senegal?",
        a: "Dakar",
        b: "Nouakchott",
        c: "Conakry",
        d: "Monrovia",
        correct: "b",
    },
];



const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById( "a_text" );
const b_text = document.getElementById( "b_text" );
const c_text = document.getElementById( "c_text" );
const d_text = document.getElementById( "d_text" );
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

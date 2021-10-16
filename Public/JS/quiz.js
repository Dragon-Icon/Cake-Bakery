
const quizData = [
    {
        question: "Which of these is NOT an ingredient in a traditional pound cake?",
        a: "A pound of flour",
        b: "A pound of oil",
        c: "A pound of eggs",
        d: "A pound of sugar",
        correct: "b",
    },
    {
        question: "What kind of cake is associated with Christmas?",
        a: "Fruit Cake",
        b: "Victoria Sponge",
        c: "Chiffon Cake",
        d: "Black Forest",
        correct: "a",
    },
    {
    question: "Which common cake ingredient can be replaced with a mashed banana?",
        a: "Eggs",
        b: "Butter",
        c: "Milk",
        d: "Flour",
        correct: "a",
    },
    {
        question: "Who supposedly said, Let them eat cake?",
        a: "Alexander the Great",
        b: " King George III",
        c: "Audsey Heplew",
        d: "Marie Antoinette",
        correct: "d",
    },{
        question: "What is New York-style cheesecake topped with?",
        a: "Caramel",
        b: "Chocolate",
        c: "Nothing",
        d: "Fresh Fruit",
        correct:"c",
    },{
        question: "What part of a wedding cake do newlyweds traditionally save?",
        a: "First Slice",
        b: "Top Ties",
        c: "Last Slice",
        d: "'Heart' of the Cake",
        correct:'b',   
    },{
        question: "What kind of icing goes on red velvet cake?",
        a: "Buttercream",
        b: "Chocolate",
        c: "Cream Cheese",
        d: "Scott Morisson",
        correct:'c',
        },{
            question: "Whose wedding cake inspired the name royal icing?",
        a: "Queen Elizabeth II",
        b: "King Louis XIV",
        c: "Cleopatra",
        d: "Queen Victoria",
        correct:'d',
        },{
            question: "What flavor is the buttercream in opera cake?",
        a: "Chocolate",
        b: "Vanilla",
        c: "Expresso",
        d: "Cherry",
        correct:'c',
        },{
            question: "What gives Black Forest cake its unique flavor?",
        a: "Red Wine",
        b: "Cherry Liqueur",
        c: "Whiskey",
        d: "Chocolate Syrup",
        correct:'b',
        }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
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
                
                <button onclick="location.reload()" class="reload"><span class="front">Reload</span></button>
            `;
        }
    }
});
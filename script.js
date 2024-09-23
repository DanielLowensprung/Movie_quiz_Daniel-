const questions = [
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },
    {
        question: "exsample question",
        answers: [
            { text: "option 1", correct: false},
            { text: "option 2", correct: false},
            { text: "option 3", correct: false},
            { text: "option 4", correct: true},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerBotan = document.getElementById("answerBtns");
const nextBotan = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

// jør klart for å starte
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBotan.innerHTML = "Next";
    showQuestion();
}

// Viser første spørsmål 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.
    question;


    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button. innerHTML = answer.text;
        button. classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });


}

function resetState(){
    nextBotan.style.display = "none";
    while(answerBotan.firstChild){
        answerBotan.removeChild(answerBotan.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset. correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }        
        button.disabled = true;
    });
    nextBotan.style.display = "block";

}
function showScore(){
    resetState();
    questionElement.innerHTML = 'you got ' + score + ' out of ' + questions.length + '!';
    nextBotan.innerHTML = "Play Again";
    nextBotan.style.display = "block";
}


function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextBotan.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
});

startQuiz()
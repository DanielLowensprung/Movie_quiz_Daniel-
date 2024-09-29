
const questions = [
    {
        question: "Who created the Avengers Initiative?",
        answers: [
            { text: "Tony Stark", correct: false},
            { text: "Steve Rodgers", correct: false},
            { text: "Nick Fury", correct: true},
            { text: "Carol Danvers", correct: false},
        ]
    },
    {
        question: "Were does Spider-Man live?",
        answers: [
            { text: "Queens, New York", correct: true},
            { text: "New Asgard, Norway", correct: false},
            { text: "Brooklyn, New York", correct: false},
            { text: "Manhattan, New York", correct: false},
        ]
    },
    {
        question: "Who is Charles Xavier's dear friend and enemy? ",
        answers: [
            { text: "Deadpool", correct: false},
            { text: "Magneto", correct: true},
            { text: "Cyclops", correct: false},
            { text: "Juggernaut", correct: false},
        ]
    },
    {
        question: "What's the precious mineral from Wakanda?",
        answers: [
            { text: "Adamantium", correct: false},
            { text: "Mithril", correct: false},
            { text: "Vibranium", correct: true},
            { text: "Beskar", correct: false},
        ]
    },
    {
        question: "What was the first infinity stone Thanos acquired? ",
        answers: [
            { text: "Space", correct: false},
            { text: "Time", correct: false},
            { text: "Mind", correct: false},
            { text: "Power", correct: true},
        ]
    },
    {
        question: "What is the title of Peter's mixtape?",
        answers: [
            { text: "The best of Ed Sheeron", correct: false},
            { text: "Ravager mix", correct: false},
            { text: "Awesome Mix Vol. 1", correct: true},
            { text: "Peter's tunes", correct: false},
        ]
    },
    {
        question: "What's the name of Thor's hammer?",
        answers: [
            { text: "Stormbreaker", correct: false},
            { text: "Johnatan", correct: false},
            { text: "Mjolnir", correct: true},
            { text: "Stagbreaker", correct: false},
        ]
    },
    {
        question: "What is Groot's catchphrase?",
        answers: [
            { text: "My name appears to be Groot", correct: false},
            { text: "Ill be back", correct: false},
            { text: "I am Groot", correct: true},
            { text: "To infinity, and beyond!", correct: false},
        ]
    },
    {
        question: "What is the power sorce of the Iron Man suit?",
        answers: [
            { text: "ARC reactor", correct: true},
            { text: "Zero Point Modules", correct: false},
            { text: "Radioisotope Thermoelectric Generator", correct: false},
            { text: "Kyber crystal", correct: false},
        ]
    },
    {
        question: "What metal is Thanos' sword made of?",
        answers: [
            { text: "Vibranium", correct: false},
            { text: "Adamantium", correct: false},
            { text: "Uru", correct: true},
            { text: "5 Nokia phones melted together", correct: false},
        ]
    }
];

const questionImg = [
    "Images/Marvel quiz image 1.png",
    "Images/Marvel quiz image 2.gif",
    "Images/Marvel quiz image 3.gif",
    "Images/Marvel quiz image 4.png",
    "Images/Marvel quiz image 5.png",
    "Images/Marvel quiz image 6.gif",
    "Images/Marvel quiz image 7.gif",
    "Images/Marvel quiz image 8.gif",
    "Images/Marvel quiz image 9.gif",
    "Images/Marvel quiz image 10.png",
]

const comment = [
    "You got 0 out of 10 questions right. Perhaps it's time to watch more Marvel movies",
    "You got 1 out of 10 questions right. Perhaps it's time to watch more Marvel movies",
    "You got 2 out of 10 questions right. Perhaps it's time to watch more Marvel movies",
    "You got 3 out of 10 questions right. Perhaps it's time to watch more Marvel movies",
    "You got 4 out of 10 questions right. That's not too bad ",
    "You got 5 out of 10 questions right. That's not too bad ",
    "You got 6 out of 10 questions right. That's good",
    "You got 7 out of 10 questions right. That's good",
    "You got 8 out of 10 questions right. That's good very good ",
    "You got 9 out of 10 questions right. That's good very good ",
    "You got 10 out of 10 questions right! By Odin's beard you got everything right!!!"
]

const questionElement = document.getElementById("question");
const answerBotan = document.getElementById("answerBtns");
const nextBotan = document.getElementById("nextBtn");
const image = document.getElementById("img");

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
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;

    

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
    image.src = questionImg [currentQuestionIndex];

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
    image.src = "Images/Marvel quiz image 11.png";
    questionElement.innerHTML = comment[score];
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
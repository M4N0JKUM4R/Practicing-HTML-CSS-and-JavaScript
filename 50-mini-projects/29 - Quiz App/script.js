const quizData = [
    {
        question: "Who is the Prime Minister of India?",
        a: "Alia Bhatt",
        b: "Narendra Modi",
        c: "Donald Trump",
        d: "Manoj Kumar",
        correct_answer: "b",
    },
    {
        question: "Which is the largest country in the World?",
        a: "China",
        b: "India",
        c: "Australia",
        d: "Russia",
        correct_answer: "d",
    },
    {
        question: "What is Manoj Kumar's age?",
        a: "22",
        b: "21",
        c: "26",
        d: "27",
        correct_answer: "d"
    },
    {
        question: "Which year did India win T20 World Cup?",
        a: "2007",
        b: "2012",
        c: "2021",
        d: "2009",
        correct_answer: "a"
    },
    {
        question: "When did Mayans predict the end of the world?",
        a: "2000",
        b: "2100",
        c: "2012",
        d: "2021",
        correct_answer: "c"
    }
]

const nextButton = document.querySelector(".next-button")
const question = document.querySelector(".question")
const questionNumber = document.querySelector(".question-number")
const questionTitle = document.querySelector(".question-title")
const choices = document.querySelector(".choices")
const choice1Text = document.querySelector(".first-question + label")
const choice2Text = document.querySelector(".second-question + label")
const choice3Text = document.querySelector(".third-question + label")
const choice4Text = document.querySelector(".fourth-question + label")
const answersEl = document.querySelectorAll(".choice input")
const result = document.querySelector(".result")
let currentQuiz = 0;
let correctAnswers = 0;
let answer = undefined;

// Initialize Quiz

loadQuiz(currentQuiz);

// Generate next questions after submit on click

nextButton.addEventListener("click", () => {

    getAnswer();
    // Increment quiz value

    uncheckAnswer();
    
    loadQuiz(currentQuiz)

   // uncheckAnswers()
})

function loadQuiz(quizNumber) {
    console.log(quizData[quizNumber])        
    if(currentQuiz >= quizData.length) {
        endOfQuiz()
    } else {
        generateQuiz(quizNumber)
    }
}

function getAnswer() {
    
    console.log(answersEl)
    answersEl.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
            console.log({answer})
            if(answer == quizData[currentQuiz].correct_answer) {
                console.log("Correct answer")
                correctAnswers++;
            } else {
                console.log("Wrong answer")
            }
            console.log({correctAnswers})
            currentQuiz++;
            return answer 
        } 
    })  
}

function endOfQuiz() {
        console.log("End of quiz")
        result.innerHTML = `You scored ${correctAnswers} out of ${quizData.length}`
        question.innerHTML = ''
        choices.innerHTML = ''
        nextButton.innerText = "Reset Quiz"
        nextButton.classList.add("reload")
        const reloadBtn = document.querySelector(".reload")
        reloadBtn.addEventListener("click", () => {
            location.reload()
        })
}

function generateQuiz(quizNumber) {
        questionNumber.innerHTML = `${quizNumber + 1}. `
        questionTitle.textContent = quizData[quizNumber].question;
        choice1Text.textContent = quizData[quizNumber].a;
        choice2Text.textContent = quizData[quizNumber].b;
        choice3Text.textContent = quizData[quizNumber].c;
        choice4Text.textContent = quizData[quizNumber].d;
}

function uncheckAnswer() {
    answersEl.forEach(answerEl => {
        if(answerEl.checked) {
            answerEl.checked = false
        }
    })  
}
document.addEventListener("DOMContentLoaded", () => {

    const quiz_question = [
        {
            question: "What is the capital of Gujarat state?",
            choices: ["Jamnagar", "Rajkot", "Ahemdabad", "Gandhinagar"],
            answer: "Gandhinagar"
        },
        {
            question: "Which player scored more International centry in cricket?",
            choices: ["Viv Richards", "Sachin Tendulkar", "M S Dhoni", "Virat Kohli"],
            answer: "Sachin Tendulkar"
        },
        {
            question: "Which Player is konwn as 'Captain Cool' ? ",
            choices: ["M S Dhoni", "Ravi Shastri", "Rohit Sharma", "David Warner"],
            answer: "M S Dhoni"
        },
        {
            question: "Which Player is konwn as 'Hitman' ? ",
            choices: ["M S Dhoni", "Ravi Shastri", "Rohit Sharma", "David Warner"],
            answer: "Rohit Sharma"
        },
        {
            question: "Which Player is konwn as 'King' of cricket? ",
            choices: ["Virat Kohli", "M S Dhoni", "Rohit Sharma", "David Warner"],
            answer: "Virat Kohli"
        }
    ]

    const startBtn = document.getElementById("start-btn")
    const nextBtn = document.getElementById("next-btn")
    const restartBtn = document.getElementById("restart-btn")
    const questionText = document.getElementById("question-text")
    const choicesList = document.getElementById("choices-list")
    const resultDisplay = document.getElementById("result-container")
    const scoreDisplay = document.getElementById("score")
    const questionDisplay = document.getElementById("question-container")

    let currentIndex = 0;    
    let score = 0;
    
    startBtn.addEventListener('click', () => {
        Question()
    })
    
    nextBtn.addEventListener('click', () => {
        currentIndex = currentIndex + 1;
        if (currentIndex < quiz_question.length) {
            Question()
        } else {
            showResult()
        }
    })

    restartBtn.addEventListener("click", () => {
        currentIndex = 0
        score = 0 
        questionDisplay.classList.add("hidden")
        resultDisplay.classList.add("hidden")
        startBtn.classList.remove("hidden")
    })

    function Question() {
        questionText.classList.remove("hidden")
        choicesList.classList.remove("hidden")
        startBtn.classList.add("hidden")
        showQuestion()
    }

    function showQuestion() {
        nextBtn.classList.add("hidden")
        questionText.textContent = quiz_question[currentIndex].question
        choicesList.innerHTML = ""
        quiz_question[currentIndex].choices.forEach(choice => {
            const li = document.createElement("li")
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choicesList.appendChild(li)
        })
    }

    function selectAnswer(choice) {
        const correctAnswer = quiz_question[currentIndex].answer
        if (choice === correctAnswer) {
            score++
        }
        nextBtn.classList.remove("hidden")
    }


    function showResult() {
        questionDisplay.classList.add("hidden")
        questionText.classList.add("hidden")
        choicesList.classList.add("hidden")
        nextBtn.classList.add("hidden")
        resultDisplay.classList.remove("hidden")
        scoreDisplay.textContent = `${score} out of ${quiz_question.length}`
    }
})
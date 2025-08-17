const startBtn = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quizContainer");
const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answerBtn");
const quizResult = document.getElementById("quizResult");

const quizData = [
  {
    question: "Which is an early sign of dehydration?",
    answers: ["Dark urine", "Sweaty palms", "Rapid heartbeat"],
    correct: "Dark urine"
  },
  {
    question: "How often should teens ideally check blood pressure?",
    answers: ["Every year", "Every 5 years", "Never needed"],
    correct: "Every year"
  },
  {
    question: "Which habit helps prevent health issues?",
    answers: ["Regular exercise", "Skipping meals", "Avoiding sleep"],
    correct: "Regular exercise"
  }
];

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  quizContainer.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answerBtns.forEach((btn, i) => {
    btn.textContent = q.answers[i];
    btn.onclick = () => checkAnswer(q.answers[i]);
  });
  quizResult.textContent = "";
}

function checkAnswer(answer) {
  if (answer === quizData[currentQuestion].correct) score++;
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    quizResult.textContent = `Quiz finished! Your score: ${score} / ${quizData.length}`;
  }
}

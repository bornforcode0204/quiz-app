const questions = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey To Markup Language",
    c: "Hyper Text Makeup Language",
    d: "Hyper Text Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Hello To My Land",
    b: "Cascading Style Sheet",
    c: "Hyper Text Makeup Language",
    d: "Hyper Text Markup Language",
    ans: "ans2",
  },
  {
    question: "Q3: What is the full form of JS?",
    a: "Hello To My Land",
    b: "Hey To Markup Language",
    c: "Hyper Text Makeup Language",
    d: "Hyper Text Markup Language",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey To Markup Language",
    c: "Hyper Text Makeup Language",
    d: "Hyper Text Markup Language",
    ans: "ans4",
  },
  {
    question: "Q5: What is the full form of PHP?",
    a: "Hello To My Land",
    b: "Hey To Markup Language",
    c: "Hyper Text Makeup Language",
    d: "Hyper Text Markup Language",
    ans: "ans4",
  },
];

const question = document.querySelector(".questions");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let submit = document.querySelector("#submit");
let answers = document.querySelectorAll(".answer");
let showScore = document.querySelector("#showScore");
let scoreArea = document.querySelector(".scoreArea");
const loadQuestion = () => {
  question.textContent = questions[questionCount].question;
  option1.textContent = questions[questionCount].a;
  option2.textContent = questions[questionCount].b;
  option3.textContent = questions[questionCount].c;
  option4.textContent = questions[questionCount].d;
};

let questionCount = 0;
let score = 0;

loadQuestion();

let getCheckAnswer = () => {
  let answer;
  answers.forEach((currentAnswerElement) => {
    if (currentAnswerElement.checked) {
      answer = currentAnswerElement.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach(
    (currentAnswerElement) => (currentAnswerElement.checked = false)
  );
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  console.log(questions[questionCount].ans);
  if (checkedAnswer === questions[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < questions.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
    <h3> Your Score : ${score}/${questions.length} </h3>
    <button class="btn" onclick="location.reload()">Play Again</button>`;
    showScore.classList.remove("scoreArea");
  }
});

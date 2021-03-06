const quizData = [
  {
    question: 'How old is Pavel',
    a: '10',
    b: '17',
    c: '39',
    d: '190',
    correct: 'c',
  },
  {
    question: 'What is the most used programming language in 2021?',
    a: 'JAVA',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is he President of Russia?',
    a: 'Vladimir Putin',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'a',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Application Programing Interface',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '2020',
    b: '2019',
    c: '2018',
    d: 'none of the above',
    correct: 'd',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const submitBtn = document.getElementById('submit');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function selectAnswer() {
  let answer = undefined;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = selectAnswer();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questins.
      <button onclick='location.reload()'>Reload</button>
      `;
    }
  }
});

//quizdata is an array and contain object
const quizData = [
  {
      question: "what is the capital city of Nepal?",
      a: "Nuwakot",
      b: "bhaktapur",
      c: "Lalitpur",
      d: "Kathmandu",
      correct: "d",
  },
  {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
  },
  {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
  },
  {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
];
const quiz= document.getElementById('quiz')/*container */
const answerEls = document.querySelectorAll('.answer')/*sabai input section*/
const questionEl = document.getElementById('question')/*question wala part */
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')/*yeti sabai label */
const submitBtn = document.getElementById('submit')/*button */
let currentQuiz = 0/*current  question bhanna khojeko*/
let score = 0
loadQuiz()
function loadQuiz() {// Loads the current question and its answers into the HTML elements.
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]//yeslay select garxa question(both, question+answer ) lai 
  questionEl.innerText = currentQuizData.question//yo ma only question select garxa as per the index 
  a_text.innerText = currentQuizData.a//yeti char ota ma chai answer haru hunxa 
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {//previously selected kunai ans xa bhaney teslai desselect garna help garxa yeslay
  answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>
         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})
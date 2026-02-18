let quse = {
  q1: {
    question: "Q.1 What is the capital of India?",
    options: ["A. Mumbai", "B. New Delhi", "C. Kolkata", "D. Chennai"],
    answer: 1
  },
  q2: {
    question: "Q.2 Who is the Father of the Nation of India?",
    options: [
      "A. Jawaharlal Nehru",
      "B. Subhas Chandra Bose",
      "C. Mahatma Gandhi",
      "D. Bhagat Singh"
    ],
    answer: 2
  },
  q3: {
    question: "Q.3 From which direction does the sun rise?",
    options: ["A. North", "B. South", "C. East", "D. West"],
    answer: 2
  },
  q4: {
    question: "Q.4 How many days are there in a week?",
    options: ["A. 5", "B. 6", "C. 7", "D. 8"],
    answer: 2
  },
  q5: {
    question: "Q.5 What is the national language of India?",
    options: ["A. English", "B. Hindi", "C. Tamil", "D. Bengali"],
    answer: 1
  },
  q6: {
    question: "Q.6 Where is the Taj Mahal located?",
    options: ["A. Delhi", "B. Agra", "C. Jaipur", "D. Lucknow"],
    answer: 1
  },
  q7: {
    question: "Q.7 What is the chemical formula of water?",
    options: ["A. CO2", "B. H2O", "C. O2", "D. NaCl"],
    answer: 1
  },
  q8: {
    question: "Q.8 What is the national animal of India?",
    options: ["A. Lion", "B. Elephant", "C. Tiger", "D. Leopard"],
    answer: 2
  },
  q9: {
    question: "Q.9 What is the national bird of India?",
    options: ["A. Sparrow", "B. Peacock", "C. Parrot", "D. Eagle"],
    answer: 1
  },
  q10: {
    question: "Q.10 How many months are there in a year?",
    options: ["A. 10", "B. 11", "C. 12", "D. 13"],
    answer: 2
  }
};

//object convert to array :
let array = Object.keys(quse);
console.log(array);

let userAnswers = [];
let score = 0;
let index = 0;

//get ld and class
let submitBtn = document.querySelector("#submit");
let next = document.querySelector("#ne")
let previwe = document.querySelector("#pre")

document.querySelector(".qu").innerHTML = quse[array[index]].question

document.querySelector(".an").innerHTML = 
  quse[array[index]].options.map((opt, i) => `
  <div class="col-md-6 col-12">
      <div class="option-box" onclick="selectOption(${i})">${opt}</div>
  </div>
`).join("");

//next button
next.addEventListener("click", () => {
  index++;

  if (index === array.length) {
    index = 0;
  }
  // Question load
document.querySelector(".qu").innerHTML = quse[array[index]].question;
document.querySelector(".an").innerHTML =quse[array[index]].options.map((opt, i) => `
  <div class="col-md-6 col-12">
      <div class="option-box" onclick="selectOption(${i})">${opt}</div>
  </div>
`).join("");

  if (index === array.length - 1) {
    next.style.display = "none";       
    submitBtn.style.display = "block"; 
  } else {
    next.style.display = "block";      
    submitBtn.style.display = "none";  
  }
});

//previwe button
previwe.addEventListener("click",() =>{
    index--;
    if(index < 0){
      index = array.length - 1;;
    }
    document.querySelector(".qu").innerHTML =  quse[array[index]].question
   document.querySelector(".an").innerHTML = 
   quse[array[index]].options.map((opt, i) => `
   <div class="col-md-6 col-12">
       <div class="option-box" onclick="selectOption(${i})">${opt}</div>
   </div>
 `).join("");

})

//count score
function selectOption(i) {
  let prev = userAnswers[index];

  userAnswers[index] = i;

  document.querySelectorAll(".option-box").forEach(box => {
    box.classList.remove("active");
  });
  document.querySelectorAll(".option-box")[i].classList.add("active");

  if (i === quse[array[index]].answer) {
    if (prev !== quse[array[index]].answer) score++;  
  } else {
    if (prev === quse[array[index]].answer) score--; 
  }

  
}

//submit :
submitBtn.addEventListener("click", submitQuiz)
function submitQuiz() {
  clearInterval(interval);

  document.getElementById("finalScore").innerText =
    `Your Score: ${score} / ${array.length}`;

  const resultPopup = document.getElementById("resultPopup");
  resultPopup.style.display = "flex";

  setTimeout(() => {
    resultPopup.classList.add("show");
  }, 10);
}
// page reload
function restartQuiz() {
  location.reload(); 
}

//quiz time:
let time = document.querySelector("#time")
let totalSeconds = 60;
let interval;

let timer = () => {
  if(totalSeconds <= 0){
    clearInterval(interval);
    time.innerHTML = "00:00";
      submitQuiz()
      return;
  }
totalSeconds--
  let minutes = Math.floor(totalSeconds / 60);
  let second = totalSeconds  % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;

  time.innerHTML = `${minutes}:${second}`;
}

//popup box:
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
  if (!interval) {
    interval = setInterval(timer, 1000);
  }
});





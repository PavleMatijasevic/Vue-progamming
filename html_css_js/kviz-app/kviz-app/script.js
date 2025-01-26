const questions = [
    {
      question: "Koji je glavni grad Francuske?",
      options: ["Berlin", "Madrid", "Pariz", "Rim"],
      answer: "Pariz",
    },
    {
      question: "Koliko planeta ima Sunčev sistem?",
      options: ["8", "9", "10", "7"],
      answer: "8",
    },
    {
      question: "Ko je napisao 'Na Drini ćuprija'?",
      options: ["Meša Selimović", "Ivo Andrić", "Desanka Maksimović", "Branko Ćopić"],
      answer: "Ivo Andrić",
    },
    {
        question: "Koji je glavni grad Spanije?",
        options: ["Berlin", "Madrid", "Pariz", "Rim"],
        answer: "Madrid",
      },
      {
        question: "Koji je glavni grad Portugala?",
        options: ["Berlin", "Madrid", "Lisabon", "Rim"],
        answer: "Lisabon",
      },
      {
        question: "Ko je napisao 'Dervis i smrt'?",
        options: ["Meša Selimović", "Ivo Andrić", "Desanka Maksimović", "Branko Ćopić"],
        answer: "Meša Selimović",
      },
      {
        question: "Ko je napisao pripovetku 'Aska i Vuk'?",
        options: ["Meša Selimović", "Ivo Andrić", "Desanka Maksimović", "Branko Ćopić"],
        answer: "Ivo Andrić",
      },
      {
        question: "Koliko traje jedno fudbalsko poluvreme?",
        options: ["35 minuta", "45 minuta", "30 minuta", "60 minuta"],
        answer: "45 minuta",
      },
      {
        question: "Koliko meseci ima jedna kalendarska godina?",
        options: ["12", "8", "6", "10"],
        answer: "12",
      },
      {
        question: "Koji je glavni grad Italije?",
        options: ["Berlin", "Madrid", "Pariz", "Rim"],
        answer: "Rim",
      },
      {
        question: "Koji je glavni grad Nemacke?",
        options: ["Berlin", "Madrid", "Berlin", "Rim"],
        answer: "Berlin",
      },
    // Dodaj jos pitanja...
  ];
  
  
function getRandomQuestions(totalQuestions, count) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedQuestions = [];
  
  const startScreen = document.getElementById("start-screen");
  const questionScreen = document.getElementById("question-screen");
  const resultScreen = document.getElementById("result-screen");
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const nextBtn = document.getElementById("next-btn");
  const scoreText = document.getElementById("score-text");
  
  document.getElementById("start-btn").addEventListener("click", startQuiz);
  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
  
  function startQuiz() {
    selectedQuestions = getRandomQuestions(questions.length, 10);
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-btn");
      button.addEventListener("click", () => selectAnswer(option));
      optionsContainer.appendChild(button);
    });
  
    nextBtn.classList.add("hidden");
  }
  
  function selectAnswer(selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  });
  
  function endQuiz() {
    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreText.textContent = `Osvojili ste ${score} od ${selectedQuestions.length} poena!`;
  }
  
  function restartQuiz() {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  }
  




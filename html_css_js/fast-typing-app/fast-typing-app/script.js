const levelButtons = document.querySelectorAll(".level-button");
const resetButton = document.getElementById("reset-button");
const backToMenuButton = document.getElementById("back-to-menu");

const mainMenu = document.getElementById("main-menu");
const typingTest = document.getElementById("typing-test");
const results = document.getElementById("results");

const textToType = document.getElementById("text-to-type");
const textInput = document.getElementById("text-input");
const wpmElement = document.getElementById("wpm");
const errorsElement = document.getElementById("errors");
const timeRemainingElement = document.getElementById("time-remaining");

const finalWpmElement = document.getElementById("final-wpm");
const accuracyElement = document.getElementById("accuracy");
const feedbackMessage = document.getElementById("feedback-message");

let timer;
let timeRemaining = 30;
let errors = 0;
let wpm = 0;
let typedCharacters = 0;
let currentLevel = "easy";

const texts = {
  easy: "Ovo je jednostavan test brzog kucanja. Kucajte polako i tacno.",
  medium: "Brzina kucanja je vazna, ali i tacnost. Pokusajte da uradite oba.",
  hard: "Napredni korisnici treba da testiraju svoje granice brzine i tacnosti."
};

function startTest(level) {
  currentLevel = level;
  mainMenu.classList.add("hidden");
  typingTest.classList.remove("hidden");
  textToType.textContent = texts[level];
  textInput.value = "";
  textInput.focus();

  timeRemaining = 30;
  errors = 0;
  wpm = 0;
  typedCharacters = 0;

  updateStats();
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeRemaining--;
  timeRemainingElement.textContent = timeRemaining;

  if (timeRemaining === 0) {
    clearInterval(timer);
    showResults();
  }
}

function updateStats() {
  const typedText = textInput.value;
  typedCharacters = typedText.length;
  errors = calculateErrors(typedText, texts[currentLevel]);
  wpm = Math.round((typedCharacters / 5) / ((30 - timeRemaining) / 30));

  wpmElement.textContent = wpm || 0;
  errorsElement.textContent = errors;
}

function calculateErrors(input, reference) {
  let errorCount = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== reference[i]) {
      errorCount++;
    }
  }
  return errorCount;
}

function showResults() {
  typingTest.classList.add("hidden");
  results.classList.remove("hidden");

  const accuracy = Math.max(0, (1 - errors / texts[currentLevel].length) * 100).toFixed(2);
  finalWpmElement.textContent = wpm || 0;
  accuracyElement.textContent = accuracy;

  if (errors === 0 && accuracy === "100.00") {
    feedbackMessage.textContent = "Čestitamo! Sve je savršeno tačno!";
    feedbackMessage.style.color = "green";
  } else {
    feedbackMessage.textContent = "Dobar trud! Pokušajte ponovo za bolji rezultat.";
    feedbackMessage.style.color = "red";
  }
}

levelButtons.forEach(button => {
  button.addEventListener("click", () => {
    startTest(button.dataset.level);
  });
});

textInput.addEventListener("input", updateStats);

resetButton.addEventListener("click", () => {
  startTest(currentLevel);
});

backToMenuButton.addEventListener("click", () => {
  results.classList.add("hidden");
  mainMenu.classList.remove("hidden");
});

const finishButton = document.getElementById("finish-button");

// Funkcija za završetak testa pre vremena
function finishTest() {
  clearInterval(timer); // Zaustavlja tajmer
  const typedText = textInput.value;

  if (typedText === texts[currentLevel]) {
    feedbackMessage.textContent = "Čestitamo! Sve je savršeno tačno!";
    feedbackMessage.style.color = "green";
  } else {
    feedbackMessage.textContent = "Dobar trud! Pokušajte ponovo za bolji rezultat.";
    feedbackMessage.style.color = "red";
  }

  showResults(); // Prikazuje rezultate
}

// Event listener za "Završi test"
finishButton.addEventListener("click", finishTest);


// Define the questions with field names, prompts, and (optionally) ranges.
const questions = [
    { name: "age", prompt: "Enter your Age:" },
    { name: "sex", prompt: "Enter your Gender (1 = male, 0 = female):", range: { min: 0, max: 1 } },
    { name: "cp", prompt: "Enter Chest Pain Type (0-3):", range: { min: 0, max: 3 } },
    { name: "trestbps", prompt: "Enter Resting Blood Pressure:" },
    { name: "chol", prompt: "Enter Cholesterol:" },
    { name: "fbs", prompt: "Enter Fasting Blood Sugar > 120 mg/dl (1 = true, 0 = false):", range: { min: 0, max: 1 } },
    { name: "restecg", prompt: "Enter Resting ECG results (0-2):", range: { min: 0, max: 2 } },
    { name: "thalach", prompt: "Enter Maximum Heart Rate Achieved:" },
    { name: "exang", prompt: "Enter Exercise Induced Angina (1 = yes, 0 = no):", range: { min: 0, max: 1 } },
    { name: "oldpeak", prompt: "Enter ST Depression induced by exercise:" },
    { name: "slope", prompt: "Enter Slope of the peak exercise ST segment (0-2):", range: { min: 0, max: 2 } },
    { name: "ca", prompt: "Enter Number of major vessels colored by fluoroscopy (0-3):", range: { min: 0, max: 3 } },
    { name: "thal", prompt: "Enter Thalassemia (1 = normal, 2 = fixed defect, 3 = reversable defect):", range: { min: 1, max: 3 } }
  ];
  
  let currentQuestionIndex = 0;
  const collectedAnswers = {};
  
  // Grab DOM elements
  const welcomeScreen = document.getElementById("welcome");
  const startBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const questionPrompt = document.getElementById("question-prompt");
  const answerInput = document.getElementById("answer-input");
  const nextBtn = document.getElementById("next-btn");
  const finalFormContainer = document.getElementById("final-form-container");
  
  // Start the game when the user clicks "Click to Start"
  startBtn.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    questionContainer.style.display = "block";
    showQuestion();
  });
  
  // Allow submission using the Enter key.
  answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();  // Prevent form submission or page reload
      nextBtn.click();
    }
  });
  
  // When "Next" is clicked, validate the input and move to the next question.
  nextBtn.addEventListener("click", () => {
    const answer = answerInput.value.trim();
    // Check if the answer is empty or not a number.
    if (answer === "" || isNaN(answer)) {
      alert("Please enter a valid number.");
      return;
    }
    const currentQuestion = questions[currentQuestionIndex];
    const numericAnswer = parseFloat(answer);
  
    // If a range is specified for this question, validate the numeric range.
    if (currentQuestion.range) {
      if (numericAnswer < currentQuestion.range.min || numericAnswer > currentQuestion.range.max) {
        alert(`Please enter a valid number between ${currentQuestion.range.min} and ${currentQuestion.range.max}.`);
        return;
      }
    }
    
    // Save the valid answer for the current question.
    collectedAnswers[currentQuestion.name] = answer;
    answerInput.value = "";
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // All questions answered. Populate the hidden form inputs.
      questions.forEach(q => {
        document.getElementById("form-" + q.name).value = collectedAnswers[q.name];
      });
      questionContainer.style.display = "none";
      finalFormContainer.style.display = "block";
    }
  });
  
  // Function to update the question prompt.
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionPrompt.textContent = currentQuestion.prompt;
  }
  
const correctMessages = [
    "Perfect!",
    "You are amazing!",
    "Great job!",
    "Nice!",
  ];
  
  const incorrectMessages = [
    "Incorrect, try one more time.",
    "Wrong. One more try !",
    "You are close! Do not give up yet.",
    "Hey ~ Try even harder!",
  ];
  
  function generateRandomNumbers() {
    let dividend, divisor;
  
    do {
      dividend = Math.floor(Math.random() * 9) + 1;
      divisor = Math.floor(Math.random() * 9) + 1;
    } while (divisor >= dividend);
  
    document.getElementById("question").textContent = `Question: Calculate ${dividend} divided by ${divisor}?`;
  
    document.getElementById("quotient").value = "";
    document.getElementById("remainder").value = "";
  }
  
  function checkAnswer() {
    const quotient = parseInt(document.getElementById("quotient").value);
    const remainder = parseInt(document.getElementById("remainder").value);
  
    const questionText = document.getElementById("question").textContent;
    const [dividend, divisor] = questionText.match(/\d+/g).map(Number);
  
    const expectedQuotient = Math.floor(dividend / divisor);
    const expectedRemainder = dividend % divisor;
  
    if (quotient === expectedQuotient && remainder === expectedRemainder) {
      const randomIndex = Math.floor(Math.random() * correctMessages.length);
      alert(correctMessages[randomIndex]);
    } else {
      const randomIndex = Math.floor(Math.random() * incorrectMessages.length);
      alert(incorrectMessages[randomIndex]);
    }
  }
  
  document.getElementById("submitButton").addEventListener("click", checkAnswer);
  document.getElementById("newQuestionButton").addEventListener("click", generateRandomNumbers);
  
  generateRandomNumbers();
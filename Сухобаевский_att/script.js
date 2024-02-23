function getAnswer(){
  const answers = ["Определенно - да!", "Определенно - нет", "Скорее да, чем нет", "Скорее нет, чем да", "Возможно", "50/50", "Есть шансы", "100%", "Нет шансов", "Не уверен", "Глупый вопрос"];
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  
  const circleAnswers = document.getElementById('circle-answers');
  circleAnswers.innerText = randomAnswer;
  
  // Центрируем текст внутри circle-answers
  circleAnswers.style.lineHeight = `${circleAnswers.offsetHeight}px`;
}
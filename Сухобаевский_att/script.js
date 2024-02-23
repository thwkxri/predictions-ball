function getAnswer() {
  const answers = ["Определенно - да!", "Определенно - нет", "Скорее да, чем нет", "Скорее нет, чем да", "Возможно", "50/50", "Есть шансы", "100%", "Нет шансов", "Не уверен", "Глупый вопрос"];

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  const circleAnswers = document.getElementById('circle-answers');
  circleAnswers.innerText = randomAnswer;

  // Удаляем анимацию, если она уже есть
  circleAnswers.style.animation = 'none';
  void circleAnswers.offsetWidth; // Принудительный рефлоу, чтобы стили применились

  // Задаем новую анимацию для вращения
  circleAnswers.style.animation = 'rotate 3s cubic-bezier(0.32, 1.06, 0.68, 1)';

  // Устанавливаем текстовое содержимое шара
  circleAnswers.innerText = randomAnswer;
}
// script.js
function checkAnswer() {
    const correctAnswer = "-2768039324255705140";
    const userAnswer = document.getElementById("answer").value;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "Дұрыс! Сіз санды таптыңыз!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = "Қате! Қайтадан көріңіз.";
        document.getElementById("result").style.color = "red";
    }
}
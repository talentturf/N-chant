let score = 0;
let timeLeft = 30;
let gameInterval;

function login() {
  let mobile = document.getElementById("mobile").value;

  if (mobile.length === 10) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
  } else {
    alert("Enter valid 10 digit number");
  }
}

function startGame(mode) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  score = 0;
  timeLeft = 30;
  document.getElementById("score").innerText = score;
  document.getElementById("time").innerText = timeLeft;

  gameInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (mode === "random") {
      createBubble();
    }

    if (mode === "speed") {
      createBubble();
      createBubble();
    }

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      alert("Game Over! Score: " + score);
      location.reload();
    }

  }, 1000);
}

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  bubble.style.top = Math.random() * 350 + "px";
  bubble.style.left = Math.random() * 80 + "%";

  bubble.onclick = function () {
    score++;
    document.getElementById("score").innerText = score;
    bubble.remove();
  };

  document.getElementById("gameArea").appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 2000);
}

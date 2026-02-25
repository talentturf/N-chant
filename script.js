let score = 0;
let timeLeft = 30;
let gameInterval;
let highScore = localStorage.getItem("highScore") || 0;

function login() {
  let mobile = document.getElementById("mobile").value;

  if (mobile.length === 10 && !isNaN(mobile)) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
  } else {
    alert("Enter valid 10 digit mobile number");
  }
}

function startGame(mode) {

  document.body.style.overflow = "hidden"; // Disable scroll

  document.getElementById("menu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  document.getElementById("gameArea").innerHTML = "";

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

      document.body.style.overflow = "auto"; // Enable scroll back

      if (score > highScore) {
        localStorage.setItem("highScore", score);
        highScore = score;
      }

      alert(
        "Game Over!\n\nScore: " +
        score +
        "\nHigh Score: " +
        highScore
      );

      location.reload();
    }

  }, 1000);
}

function createBubble() {

  const gameArea = document.getElementById("gameArea");
  const bubble = document.createElement("div");

  bubble.classList.add("bubble");

  // Random size between 40px and 80px
  let size = Math.random() * 40 + 40;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.background = "pink";

  // Get dynamic area size (mobile responsive)
  let areaWidth = gameArea.clientWidth;
  let areaHeight = gameArea.clientHeight;

  bubble.style.left = Math.random() * (areaWidth - size) + "px";
  bubble.style.top = Math.random() * (areaHeight - size) + "px";

  bubble.onclick = function () {
    score += 10;
    document.getElementById("score").innerText = score;
    bubble.remove();

    // Optional vibration (mobile only)
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  gameArea.appendChild(bubble);

  // Remove bubble after 2 seconds
  setTimeout(() => {
    bubble.remove();
  }, 2000);
}

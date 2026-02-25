function createBubble() {
  const gameArea = document.getElementById("gameArea");
  const bubble = document.createElement("div");

  bubble.classList.add("bubble");

  let size = Math.random() * 40 + 40; // 40–80px
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.background = "pink";

  // Get game area width dynamically
  let areaWidth = gameArea.clientWidth;
  let areaHeight = gameArea.clientHeight;

  bubble.style.left = Math.random() * (areaWidth - size) + "px";
  bubble.style.top = Math.random() * (areaHeight - size) + "px";

  bubble.onclick = function () {
    score += 10;
    document.getElementById("score").innerText = score;
    bubble.remove();
  };

  gameArea.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 2000);
}

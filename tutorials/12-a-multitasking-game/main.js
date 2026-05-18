const thirstMeter = document.getElementById("thirst-meter");
const eyesMeter = document.getElementById("eyes-meter");
const tiredMeter = document.getElementById("tired-meter");
const boredMeter = document.getElementById("bored-meter");
const workloadMeter = document.getElementById("workload-meter");

const gameOverDialog = document.getElementById("game-over-dialog");
const survivalTimeDisplay = document.getElementById("survival-time-display");
const restartGameBtn = document.getElementById("restart-game-btn");
const startScreen = document.getElementById("start-screen");
const startGameBtn = document.getElementById("start-game-btn");

const bedContainer = document.querySelector(".bed-container");
const windowElement = document.querySelector(".window");
const waterDialog = document.querySelector(".water-dialog");
const openWaterBtn = document.getElementById("drink-dialog");
const centerTiles = document.querySelectorAll(".center-tile");
const phoneModal = document.getElementById("phone-dialog");
const phoneElement = document.querySelector(".phone");
const posts = document.querySelectorAll(".clickable-post");
const computerModal = document.getElementById("computer-dialog");
const computerElement = document.querySelector(".computer");
const workInput = document.getElementById("work-input");
const workDisplay = document.getElementById("work-number-display");
const workError = document.getElementById("work-error");

let gameTimer;
let gameLoopInterval;
let gameIsOver;
let startTime;
let minTiredLevel;
let isHoveringWindow;
let workCopyNumber;

// WebDevSimplified's Close modal function
function registerBackdropClose(dialog) {
  dialog.addEventListener("click", (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
}

// ---------- Tired level ----------
bedContainer.addEventListener("click", () => {
  tiredMeter.value = minTiredLevel;
});

// ---------- Eye strain ----------
windowElement.addEventListener("mouseenter", () => (isHoveringWindow = true));
windowElement.addEventListener("mouseleave", () => (isHoveringWindow = false));

windowElement.addEventListener("touchstart", () => {
  isHoveringWindow = true;
});
windowElement.addEventListener("touchend", () => {
  isHoveringWindow = false;
});

// ---------- Thirst ----------
function startGridGame() {
  gameTimer = setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * centerTiles.length);
    if (centerTiles[randomIndex]) {
      centerTiles[randomIndex].classList.add("target");
    }
  }, 2000);
}

centerTiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (!tile.classList.contains("target")) return;
    tile.classList.remove("target");
    thirstMeter.value = Math.max(0, thirstMeter.value - 20);
    startGridGame();
  });
});

openWaterBtn.addEventListener("click", (e) => {
  if (!gameIsOver) waterDialog.showModal();
});

registerBackdropClose(waterDialog);

// ---------- Boredom ----------
posts.forEach((post) => {
  post.addEventListener("click", () => {
    boredMeter.value = Math.max(0, boredMeter.value - 8);

    // Increase permanent tired level floor and update it
    minTiredLevel = Math.min(tiredMeter.max, minTiredLevel + 4);

    if (tiredMeter.value < minTiredLevel) {
      tiredMeter.value = minTiredLevel;
    }
  });
});

phoneElement.addEventListener("click", (e) => {
  phoneModal.showModal();
});

registerBackdropClose(phoneModal);

// ---------- Workload ----------
function generateWorkTask() {
  workCopyNumber = Math.floor(10000 + Math.random() * 90000);
  workDisplay.textContent = workCopyNumber;
  workInput.value = "";
}

workInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (parseInt(workInput.value) === workCopyNumber) {
      workError.style.display = "none";
      workloadMeter.value = Math.max(0, workloadMeter.value - 25);
      generateWorkTask();
    } else {
      workError.style.display = "block";
    }
  }
});

computerElement.addEventListener("click", (e) => {
  computerModal.showModal();
  generateWorkTask();
});

registerBackdropClose(computerModal);

// Game: General
function startGameLoop() {
  gameIsOver = false;
  startTime = Date.now();
  if (gameLoopInterval) clearInterval(gameLoopInterval);

  gameLoopInterval = setInterval(() => {
    // Tired level  multipliers
    tiredMeter.value += 0.2;
    const tiredMultiplier = 1 + tiredMeter.value / 50;

    if (isHoveringWindow) {
      eyesMeter.value = Math.max(0, eyesMeter.value - 2.5);
    } else {
      eyesMeter.value += 0.6 * tiredMultiplier;
    }

    boredMeter.value += 0.3 * tiredMultiplier;
    workloadMeter.value += 0.15 * tiredMultiplier;

    if (document.querySelector(".center-tile.target")) {
      thirstMeter.value += 0.8 * tiredMultiplier;
    }

    // Game loss reason
    if (tiredMeter.value >= tiredMeter.max)
      return triggerGameOver("Tired Level");
    if (thirstMeter.value >= thirstMeter.max)
      return triggerGameOver("Eye Strain");
    if (eyesMeter.value >= eyesMeter.max) return triggerGameOver('"Thirst"');
    if (boredMeter.value >= boredMeter.max) return triggerGameOver("Boredom");
    if (workloadMeter.value >= workloadMeter.max)
      return triggerGameOver("Workload");
  }, 200);
}

function triggerGameOver(reason) {
  gameIsOver = true;
  clearInterval(gameLoopInterval);

  [waterDialog, phoneModal, computerModal, startScreen].forEach((m) =>
    m.close(),
  );

  const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  const timeStr = m > 0 ? `${m}m ${s}s` : `${s} seconds`;

  survivalTimeDisplay.textContent = `You lasted ${timeStr} before losing to ${reason}!`;
  gameOverDialog.showModal();
}

function restartGame() {
  // Reset water tiles
  centerTiles.forEach((t) => t.classList.remove("target"));

  // Reset meters
  minTiredLevel = 0;
  [tiredMeter, boredMeter, workloadMeter, thirstMeter, eyesMeter].forEach(
    (m) => (m.value = 0),
  );

  startGameLoop();
  startGridGame();
}

// Startup and reset
startScreen.showModal();

startGameBtn.addEventListener("click", () => {
  startScreen.close();
  restartGame();
});

restartGameBtn.addEventListener("click", () => {
  gameOverDialog.close();
  restartGame();
});

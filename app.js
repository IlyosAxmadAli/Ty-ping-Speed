const textInput = document.querySelector("input");
const word = document.querySelector(".word");
const timer = document.querySelector(".timer");
const scor = document.querySelector(".score");
const select = document.querySelector("#select");
const warning = document.querySelector(".warning");
const newGame = document.querySelector("#new-game");
const stopGame = document.querySelector("#stop-game");
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");

textInput.disabled = true;

let randomWord;
let time = 10;
let score = 0;

function generateRandomWord() {
  let randomNumber = Math.floor(Math.random() * words.length);
  word.textContent = words[randomNumber];
  randomWord = words[randomNumber];
}
generateRandomWord();

function result() {
  textInput.addEventListener("input", () => {
    if (textInput.value == randomWord) {
      generateRandomWord();
      textInput.value = "";
      score++;
      scor.textContent = `${score}`;
      if (select.value == "ease") {
        time += 6;
      } else if (select.value == "norm") {
        time += 4;
      } else {
        time += 2;
      }
    } else {
      score--;
    }
  });
}
result();

select.addEventListener("change", () => {
  textInput.disabled = false;
  warning.textContent = "";
  setInterval(() => {
    if (time !== 0) {
      time--;
      timer.textContent = `00:0${time}`;
    }
    if (time == 0) {
      textInput.disabled = true;
      textInput.value = "";
      modal.style.display = "block";
    }
  }, 1000);
});

newGame.addEventListener("click", () => {
  textInput.disabled = false;
  time = 10;
  textInput.value = "";
  generateRandomWord();
});

btnClose.addEventListener("click", (e) => {
  modal.style.display = "none";
  history.go(0);
});

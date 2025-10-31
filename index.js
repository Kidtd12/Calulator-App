/*const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput.replace("%", "/100"));
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});  */







const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

const funnyMessages = [
  "Here’s your number genius 😎",
  "Math mode activated 🚀",
  "Calculating... with style 💃",
  "That’s what she calculated 😂",
  "Whoa! Big brain moment 🧠",
  "Math is love ❤️ Math is life!"
];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === "=") {
      if (currentInput.includes("/0")) {
        display.value = "Bruh 🤨 Stop breaking math!";
        setTimeout(() => display.value = "", 2000);
        return;
      }
      try {
        const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        display.value = randomMsg;
        setTimeout(() => {
          currentInput = eval(currentInput.replace("%", "/100"));
          display.value = currentInput;
        }, 1200);
      } catch {
        display.value = "Error! 😵";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});















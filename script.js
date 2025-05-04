const buttonValues = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "del",
  "0",
  ".",
  "=",
];

const operatorsSymbols = ["/", "x", "-", "+", "="];
const specialSymbols = ["AC", "+/-", "%", "del"];
let firstNumber = null;
let secondNumber = null;
let operator = null;

//Populate calculator with buttons
buttonValues.forEach((buttonValue) => {
  let value = buttonValue;
  let button = document.createElement("button");
  button.innerText = value;

  if (operatorsSymbols.includes(value)) {
    button.style.color = "#ffba00";
  }

  if (specialSymbols.includes(value)) {
    button.style.color = "#00bba7";
  }

  if (value === "del") {
    button.style.color = "#ff6467";
  }

  document.querySelector(".buttons").appendChild(button);
});

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
screen.value = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (operatorsSymbols.includes(value)) {
    } else if (specialSymbols.includes(value)) {
      specialFunctions();
    } else {
      display();
    }

    function specialFunctions() {
      if (value === "AC") {
        screen.value = "0";
        firstNumber = null;
        secondNumber = null;
        operator = null;
      } else if (value === "+/-") {
        console.log(value);
        if (screen.value === "0") {
          screen.value = screen.value;
        } else if (screen.value.includes("-")) {
          console.log("trigger");
          screen.value = screen.value.slice(0, -1);
        } else {
          console.log("Add minus");
          screen.value += "-";
        }
      } else if (value === "%") {
        screen.value = Number(screen.value) / 100;
      } else if (value === "del") {
        screen.value = screen.value.slice(0, -1);
      }
    }

    function display() {
      if (value === ".") {
        if (screen.value.includes(value)) {
          screen.value = screen.value;
        } else {
          screen.value += value;
        }
      } else {
        {
          if (
            (value === "0" && screen.value === "0") ||
            screen.value.length > 6
          ) {
            screen.value = screen.value;
          } else {
            if (screen.value === "0") screen.value = "";
            screen.value += value;
          }
        }
      }
    }
  });
});

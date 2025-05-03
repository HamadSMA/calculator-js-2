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
const specialSymbols = ["AC", "+/-", "%"];

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

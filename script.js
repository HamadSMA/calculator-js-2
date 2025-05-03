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

  document.querySelector(".buttons").appendChild(button);
});

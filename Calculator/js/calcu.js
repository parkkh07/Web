const button = document.querySelectorAll("#nb");
const AC = document.querySelector("#AC");
const input = document.querySelector("input");
const op = document.querySelectorAll("#op");
const res = document.querySelector("#go");
const PMC = document.querySelector("#pmc");

let SUM = 0;
let FIRST_VALUE = 0;
let SECOND_VALUE = 0;
let OP_CLIKED = false;
let operation = "";
let reset = true;

input.value = 0;
input.style.fontSize = "48px";

function showValue(event) {
  let value = event.target.innerText;
  if (event.type === "keydown") {
    value = event.key;
  }
  if (reset === true) {
    input.value = value;
    input.style.fontSize = "48px";
    reset = false;
  } else {
    if (input.style.fontSize > "40px") {
      if (input.value.length < 9 && input.value !== "0") {
        input.value += value;
      }
    } else {
      if (input.value.length < 15 && input.value !== "0") {
        input.value += value;
      }
    }
  }
}

function opClicked(event) {
  if (OP_CLIKED) {
    operation = event.target.innerText;
    if (event.type === "keydown") {
      operation = event.key;
      if (operation === "/") {
        operation = "÷";
      } else if (operation === "*") {
        operation = "×";
      }
    }
    input.value = "";
    OP_CLIKED = true;
  } else {
    operation = event.target.innerText;
    if (event.type === "keydown") {
      operation = event.key;
      if (operation === "/") {
        operation = "÷";
      } else if (operation === "*") {
        operation = "×";
      }
    }
    FIRST_VALUE = parseInt(input.value);
    input.value = "";
    OP_CLIKED = true;
  }
}

function RESULT() {
  SECOND_VALUE = parseInt(input.value);
  if (OP_CLIKED) {
    switch (operation) {
      case "+":
        SUM = FIRST_VALUE + SECOND_VALUE;
        break;
      case "-":
        SUM = FIRST_VALUE - SECOND_VALUE;
        break;
      case "×":
        SUM = FIRST_VALUE * SECOND_VALUE;
        break;
      case "÷":
        SUM = FIRST_VALUE / SECOND_VALUE;
        break;
    }
  }
  if (isNaN(SUM)) {
    SUM = "ERROR";
  } else if (SUM === Infinity) {
    SUM = "ERROR";
  }

  if (SUM.toString().length > 10 && SUM.toString().length <= 15) {
    input.style.fontSize = "30px";
  } else if (SUM.toString().length > 15) {
    input.style.fontSize = "24px";
  }
  console.log(FIRST_VALUE, SECOND_VALUE, SUM);
  input.value = SUM;
  console.log(input.value);
  OP_CLIKED = false;
  operation = "";
  reset = true;
}

button.forEach(function (button) {
  button.addEventListener("click", showValue);
});

AC.addEventListener("click", function () {
  input.value = "0";
  input.style.fontSize = "48px";
  SUM = 0;
  FIRST_VALUE = 0;
  SECOND_VALUE = 0;

  OP_CLIKED = false;
  operation = "";
  reset = true;
});

op.forEach(function (op) {
  op.addEventListener("click", opClicked);
});

res.addEventListener("click", RESULT);

pmc.addEventListener("click", function () {
  if (input.value !== "0") {
    input.value = parseInt(input.value) * -1;
  }
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    key === "0" ||
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9"
  ) {
    showValue(event);
  }
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    opClicked(event);
  }
  if (key === "Enter") {
    res.click();
  }
  if (key === "Backspace") {
    AC.click();
  }
});

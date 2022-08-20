function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

function getPin() {
  const pin = generatePin();
  const pinString = pin + "";

  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

document.getElementById("btn-generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const pinShow = document.getElementById("pin-show");
  pinShow.value = pin;
});

document.getElementById("calculator").addEventListener("click", function (event) {
  const getNumber = event.target.innerText;

  const typeNumber = document.getElementById("typed-number");
  const previousNumber = typeNumber.value;

  if (isNaN(getNumber)) {
    if (getNumber === "C") {
      typeNumber.value = "";
    } else if (getNumber === "<") {
      const digit = previousNumber.split("");
      digit.pop();
      const remainDigit = digit.join("");
      typeNumber.value = remainDigit;
    }
  } else {
    const newNumber = previousNumber + getNumber;
    typeNumber.value = newNumber;
  }
});

document.getElementById("verify-pin").addEventListener("click", function () {
  const pinElement = document.getElementById("pin-show");
  const pin = pinElement.value;
  const typedNumberElement = document.getElementById("typed-number");
  const typedNumber = typedNumberElement.value;

  pinSuccess = document.getElementById("pin-success");
  pinFail = document.getElementById("pin-fail");

  if (typedNumber === pin) {
    pinSuccess.style.display = "block";
    pinFail.style.display = "none";
  } else {
    pinSuccess.style.display = "none";
    pinFail.style.display = "block";
  }
});

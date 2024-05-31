window.onload = function () {
};

function cardNumber() {
  let number = Math.floor((Math.random() * 12) + 1)
  if (number = "11") {
    number = "J";
  }
  else if (number = "12") {

    number = "Q";
  }
  else if (number = "13") {

    number = "K";
  }
  else if (number = "1") {

    number = "A"
  }
  return number;
}


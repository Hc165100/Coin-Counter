const resultWin = document.getElementById("coinResult");
const pennyWeight = document.getElementById("pennyWeight");
const nickleWeight = document.getElementById("nickleWeight");
const dimeWeight = document.getElementById("dimeWeight");
const quarterWeight = document.getElementById("quarterWeight");

function coinCalcGram() {
  let pennyNumber = Math.floor(pennyWeight.value / 2.5);
  let nickleNumber = Math.floor(nickleWeight.value / 5);
  let dimeNumber = Math.floor(dimeWeight.value / 2.268);
  let quarterNumber = Math.floor(quarterWeight.value / 5.67);

  resultWin.innerHTML =
    pennyNumber +
    " pennies. You need " +
    Math.ceil(pennyNumber / 50) +
    " wrappers. <br />" +
    nickleNumber +
    " nickles. You need " +
    Math.ceil(nickleNumber / 40) +
    " wrappers. <br />" +
    dimeNumber +
    " dimes. You need " +
    Math.ceil(dimeNumber / 50) +
    " wrappers. <br />" +
    quarterNumber +
    " quarters. You need " +
    Math.ceil(quarterNumber / 40) +
    " wrappers. <br /> Your total is approximately $" +
    (
      pennyNumber * 0.01 +
      nickleNumber * 0.05 +
      dimeNumber * 0.1 +
      quarterNumber * 0.25
    ).toFixed(2);
}

function coinCalcPound() {
  let pennyNumber = Math.floor(pennyWeight.value / 0.006);
  let nickleNumber = Math.floor(nickleWeight.value / 0.011);
  let dimeNumber = Math.floor(dimeWeight.value / 0.005);
  let quarterNumber = Math.floor(quarterWeight.value / 0.013);

  resultWin.innerHTML =
    pennyNumber +
    " pennies. You need " +
    Math.ceil(pennyNumber / 50) +
    " wrappers. <br />" +
    nickleNumber +
    " nickles. You need " +
    Math.ceil(nickleNumber / 40) +
    " wrappers. <br />" +
    dimeNumber +
    " dimes. You need " +
    Math.ceil(dimeNumber / 50) +
    " wrappers. <br />" +
    quarterNumber +
    " quarters. You need " +
    Math.ceil(quarterNumber / 40) +
    " wrappers. <br /> Your total is approximately $" +
    (
      pennyNumber * 0.01 +
      nickleNumber * 0.05 +
      dimeNumber * 0.1 +
      quarterNumber * 0.25
    ).toFixed(2);
}

function allClear() {
  pennyWeight.value = "";
  nickleWeight.value = "";
  dimeWeight.value = "";
  quarterWeight.value = "";
  resultWin.innerHTML = "";
}

let calcBtnGram = document.getElementById("calcBtnGram");
calcBtnGram.addEventListener("click", coinCalcGram);

let calcBtnPound = document.getElementById("calcBtnPound");
calcBtnPound.addEventListener("click", coinCalcPound);

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", allClear);

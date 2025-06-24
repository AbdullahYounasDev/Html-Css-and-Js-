let str = "0";
let currentOperand = document.getElementById("current-operand");
let preOprerand = document.getElementById("pre-operand");
let iamNo = document.getElementsByClassName("iAmNo");
let iamOperator = document.getElementsByClassName("iamOperator");
let operator = document.getElementById("operator");
let result = document.getElementById("result");
let dEl = document.getElementById("dEl");
let ac = document.getElementById("ac");

for (let i = 0; i < iamNo.length; i++) {
  currentOperand.innerText = "";
  iamNo[i].onclick = function (e) {
    currentOperand.innerText += e.target.innerText;
  };
}
for (let i = 0; i < iamOperator.length; i++) {
  iamOperator[i].onclick = function (e) {
    if (currentOperand.innerText !== "" || preOprerand.innerText !== "") {
      operator.style.display = "inline";
    }
    operator.innerText = e.target.innerText;
    preOprerand.innerText = currentOperand.innerText;
    currentOperand.innerText = "";
  };
}
result.onclick = function () {
  if (operator.innerText == "+") {
    currentOperand.innerText =
      +currentOperand.innerText + +preOprerand.innerText;
  } else if (operator.innerText == "-") {
    currentOperand.innerText =
      +preOprerand.innerText - +currentOperand.innerText;
  } else if (operator.innerText == "/") {
    currentOperand.innerText =
      +preOprerand.innerText / +currentOperand.innerText;
  } else if (operator.innerText == "*") {
    currentOperand.innerText =
      +currentOperand.innerText * +preOprerand.innerText;
  }
};

dEl.onclick = function () {
  currentOperand.innerText = "";
  preOprerand.innerText = "";
  operator.innerText = "";
};

ac.onclick = function () {
  currentOperand.innerText = currentOperand.innerText.slice(0, -1);
};

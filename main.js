let resetBtn = document.getElementById("reset");
let result = document.getElementById("result");
let current = document.getElementById("current");
let BtnS = document.querySelectorAll(".btn");
let OperatorBtnS = document.querySelector(".operators");
let equalOp = document.querySelector(".equal");

currentOperation();
Reset();
getResults();
keyBoard();

function currentOperation() {
  BtnS.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(function () {
        btn.classList.remove("clicked");
      }, 100);

      current.innerText += btn.innerText;
      if (result.value != "") {
        current.innerText = result.value += btn.innerText;
        result.value = "";
      }
    });
  });
}

function Reset() {
  resetBtn.addEventListener("click", () => {
    resetBtn.classList.add("clicked");
    setTimeout(function () {
      resetBtn.classList.remove("clicked");
    }, 100);

    result.value = "";
    current.innerText = "";
  });
}

function getResults() {
  equalOp.addEventListener("click", () => {
    equalOp.classList.add("clicked");
    setTimeout(function () {
      equalOp.classList.remove("clicked");
    }, 100);

    result.value = eval(current.innerText);
    if (result.value.includes(".")) {
      result.value = eval(current.innerText).toFixed(2);
    }
    if (current.innerText === "") {
      result.value = "";
    }
    result.style.paddingTop = "20px";
  });
}

function keyBoard() {
  document.addEventListener("keyup", (e) => {
    let key = e.keyCode;
    let validkeys = [
      48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 107, 109, 106, 111, 190, 96, 97,
      98, 99, 100, 101, 102, 103, 104, 105,
    ];

    if (~validkeys.indexOf(key)) {
      key === 48
        ? (key = 0)
        : key === 49
        ? (key = 1)
        : key === 50
        ? (key = 2)
        : key === 51
        ? (key = 3)
        : key === 52
        ? (key = 4)
        : key === 53
        ? (key = 5)
        : key === 54
        ? (key = 6)
        : key === 55
        ? (key = 7)
        : key === 56
        ? (key = 8)
        : key === 57
        ? (key = 9)
        : key === 107
        ? (key = "+")
        : key === 109
        ? (key = "-")
        : key === 106
        ? (key = "*")
        : key === 111
        ? (key = "/")
        : key === 190
        ? (key = ".")
        : key === 96
        ? (key = "0")
        : key === 97
        ? (key = "1")
        : key === 98
        ? (key = "2")
        : key === 99
        ? (key = "3")
        : key === 100
        ? (key = "4")
        : key === 101
        ? (key = "5")
        : key === 102
        ? (key = "6")
        : key === 103
        ? (key = "7")
        : key === 104
        ? (key = "8")
        : key === 105
        ? (key = "9")
        : "";
      current.innerText += key;
      if (result.value != "") {
        current.innerText = result.value += key;
        result.value = "";
      }
    }
    if (key === 13) {
      result.value = eval(current.innerText);
      if (result.value.includes(".")) {
        result.value = eval(current.innerText).toFixed(2);
      }
      if (current.innerText === "") {
        result.value = "";
      }
      result.style.paddingTop = "20px";
    }

    if (key === 67) {
      result.value = "";
      current.innerText = "";
    }
  });
}

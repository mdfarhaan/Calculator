//Elements
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const num = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".op");
const equalto = document.querySelector(".equal");
const color = document.querySelector("html").style; // css variable
const dropDown = document.querySelector(".dropdown");
const btn = document.querySelector("btn");

let solve = "";

function parse(str) {
  return Function(`'use strict'; return (${str})`)();
}

clearBtn.addEventListener("click", () => {
  input.innerText = "";
  result.innerText = "";
  solve = "";
});

delBtn.addEventListener("click", () => {
  input.innerText = input.innerText.slice(0, -1);
  solve = solve.slice(0, -1);
});

equalto.addEventListener("click", () => {
  if (result.innerText == "") {
    try {
      let a = solve.replace("×", "*");
      let exp = a.replace("÷", "/");
      let answer = parse(exp);
      result.innerText = answer;
      solve = "";
    } catch {
      result.innerText = "Invalid expression";
    }
  }
});

num.forEach((value) => {
  value.addEventListener("click", () => {
    result.innerText = "";
    solve += value.innerText;
    input.innerText = solve;
  });
});

operator.forEach((value) => {
  value.addEventListener("click", () => {
    if (solve != "") {
      let char = solve.slice(-1);
      if (char % 1 === 0) {
        solve += value.innerText;
        input.innerText = solve;
      }
    }
  });
});

//Themes
const themes = {
  //          Display | Body | Button
  tomato: ["#ff6347", "#FFFFFF", "#FFFFFF"],
  green: ["#45E6B8", "#FFFFFF", "#FFFFFF"],
  violet: ["#97ABF2", "#FFFFFF", "#97ABF2"],
  blue: ["#5CA2DB", "#6BBFFF", "#FFFFFF"],
  sky: ["#E65353", "#35478C", "#FFFFFF"],
  pink: ["#FFFFFF", "#FFFFFF", "#F15278"],
};

dropDown.addEventListener("change", () => {
  color.setProperty("--display-color", themes[dropDown.value][0]);
  color.setProperty("--body-color", themes[dropDown.value][1]);
  color.setProperty("--btn-color", themes[dropDown.value][2]);
});

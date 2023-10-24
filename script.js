"use strict";
import { paragraph } from "./paragraphs.js";

// DOM selectors
const texts = paragraph;
const mainBox = document.querySelector(".content");
const inputText = document.querySelector("#writeText");
const allTexts = document.querySelector(".texts");
const timer = document.querySelector("#timer");
const resultContent = document.querySelector(".resuslts-box");
const resultContentPic = document.querySelector(".resluts-pic-box");
const resetGame = document.querySelector(".reset-game")
let currentIndex = 0;
let correctInc = 0;
let mistakeInc = 0;

// Focusing input

(() => {
  inputText.focus();
  mainBox.addEventListener("click", () => {
    inputText.focus();
  });
})();
// Create texts to webpage
const randomText = Math.floor(Math.random() * texts.length);
texts[randomText].split("").forEach((t) => {
  for (let i = 0; i < t.length; i++) {
    const spanEl = document.createElement("span");
    spanEl.innerHTML += `${t[i]}`;
    allTexts.appendChild(spanEl);
  }
  
});
const activeEl = document.querySelectorAll(".texts span")[currentIndex];
  activeEl.classList.add("active")  
// Timer
const startMinutes = 1;
let time = startMinutes * 60;
let intervalid;
function updateTime() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (time === 0) {
    clearInterval(intervalid);
    mainBox.classList.add("unvisible");
    resultContent.classList.add("visible");
  }
  timer.innerHTML = `0${minutes}:${seconds}`;
  time--;
}

inputText.addEventListener("keydown", (e) => {
  const selectorEl = document.querySelectorAll(".texts span")[currentIndex];
  function createClass() {
    if (e.key === texts[randomText][currentIndex]) {
      selectorEl.classList.add("correct");
    } else {
      selectorEl.classList.add("wrong");
    }
    currentIndex++;
  }
  function removeClass() {
    if (currentIndex > 0) {
      currentIndex--;
      const removerEl = document.querySelectorAll(".texts span")[currentIndex];
      removerEl.classList.remove("correct", "wrong");
    }
  }
  function checkCorrectClasses() {
    const checkerElCorrects =
      document.querySelectorAll(".texts span")[currentIndex - 1];
    const speedOfTyping = document.querySelector("#test-speed");

    if (checkerElCorrects.classList.contains("correct")) {
      correctInc++;
      speedOfTyping.innerHTML = correctInc;
    } else if(correctInc === 0){
      speedOfTyping.innerHTML = "0";
    }
  }
  function checkMistakeClasses() {
    const checkerElMistakes =
      document.querySelectorAll(".texts span")[currentIndex - 1];
    const accuarcyOfTyping = document.querySelector("#test-accuarcy");
    if (checkerElMistakes.classList.contains("wrong")) {
      mistakeInc++;
      switch (true) {
        case mistakeInc === 0:
          accuarcyOfTyping.innerHTML = "100%";
          break;
        case mistakeInc == 1 || mistakeInc == 2:
          accuarcyOfTyping.innerHTML = "98%";
          break;
        case mistakeInc >= 3 && mistakeInc <= 6:
          accuarcyOfTyping.innerHTML = "94%";
          break;
        case mistakeInc >= 7 && mistakeInc <= 10:
          accuarcyOfTyping.innerHTML = "88%";
          break;
        case mistakeInc >= 11 && mistakeInc <= 14:
          accuarcyOfTyping.innerHTML = "83%";
          break;
        case mistakeInc >= 15 && mistakeInc <= 20:
          accuarcyOfTyping.innerHTML = "75%";
          break;
        case mistakeInc >= 21 && mistakeInc <= 25:
          accuarcyOfTyping.innerHTML = "66%";
          break;
        case mistakeInc >= 26 && mistakeInc <= 30:
          accuarcyOfTyping.innerHTML = "52%";
          break;
        case mistakeInc >= 31 && mistakeInc <= 40:
          accuarcyOfTyping.innerHTML = "41%";
          break;
        case mistakeInc >= 41 && mistakeInc <= 50:
          accuarcyOfTyping.innerHTML = "32%";
          break;
        case mistakeInc >= 51:
          accuarcyOfTyping.innerHTML = "20%";
          break;
      }
    } else if (mistakeInc == 0) {
      accuarcyOfTyping.innerHTML = "100%";
    }
  }
  
  function whoIs() {
    const picturesArr = [
      "./Img/sloth.png",
      "./Img/turtle.png",
      "./Img/panda.png",
      "./Img/rabbit.jpg",
      "./Img/bull.jpeg",
      "./Img/cheetah.png",
    ];
    resultContentPic.innerHTML = "";
    const picturesElOne = document.createElement("img");
    const picturesElTwo = document.createElement("img");
    const picturesElThree = document.createElement("img");
    const picturesElFour = document.createElement("img");
    const picturesElFive = document.createElement("img");
    const picturesElSix = document.createElement("img");

    picturesElOne.src = picturesArr[0];
    picturesElTwo.src = picturesArr[1];
    picturesElThree.src = picturesArr[2];
    picturesElFour.src = picturesArr[3];
    picturesElFive.src = picturesArr[4]
    picturesElSix.src = picturesArr[5];
    if (correctInc >= 0 && correctInc <= 25) {
      resultContentPic.appendChild(picturesElOne);
    } else if (correctInc >= 26 && correctInc <= 50) {
      resultContentPic.appendChild(picturesElTwo);
    } else if (correctInc >= 51 && correctInc <= 75) {
      resultContentPic.appendChild(picturesElThree);
    } else if (correctInc >= 76 && correctInc <= 150) {
      resultContentPic.appendChild(picturesElFour);
    } else if (correctInc >= 151 && correctInc <= 200) {
      resultContentPic.appendChild(picturesElFive);
    } else if (correctInc >= 201 && correctInc <= 300) {
      resultContentPic.appendChild(picturesElSix);
    } else {
      resultContentPic.appendChild(picturesElSix);
    }
  }

  resetGame.addEventListener("click", () =>{
    // inputText.focus();
    // inputText.value = "";
    // currentIndex = 0;
    // correctInc = 0;
    // mistakeInc = 0;
    // clearInterval(intervalid);
    // timer.innerHTML = "00:00";
    // mainBox.classList.remove("unvisible");
    // resultContent.classList.remove("visible");
    // const spanElements = document.querySelectorAll(".texts span");
    // spanElements.forEach((spanEl) => {
    //   spanEl.classList.remove("correct", "wrong");
    // });
    location.reload()
  });
  const disallowedKeys = [
    "Control",
    "Alt",
    "Tab",
    "Shift",
    "Meta",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "CapsLock",
    "Insert",
    "Home",
    "PageUp",
    "Delete",
    "End",
    "PageDown",
    "Windows",
    "Super",
    "Command",
  ];
  // Add and remove letters
  if (disallowedKeys.includes(e.key)) {
    return false;
  } else if (e.key === "Backspace") {
    removeClass();
  } else {
    createClass();
  }

  // Check values
  checkCorrectClasses();
  checkMistakeClasses();
  whoIs();
  if (!intervalid) {
    intervalid = setInterval(updateTime, 1000);
    
  }
});

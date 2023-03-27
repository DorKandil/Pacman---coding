"use strict";

const WALL = "#";
const FOOD = ".";
const EMPTY = " ";
const SUPER = "@";
const gGame = {
  score: 0,
  isOn: false,
};

var gFoodCount;
var gBoard;
var gDisapHost;

function onInit() {
  gFoodCount = 0;
  gGame.score = 0;
  gBoard = buildBoard();
  createGhosts(gBoard);
  createPacman(gBoard);
  renderBoard(gBoard, ".board-container");

  gGame.isOn = true;
  var modal = document.querySelector(".modal");
  modal.style.display = "none";
  var elscore = document.querySelector(".score");

  elscore.innerText = 0;
}

function buildBoard() {
  const size = 10;
  const board = [];
  for (var i = 0; i < size; i++) {
    board.push([]);
    for (var j = 0; j < size; j++) {
      if (
        i === 0 ||
        i === size - 1 ||
        j === 0 ||
        j === size - 1 ||
        (j === 3 && i > 4 && i < size - 2)
      ) {
        board[i][j] = WALL;
      } else {
        board[i][j] = FOOD;
        gFoodCount++;
      }
    }
  }

  board[1][1] = SUPER;
  board[1][8] = SUPER;
  board[8][1] = SUPER;
  board[8][8] = SUPER;
  return board;
}

function updateScore(diff) {
  // DONE: update model and dom
  // Model
  gGame.score += diff;
  // DOM
  const elScore = document.querySelector(".score");
  elScore.innerText = gGame.score;
  gScore++;
}

function gameOver() {
  console.log("Game Over");
  var modal = document.querySelector(".modal");
  var msg = document.querySelector(".user-msg");

  clearInterval(gIntervalGhosts);
  renderCell(gPacman.location, "🪦");
  gGame.isOn = false;

  modal.style.display = "block";

  // win or lose
  if (gFoodCount === 0) {
    msg.innerText = "you win!";
  } else {
    msg.innerText = "you lose!";
  }
}

function setSuper() {
  gPacman.isSuper = true;
  for (var i = 0; i < gGhosts.length; i++) {
    gGhosts[i].color = "#0000FF";
  }
}

function removeSuper() {
  gPacman.isSuper = false;
  for (var i = 0; i < gGhosts.length; i++) {
    gGhosts[i].color = getRandomColor();
  }
}

function eatGhost(pacmanlocation) {
  gDisapHost = [];
  // console.log("pacmanlocation:", pacmanlocation);
  for (var i = 0; i < gGhosts.length; i++) {
    // console.log(gGhosts[i].location);
    // if (
    // pacmanlocation.i === gGhosts[i].location.i &&
    // pacmanlocation.j === gGhosts[i].location.j
    // )
  }
}

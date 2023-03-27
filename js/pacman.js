"use strict";

const PACMAN = "😷";
var gPacman;
function createPacman(board) {
  // TODO: initialize gPacman...
  gPacman = {
    location: {
      i: 2,
      j: 2,
    },
    isSuper: false,
  };
  board[gPacman.location.i][gPacman.location.j] = PACMAN;
  gFoodCount--;
}

function movePacman(ev) {
  if (!gGame.isOn) return;
  // DONE: use getNextLocation(), nextCell
  const nextLocation = getNextLocation(ev.key);
  // console.log('nextLocation:', nextLocation)
  const nextCell = gBoard[nextLocation.i][nextLocation.j];
  // DONE: return if cannot move

  if (nextCell === WALL) return;
  // DONE: hitting a ghost? call gameOver
  if (nextCell === GHOST && gPacman.isSuper) {
    eatGhost(nextLocation);
  } else if (nextCell === GHOST) {
    gameOver();
    return;
  } else if (nextCell === SUPER) {
    setSuper();
    setTimeout(removeSuper, 50000);
  } else if (nextCell === FOOD) {
    updateScore(1);
    if (gFoodCount === 0) gameOver();
  }

  // DONE: moving from current location:
  // DONE: update the model
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
  // DONE: update the DOM
  renderCell(gPacman.location, EMPTY);

  // DONE: Move the pacman to new location:
  // DONE: update the model
  gBoard[nextLocation.i][nextLocation.j] = PACMAN;
  gPacman.location = nextLocation;
  // DONE: update the DOM
  renderCell(nextLocation, PACMAN);
}
// !!!
function getNextLocation(eventKeyboard) {
  const nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j,
  };

  switch (eventKeyboard) {
    case "ArrowUp":
      nextLocation.i--;
      break;
    case "ArrowRight":
      nextLocation.j++;
      break;
    case "ArrowDown":
      nextLocation.i++;
      break;
    case "ArrowLeft":
      nextLocation.j--;
      break;
  }
  // DONE: figure out nextLocation
  return nextLocation;
}

const dialog = document.querySelector("dialog");
const openButton = document.querySelector(".open-button");
const resetButton = document.querySelector(".reset-button");
const gameResult = document.querySelector(".game-result");
const cells = document.querySelectorAll(".cell");

openButton.addEventListener("click", () => {
    dialog.showModal()
})
resetButton.addEventListener("click", () => {
  dialog.close()
  game.resetGame()
})
dialog.addEventListener("click", e => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close()
  }
})


function gameLogic() {
  let lastSign = "X"
  let moves = 0
  let board =[ [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]];
  function getSign() {
    return lastSign
  }
  function getBoard() {
    return board
  }
  function getMoves() {
    return moves
  }
  
  function setX(cell, posX, posY) {
    if (lastSign != "X" && cell.textContent != "O" && cell.textContent != "X") {
      board[posX][posY] = "X"
      cell.textContent = "X"
      lastSign = "X"
      winLogic()
    }
  }

  function setO(cell, posX, posY) {
    if (lastSign != "O" && cell.textContent != "O" && cell.textContent != "X") {
      board[posX][posY] = "O";
      cell.textContent = "O";
      lastSign = "O"
      winLogic()
    }
  }

  function winLogic() {
    moves += 1 
    if (
    board[0][0] === board[0][1] && board[0][1] === board[0][2] ||
    board[1][0] === board[1][1] && board[1][1] === board[1][2] ||
    board[2][0] === board[2][1] && board[2][1] === board[2][2] ||

    board[0][0] === board[1][0] && board[1][0] === board[2][0] ||
    board[0][1] === board[1][1] && board[1][1] === board[2][1] ||
    board[0][2] === board[1][2] && board[1][2] === board[2][2] ||

    board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
    board[0][2] === board[1][1] && board[1][1] === board[2][0]) {  
      console.log(lastSign, "Wins")
      gameResult.textContent = `${lastSign} Wins`
      dialog.showModal()
    } else if (moves === 9) {
      console.log("tie")
      gameResult.textContent = `Tie Game`
      dialog.showModal()
     }
  }

  function resetGame() {
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = [i+1]
    }
    lastSign = "X"
    moves = 0
    board = [ [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];
  }
  return {getSign, getBoard, getMoves ,setX, setO, winLogic, resetGame}
}


let game = gameLogic();

function runGame(cell, posX, posY) {
  game.getSign() == "O" ? game.setX(cell, posX, posY) : game.setO(cell, posX, posY)
}



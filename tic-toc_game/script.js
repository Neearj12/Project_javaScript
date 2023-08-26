const gamecell = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restart = document.querySelector(".restart");
//  making variable
let currentplayer = "X";
let nextplayer = "O";
let playerturn = currentplayer;
player1.textContent=`player1: ${currentplayer}`;
player2.textContent=`player2:${nextplayer}`;
// function to start  game
const startgame = () => {
  gamecell.forEach((cell) => {
    cell.addEventListener("click", handelclick);
  });
};
const handelclick=(e)=>{
    if (e.target.textContent === "") {
        e.target.textContent = playerturn;
        if (checkwin()) {
          console.log(`${playerturn} is a winner`);
          disablecells();
        } else if (checktai()) {
          console.log(`It is a tai`);
          disablecells();
        } 
        else {
          changeplayerturn();
        }
      }
}
// function to change player turn
const changeplayerturn = () => {
  if (playerturn == currentplayer) {
    playerturn = nextplayer;
  } else {
    playerturn = currentplayer;
  }
};
const checkwin = () => {
  const winningcondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningcondition.length; i++) {
    const [pos1, pos2, pos3] = winningcondition[i];
    if (
      gamecell[pos1].textContent !== "" &&
      gamecell[pos1].textContent === gamecell[pos2].textContent &&
      gamecell[pos2].textContent === gamecell[pos3].textContent
    ) {
      return true;
    }
  }
  return false;
};
// function to check tai
const checktai = () => {
  let emptycellcount = 0;
  gamecell.forEach((cell) => {
    if (cell.textContent === "") {
      emptycellcount++;
    }
  });
  return emptycellcount === 0 && !checkwin();
};
// function to disable game board after win or tai
const disablecells=()=>{
    gamecell.forEach(cell=>{
        cell.removeEventListener('click',handelclick);
        cell.classList.add('disabled')
    });
}
const restartgame=()=>{
    gamecell.forEach(cell=>{
cell.textContent=dice;
cell.classList.remove('disabled');
    });
    startgame();
}

restart.addEventListener('click',restartgame);
startgame();

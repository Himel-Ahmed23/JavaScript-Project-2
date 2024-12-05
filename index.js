let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");

let userScorePara = document.getElementById("user-score");
let compScorePara = document.getElementById("Comp-score");

let genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

let drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

let showWinner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win!");
    msg.innerText = `You win! your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You lose!");
    msg.innerText = `You lose! ${CompChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

let playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  let CompChoice = genCompChoice();
  console.log("comp choice =", CompChoice);
  if (userChoice === CompChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = CompChoice == "scissors" ? false : true;
    } else {
      userWin = CompChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

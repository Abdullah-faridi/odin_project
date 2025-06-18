const body = document.querySelector("body");
body.style.backgroundColor = "grey";
const styleBody = document.createElement("style");
styleBody.textContent = `
  body > * {
    display: block;
    width: fit-content;
    margin: 10px auto;
  }
`;
document.head.append(styleBody);

const resultDiv = document.createElement("div");


  function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    
    let computerans;
    if (value == 0) {
      computerans = "stone";
    } else if (value == 1) {
      computerans = "paper";
    } else {
      computerans = "scissor";
    }
  
    return computerans;
    
  }
  const computerChoice = document.createElement("div");
  computerChoice.className = "computer";
  document.body.append(computerChoice);
  
 const style = document.createElement("style");
 style.textContent  =` 
   .computer {
        width :200px;
        height :100px;
        text-align :center;
        background-color : pink;
        color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

   }`;
 document.head.append(style);
 



const yourChoice = document.createElement("div");
yourChoice.className = "mine";
  document.body.append(yourChoice);

  const styleMine = document.createElement("style");
  styleMine.textContent  =` 
    .mine {
         width :200px;
         height :100px;
         text-align :center;
         background-color : Blue;
         color: white;
     font-size: 20px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 10px;
     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
 
    }`;
  document.head.append(styleMine);


  
const result = document.createElement("div")
document.body.append(result);
result.className= "output";

const styleResult = document.createElement("style");
styleResult.textContent = `
     .output{
           width :300px;
         height :50px;
         text-align :center;
         background-color : green;
         color: white;
     font-size: 20px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 10px;
     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}`;
document.head.append(styleResult);

let output = " ";

const stone = document.createElement("button");
stone.className = "buttons";
stone.textContent ="stone";
document.body.append(stone);
stone.addEventListener("click",function(){
  yourChoice.textContent = "STONE"
  output = getComputerChoice();
   if (output == "stone"){
    computerChoice.textContent ="Computer choice :STONE";
    result.textContent = "it's a tie";
    result.style.backgroundColor = "brown";
   } else if (output=="paper"){
    computerChoice.textContent = "Computer choice :PAPER";
    result.textContent = "computer won , You lost";
    updateScore("computer");
    result.style.backgroundColor = "red";
   }else {
    computerChoice.textContent = "Computer choice :SCISSOR";
    result.textContent = "you won";
    updateScore("you");
    result.style.backgroundColor = "green";
   }
   yourChoice.textContent = "your choice: STONE";
  
});
const paper = document.createElement("button");
paper.className = "buttons";
paper.textContent = "paper";
document.body.append(paper);

paper.addEventListener("click", function () {
  yourChoice.textContent = "Your choice : PAPER"
  output = getComputerChoice();
  if (output == "paper") {
    computerChoice.textContent = "Computer choice :PAPER";
    result.textContent = "It's a tie";
    result.style.backgroundColor ="brown";
  } else if (output == "scissor") {
    computerChoice.textContent = "Computer choice :SCISSOR";
    result.textContent = "Computer won, You lost";
    updateScore("computer");
    result.style.backgroundColor = "red";
  } else {
    computerChoice.textContent ="Computer choice :STONE";
    result.textContent = "You won!";
    updateScore("you");
    result.style.backgroundColor = "green";
  }
});
const scissor = document.createElement("button");
scissor.className = "buttons";
scissor.textContent = "scissor";
document.body.append(scissor);

scissor.addEventListener("click", function () {
   yourChoice.textContent = "Your choice : SCISSOR";
  output = getComputerChoice();
  if (output == "scissor") {
    computerChoice.textContent = "Computer choice :SCISSOR";
    result.textContent = "It's a tie";
    result.style.backgroundColor = "brown";
  } else if (output == "stone") {
    computerChoice.textContent ="Computer choice :STONE";
    result.textContent = "Computer won, You lost";
    updateScore("computer");
    result.style.backgroundColor = "red";
  } else {
    computerChoice.textContent = "Computer choice :PAPER";
    result.textContent = "You won!";
    updateScore("you");
    result.style.backgroundColor = "green";
  }
});

const buttonStyle =document.createElement("style");
buttonStyle.textContent=`
   .buttons{
      font-size: 24px;
    color: black;
    background-color:purple;
    border-radius : 25%;
}`;
document.head.append(buttonStyle);
let yourScore = 0;
let computerScore = 0;

const scoreBoard = document.createElement("div");
scoreBoard.className = "scoreboard";
scoreBoard.textContent = `You: ${yourScore} | Computer: ${computerScore}`;
document.body.append(scoreBoard);

// Scoreboard styles
const styleScore = document.createElement("style");
styleScore.textContent = `
  .scoreboard {
    font-size: 24px;
    color: white;
    background-color: black;
    padding: 10px 20px;
    border-radius: 8px;
    margin-top: 20px;
  }
`;
document.head.append(styleScore);

function updateScore(winner) {
  if (winner === "you") yourScore++;
  else if (winner === "computer") computerScore++;
  scoreBoard.textContent = `You: ${yourScore} | Computer: ${computerScore}`;
}



  
  
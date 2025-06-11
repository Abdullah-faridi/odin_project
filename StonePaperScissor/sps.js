function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function getComputerChoice() {
    let value = getRandomInt(3);
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
  
  let score = 0;
  
  function gameplay() {
    let input = prompt("Enter your choice (stone, paper, or scissor) OR type 'exit' to quit:");
    if (input === null || input.toLowerCase() === "exit") {
      console.log("You exited the game.");
      return "exit";
    }
  
    console.log("Your choice was:", input);
    let output = getComputerChoice();
    console.log("Computer's choice is:", output);
  
    if (input === output) {
      console.log("It's a tie! Try again.");
    } else if (
      (input === "scissor" && output === "stone") ||
      (input === "paper" && output === "scissor") ||
      (input === "stone" && output === "paper")
    ) {
      console.log("You lost!");
      score--;
    } else if (
      (input === "paper" && output === "stone") ||
      (input === "stone" && output === "scissor") ||
      (input === "scissor" && output === "paper")
    ) {
      console.log("You win!");
      score++;
    } else {
      console.log("Invalid input!");
    }
  
    console.log("Current score:", score);
  }
  
  let rounds = parseInt(prompt("Enter the number of rounds you want to play: "));
  
  for (let i = 1; i <= rounds; i++) {
    let result = gameplay();
    if (result === "exit") {
      break;
    }
  }
  
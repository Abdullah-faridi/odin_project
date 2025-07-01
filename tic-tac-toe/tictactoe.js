const boxNodes= document.querySelectorAll(".box");
let currentPlayer= "O";
const boxArray = Array.from(boxNodes);
const gameState = Array(9).fill(null);
const turnX = document.querySelector(".x-turn");
turnX.style.border = "6px solid yellow";
const turnO = document.querySelector(".o-turn");

let gameOver = false;


function checkWinner(){
    const winpatterns = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (let pattern of winpatterns){
        const [a,b,c] = pattern;
        if( gameState[a] && 
            gameState[a]==gameState[b] &&
             gameState[b]==gameState[c]){
                alert(`player ${gameState[a]} wins!`);
                return true;
             }
    }
    if(!gameState.includes(null)){
        alert("It's a draw");
        return true;
    }
    
    return false;
}



boxArray.forEach((box ,index) => {
      box.addEventListener("click", () =>{
        if(gameOver){
            return;
        }
        
        if(gameState[index] !== null){
            return;
        }
         if(currentPlayer == "O"){
            currentPlayer = "X";
            turnO.style.border = "6px solid yellow";
            turnX.style.border = "0px solid white";
         } else {
            currentPlayer = "O";
            turnX.style.border = "6px solid yellow";
            turnO.style.border = "0px solid white";
         }
        box.textContent = currentPlayer;
        
        gameState[index] = currentPlayer;
        if(checkWinner()){
            gameOver = true;
            return;
        }

        
    });
});
const restart = document.getElementById("restart");

restart.addEventListener("click",() =>{
     boxArray.forEach((box) =>{
        box.textContent = "";
     });
     for (let i = 0 ; i < 9 ; i++){
        gameState[i]= null;
     }
     currentPlayer = "O";
     turnX.style.border = "6px solid yellow";
      turnO.style.border = "0px solid white";
    gameOver = false;


})
  








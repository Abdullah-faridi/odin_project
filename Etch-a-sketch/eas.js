const body = document.querySelector("body");
body.style.backgroundColor = "grey";
let numberOfGrid = parseInt(prompt("enter the number of grid: "));

const container = document.createElement("div");
container.className = "flex-container";
document.body.appendChild(container);
     const style = document.createElement("style");
style.textContent = `
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    width: 80vmin;
    height: 80vmin;
    margin: 20px auto;
    border: 2px solid #333;
  }

  .grids {
    width: calc(100% / ${numberOfGrid});
    height: calc(100% / ${numberOfGrid});
    border: 1px solid black;
    background-color: white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    font-size: 1.2rem;
}
       .buttons{
     display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding : 20px;
    margin : 20px;
      font-size: 34px;
    color: black;
    background-color:purple;
    border-radius : 25%;
}
  `;
document.head.appendChild(style);

    function createDiv(){
        const div = document.createElement("div");
        div.className= "grids";
         return div;
    }
       
for (let i = 0;i< numberOfGrid;i++){
    for(let j = 0; j < numberOfGrid ; j++){
    const gridDiv = createDiv();
    container.appendChild(gridDiv);
    };
}

const gridDivs = document.querySelectorAll(".grids");


const black = document.createElement("button");
black.textContent = "black-color";
black.className= "buttons";
document.body.appendChild(black);   
black.addEventListener("click", function () {  
    gridDivs.forEach(function (div) {
      div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "black";  
      });
    });
  });
 

  const rgb = document.createElement("button");
rgb.textContent = "rgb-color";
rgb.className= "buttons";
document.body.appendChild(rgb);   
rgb.addEventListener("click", function () {  
    gridDivs.forEach(function (div) {
      div.addEventListener("mouseover", function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        div.style.backgroundColor =  `rgb(${r}, ${g}, ${b})`;  
      });
    });
  });
  const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.className= "buttons";
document.body.appendChild(resetBtn);

resetBtn.addEventListener("click", function () {
  gridDivs.forEach(function (div) {
    div.style.backgroundColor = "white";
  });
});
const refreshBtn = document.createElement("button");
refreshBtn.textContent = "Refresh";
refreshBtn.className= "buttons";
document.body.appendChild(refreshBtn);

refreshBtn.addEventListener("click", function () {
  location.reload(); 
});

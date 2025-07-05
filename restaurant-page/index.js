import './styles.css';
import home from "./Tabs/home";
import menu from "./Tabs/menu";
import about from "./Tabs/about";



const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about"); 
const Content = document.querySelector(".content");

homeBtn.addEventListener("click", () => {
  Content.innerHTML = "";
  Content.appendChild(home);

  setActiveButton(homeBtn);
});

menuBtn.addEventListener("click", () => {
  Content.innerHTML = "";
  Content.appendChild(menu);

  setActiveButton(menuBtn);
});

aboutBtn.addEventListener("click", () => {
  Content.innerHTML = "";
  Content.appendChild(about);

  setActiveButton(aboutBtn);
});

function setActiveButton(activeBtn) {
  const allBtns = [homeBtn, menuBtn, aboutBtn];
  allBtns.forEach(btn => {
    btn.style = "";
  });

  activeBtn.style.height = "70px";
  activeBtn.style.width = "110px";
  activeBtn.style.border = "2px solid yellow";
}

window.addEventListener("DOMContentLoaded", () => {
  homeBtn.click();
});

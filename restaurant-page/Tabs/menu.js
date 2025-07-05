import pancakesImg from '../images/pancakes.jpg';
import frenchToastImg from '../images/french-toast.jpg';
import bearyVeggieImg from '../images/beary-veggie.jpg';
import honeyCombImg from '../images/honey-comb.jpg';
import bltImg from '../images/blt.jpg';

function createElement(tag, textContent, className) {
  const element = document.createElement(tag);
  if (textContent) element.textContent = textContent;
  if (className) element.className = className;
  return element;
}

const menu = createElement("div", null, "menu");
const card = createElement("div", null, "menu-card");

const menuHeading = createElement("h1", "Menu", "menu-heading");
card.appendChild(menuHeading);

const dishes = createElement("h2", "Main Dishes", "dishes");
card.appendChild(dishes);


function createCard(description, title, price, imgSrc) {
  const dishesCard = document.createElement("div");
  dishesCard.className = "dishes-card";

  const dishHeading = document.createElement("h3");
  dishHeading.textContent = title;

  const details = document.createElement("p");
  details.textContent = description;

  const prices = document.createElement("strong");
  prices.textContent = price;

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = title;
  img.className = "menu-img";

  dishesCard.append(dishHeading, details, prices,img);

  return dishesCard; 
}

const items = [
  {
    title: "Pancakes",
    description: "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
    price: "$4",
    imgSrc: pancakesImg,
  },
  {
    title: "French Toast",
    description: "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
    price: "$5",
    imgSrc: frenchToastImg,
  },
  {
    title: "Beary Veggie Sandwich",
    description: "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
    price: "$8",
    imgSrc: bearyVeggieImg
  },
  {
    title: "Honeycomb",
    description: "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
    price: "$6",
    imgSrc: honeyCombImg ,
  },
  {
    title: "BLT",
    description: "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
    price: "$6",
    imgSrc:bltImg,

  },
];


items.forEach(item => {
  const div = createCard(item.description, item.title, item.price, item.imgSrc);
  card.appendChild(div);
});

menu.appendChild(card);
export default menu;



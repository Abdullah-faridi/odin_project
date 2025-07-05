function createElement(tag, textContent, className) {
    const el = document.createElement(tag);
    if (textContent) el.textContent = textContent;
    if (className) el.className = className;
    return el;
  }
  
 
  const home = createElement("div", null, "home");
  const card = createElement("div", null, "card");
  

  const heading = createElement("h1", "Beary's Breakfast Bar","restaurantName");
  
  const para = createElement("p", "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.");
  const strong = createElement("strong", "Goldilocks");
  
  const paraDiv = createElement("div", null, "quote");
  paraDiv.append(para, strong);
  
 
  const hours = createElement("div", null, "hours");
  const hourHeading = createElement("h2", "Hours","hour-heading");
  
  const active = createElement("ul",null,"days");
  const listItems = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
  ];
  
  listItems.forEach(item => {
    const li = createElement("li", item);
    active.appendChild(li);
  });
  
  hours.append(hourHeading, active);
  

  const address = createElement("div", null, "address");
  const locationHeading = createElement("h2", "Location");
  const locationPara = createElement("p", "123 Forest Drive, Forestville, Maine");
  address.append(locationHeading, locationPara);
  
  card.append(heading, paraDiv, hours, address);
  home.appendChild(card);
  
  export default home;

  

function createElement(tag, textContent, className) {
    const el = document.createElement(tag);
    if (textContent) el.textContent = textContent;
    if (className) el.className = className;
    return el;
  }
  
  const about = createElement("div", null, "about");
  const card = createElement("div", null, "about-card");
  
  const heading = createElement("h1", "Contact Us","contact-us");
  
  card.appendChild(heading);
  
  const contact1 = createElement("div", null, "contact-card");
  
  const name1 = createElement("h2", "Mama Bear");
  const role1 = createElement("p", "Chef");
  const phone1 = createElement("p", "555-555-5554");
  const email1 = createElement("p", "totallyRealEmail@notFake.com");
  
  contact1.append(name1, role1, phone1, email1);

  const contact2 = createElement("div", null, "contact-card");
  
  const name2 = createElement("h2", "Papa Bear");
  const role2 = createElement("p", "Manager");
  const phone2 = createElement("p", "555-555-5555");
  const email2 = createElement("p", "perfectlyRealEmail@notFake.com");
  
  contact2.append(name2, role2, phone2, email2);

  card.append(contact1, contact2);
  about.appendChild(card);
  
  export default about;
  
"use strict";
const contacts = [];
const liContain = document.querySelector(".li-contain");
const form = document.querySelector(".form");

// const contactmaker = () => {
//   const newLi = document.createElement("li");
//   const nameParagraph = document.createElement("p");
//   const numberParagraph = document.createElement("p");
//   newLi.append(nameParagraph, numberParagraph);
//   liContain.append(newLi);
// };

const displayContacts = () => {
  liContain.innerHTML = "";
  contacts.forEach((item, index) => {
    const newLi = document.createElement("li");
    const nameParagraph = document.createElement("p");
    const numberParagraph = document.createElement("p");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.setAttribute("data-index", index);
    nameParagraph.textContent = item.name;
    numberParagraph.textContent = item.number;
    newLi.append(nameParagraph, numberParagraph, deleteBtn);
    liContain.append(newLi);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.querySelector("#name");
  const number = document.querySelector("#number");
  contacts.push({ name: fullName.value, number: number.value });
  displayContacts();
});

liContain.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    const index = e.target.getAttribute("data-index");
    console.log(index);
    contacts.splice(index, 1);
    displayContacts();
  }
});

displayContacts();

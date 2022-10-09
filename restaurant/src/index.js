import { createHeader } from "./header";
import { homepage } from "./homepage";
import { menu } from "./menu"
import { contact } from "./contact";
import './style.css';

const content = document.getElementById('content');
const main = document.createElement('div');
const footer = document.createElement('div');

createHeader();
const homepageBtn = document.getElementById("homepageBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

main.classList.add('main');
main.setAttribute("id", "mainPanel")
content.appendChild(main)

homepage();
homepageBtn.addEventListener("click", function() {
    main.firstChild.remove()
    homepage();
});

menuBtn.addEventListener("click", function() {
    main.firstChild.remove()
    menu();
});

contactBtn.addEventListener("click", function() {
    main.firstChild.remove()
    contact();
});

footer.classList.add("footer");
content.appendChild(footer);
footer.innerText = "Copyright © 2022 steress"
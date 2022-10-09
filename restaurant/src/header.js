// import guivech from './img/giuvech.png'
import logo from './img/foodLogo.jpg'

function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const homepageBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    const headerLeft = document.createElement("div");
    const headerLeftText = document.createElement("p");
    const headerRight = document.createElement("div");
    
    const newIcon = new Image();
    newIcon.src = logo;
    header.classList.add("header");

    header.appendChild(headerLeft);
    headerLeft.classList.add("headerLeft");
    headerLeft.appendChild(newIcon);
    headerLeftText.innerText = " 'Izbata' Tavern - Autentic Bulgarian Cuisine"
    headerLeft.appendChild(headerLeftText);

    header.appendChild(headerRight)
    headerRight.classList.add("headerRight");

    headerRight.appendChild(homepageBtn);
    homepageBtn.classList.add("homepageBtn")
    homepageBtn.setAttribute("id", "homepageBtn")

    headerRight.appendChild(menuBtn);
    menuBtn.classList.add("menuBtn")
    menuBtn.setAttribute("id", "menuBtn")

    headerRight.appendChild(contactBtn);
    contactBtn.classList.add("contactBtn")
    contactBtn.setAttribute("id", "contactBtn")

    homepageBtn.innerText = "Home"
    menuBtn.innerText = "Menu"
    contactBtn.innerText = "Contact"

    content.appendChild(header);
}

export { createHeader }
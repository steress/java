import tavern1 from './img/tavern2.jpg'
import tavern2 from './img/tavern3.jpg'
import tavern3 from './img/tavern4.jpg'


function homepage() {
    const main = document.getElementById('mainPanel')
    const mainHomepage = document.createElement('div');
    mainHomepage.classList.add("mainHomepage");
    mainHomepage.setAttribute('id', 'mainHomepage')
    if (main.childElementCount > 0) {
        mainHomepage.remove()
    } else {
        main.appendChild(mainHomepage)
    }

    mainLeft();
    slideShow();
};
function mainLeft() {
    const mainHomepage = document.getElementById("mainHomepage")
    const mainLeft = document.createElement('div');
    mainLeft.classList.add("mainLeft")
    mainHomepage.appendChild(mainLeft)

    const firstP = document.createElement("p");
    const secondP = document.createElement("p");
    const thirdP = document.createElement("p");

    const wallOfTextSecondP = [ "\b\b\b\bFor 15 years, the restaurant has been offering its customers authentic Bulgarian cuisine and traditional interior! ",
    "The restaurant team has collected recipes of various dishes from all over Bulgaria! ", 
    "It is here that you will have the opportunity to feel Bulgarian hospitality and Bulgarian traditions.",
    ].join("")
    const wallOfTextThirdP = [ "\b\b\b\bRarely, foreign groups visiting Sofia miss visiting the Tavern and trying the wonderful Bulgarian specialties. ", 
    " 'Izbata' Tavern is located in the heart of Sofia, near the 'Alexander Nevsky' memorial temple and the National Assembly. ",
    "The establishment has been awarded many times for quality and style! Don't miss it!"
    ].join("")
    
    firstP.innerText = "'Izbata' Tavern is a place you must visit !"
    secondP.innerText = wallOfTextSecondP
    thirdP.innerText = wallOfTextThirdP

    mainLeft.appendChild(firstP);
    mainLeft.appendChild(secondP);
    mainLeft.appendChild(thirdP);
};

function slideShow() {
        const mainHomepage = document.getElementById("mainHomepage");
        const mainSlideShow = document.createElement('div');
        mainSlideShow.classList.add("mainSlideShow");
        mainHomepage.appendChild(mainSlideShow);
        
        let i = 0;
        let images = [];
        let time = 3000;
        
        images[0] = tavern1
        images[1] = tavern2
        images[2] = tavern3
       
        function changeImg(){
            mainSlideShow.style.backgroundImage = `url(${images[i]})`
            i < images.length - 1 ? i++ : i = 0;
            setTimeout(() => {
                changeImg()
            }, time);
        };

    changeImg();
};


export { homepage }
import banitsa from './img/banitsa.jpg'
import tarator from './img/tarator.jpg'
import skara from './img/skara.jpg'
import sarmi from './img/sarmi.jpg'
import shkembe from './img/skembe.jpg'
import musaka from './img/musaka.jpg'

function menu() {
    const main = document.getElementById('mainPanel')
    const mainMenu = document.createElement('div');
    mainMenu.classList.add("mainMenu");
    mainMenu.setAttribute("id","mainMenu")
    if (main.childElementCount > 0) {
        mainMenu.remove()
    } else {
        main.appendChild(mainMenu)
    }
    appendItem();
}

function createItem(picName, itemName, productInfo){
        const menuItem = document.createElement('div');
        const menuPic = document.createElement('img');
        menuPic.classList.add('menuPics')
        menuPic.src = `${picName}`;
        const menuText = document.createElement('div');
        menuText.classList.add('menuText')
        menuText.innerText = `${itemName}`;
        const itemInfo = document.createElement('div');
        itemInfo.classList.add('itemInfo')
        itemInfo.innerText = `${productInfo}`

        menuItem.appendChild(menuPic);
        menuItem.appendChild(menuText);
        menuItem.appendChild(itemInfo);

        return menuItem;
};

function appendItem() {
        const mainMenu = document.getElementById("mainMenu")
        mainMenu.appendChild(createItem(banitsa, "Banitsa",
            "Made by layering a mixture of whisked eggs, " +
            "natural yogurt and pieces of white brined cheese between pastry and then baking it in an oven." ))
        mainMenu.appendChild(createItem(tarator, "Tarator", 
            "Made of salted strained yogurt mixed with cucumbers, garlic, salt, olive oil, " +
            "and herbs such as dill, mint, parsley and thyme."))
        mainMenu.appendChild(createItem(skara, "Meshana Skara",
            "Mixed grill consisting of " +
            "one kyufte, one pork steak, one kebapche, and one pork skewer, " +
            "accompanied by french fries and lyutenitsa."))
        mainMenu.appendChild(createItem(sarmi, "Zelevi Sarmi",
            "Made from cabbage leaves stuffed with rice and grounded meat and then boiled."))
        mainMenu.appendChild(createItem(shkembe, "Shkembe Chorba",
            "Soup made from beef stomach (tripe) with red wine vinegar and spices such as paprika, chili, black pepper and garlic."))
        mainMenu.appendChild(createItem(musaka, "Musaka", 
            "Made with baked potatoes, a rich tomatoey beef mince sauce and topped off with a deliciously creamy bechamel sauce."))
};

export { menu }
import locationIcon from './img/location.jpg'
import phoneIcon from './img/phone.jpg'
import clockIcon from './img/clock.jpg'
import map from './img/map.jpg'

function contact() {
    const main = document.getElementById('mainPanel')
    const mainContact = document.createElement('div');
    mainContact.classList.add('mainContact');
    mainContact.setAttribute('id', 'mainContact')
    if (main.childElementCount > 0) {
        mainContact.remove()
    } else {
        main.appendChild(mainContact)
    };
    
    mapAndInfo()
    location();
    form();
};
function mapAndInfo() {

    const information = document.createElement('div');
    information.setAttribute('id','information');
    mainContact.appendChild(information);

    const mapDiv = document.createElement('img');
    mapDiv.src = map;
    mainContact.appendChild(mapDiv);
}

function location() {
    const information = document.getElementById("information");

    const contactTop = document.createElement('div');
    contactTop.classList.add('contactTop');

    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');

    const locationLogo = document.createElement('img');
    locationLogo.classList.add('logo')
    locationLogo.src = locationIcon;

    const phoneLogo = document.createElement('img');
    phoneLogo.classList.add('logo')
    phoneLogo.src = phoneIcon;

    const clockLogo = document.createElement('img');
    clockLogo.classList.add('logo')
    clockLogo.src = clockIcon;

    const address = document.createElement('div');
    address.innerText = "\b18 Slavyanska str., Sofia";
    
    const phone = document.createElement('div');
    phone.innerText = "\b+ 359 29 895 533,\b+ 359 88 989 533"
    
    const workTime = document.createElement('div');
    workTime.innerText = "\bOpen from 10 am till 11 pm"
    
    divOne.appendChild(locationLogo);
    divOne.appendChild(address);
    divTwo.appendChild(phoneLogo);
    divTwo.appendChild(phone);
    divThree.appendChild(clockLogo);
    divThree.appendChild(workTime);

    contactTop.appendChild(divOne);
    contactTop.appendChild(divTwo);
    contactTop.appendChild(divThree);

    information.appendChild(contactTop);
};

function form() {

    const information = document.getElementById("information");

    const contactBottom = document.createElement('div');
    contactBottom.classList.add('contactBottom');

    const mainFormName = document.createElement('input');
    mainFormName.setAttribute('type', 'text');

    const mainFormEmail = document.createElement('input');
    mainFormEmail.setAttribute('type', 'email');

    const mainFormAbout = document.createElement('input');
    mainFormAbout.setAttribute('type', 'text');

    const mainFormMessage = document.createElement('textArea');
    mainFormMessage.classList.add('contactBottomFormMessage')
    mainFormMessage.setAttribute('type', 'text');
    const sendMessageBtn = document.createElement('button');

    sendMessageBtn.addEventListener('click', function () {
        mainFormName.value = ""
        mainFormEmail.value = ""
        mainFormAbout.value = ""
        mainFormMessage.value = ""
    })

    mainFormName.placeholder = "Name"
    mainFormEmail.placeholder = "E-mail"
    mainFormAbout.placeholder = "About"
    mainFormMessage.placeholder = "Message"

    sendMessageBtn.innerText = "Send"

    contactBottom.appendChild(mainFormName);
    contactBottom.appendChild(mainFormEmail);
    contactBottom.appendChild(mainFormAbout);
    contactBottom.appendChild(mainFormMessage);
    contactBottom.appendChild(sendMessageBtn);
    
    information.appendChild(contactBottom);
};

export { contact }
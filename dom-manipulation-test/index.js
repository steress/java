const container = document.querySelector('#container');
const content = document.createElement('div');
const para = document.createElement('p');
const h3 = document.createElement('h3');
const newOne = document.createElement('div');
const h1 = document.createElement('h1');
const para2 = document.createElement('p');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

para.textContent = "Hey I am red!"

h3.textContent = "I’m a blue h3!"
h1.textContent = "I’m in a div"
para2.textContent = "Me too!"

newOne.classList.add('newdiv');
newOne.style.borderColor = "black";
newOne.style.backgroundColor = "pink";

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(newOne);
newOne.appendChild(h1)
newOne.appendChild(para2)




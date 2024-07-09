// Write your code here!
const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement("h1")
newHeader.id = "victory";

const name = 'Hope Makanda';
newHeader.textContent = `${name} is the champion`;
const body = document.querySelector('body');
body.appendChild(newHeader);

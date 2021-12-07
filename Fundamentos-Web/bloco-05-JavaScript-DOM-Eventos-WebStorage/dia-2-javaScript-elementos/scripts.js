let body = document.querySelector('body');

// Exercicio 01
let tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(tagH1);

// Exercicio 02
let tagMain = document.createElement('main');
tagMain.className = 'main-content';
body.appendChild(tagMain);

// Exercicio 03
let tagsection1 = document.createElement('section');
tagsection1.className = 'center-content';
tagMain.appendChild(tagsection1);

// Exercicio 04
let tagP1 = document.createElement('p');
tagP1.innerText = 'Risus nisi faucibus lacinia urna quisque enim eu elit tristique venenatis, facilisis mi eget non augue rhoncus arcu ligula per eget, iaculis pretium nostra condimentum himenaeos risus congue convallis pretium.';
tagsection1.appendChild(tagP1);

// Exercicio 05
let tagsection2 = document.createElement('section');
tagsection2.className = 'left-content';
tagMain.appendChild(tagsection2);

// Exercicio 06
let tagsection3 = document.createElement('section');
tagsection3.className = 'right-content';
tagMain.appendChild(tagsection3);

// Exercicio 07
let tagImg = document.createElement("img");
tagImg.src = 'https://www.gamereactor.pt/media/39/prylardyktupp_2623963.png';
tagImg.className = 'small-image';
tagsection2.appendChild(tagImg);


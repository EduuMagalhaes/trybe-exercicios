const elementHeader = document.querySelector('header');
const elementMain = document.querySelector('main');
const elementFooter = document.querySelector('footer');

const paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut enim nunc. Sed ornare volutpat neque eu fringilla. Nullam pretium mollis sem, quis maximus turpis fringilla non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut lacinia sem mi, a dignissim justo euismod vel. Praesent nec ante aliquet, dapibus nisl ac, commodo mi. Donec congue cursus dui, et mattis risus aliquet sed. Integer iaculis massa id metus euismod, imperdiet interdum sapien lobortis. Duis ut efficitur libero. Praesent vitae ipsum vehicula, lobortis ligula ac, sagittis enim. Sed sollicitudin, est id consectetur semper, mi dolor vehicula libero, sed ultricies risus ante eget dui. Donec dolor eros, tempus ac orci id, elementum maximus magna. Etiam gravida eleifend libero. Curabitur leo urna, faucibus et erat sed, lobortis elementum lacus. Curabitur porta eros eu posuere efficitur. Donec sagittis pellentesque nibh ac luctus.';

const paragraph2 = 'Integer pharetra sed enim eget luctus. Praesent eros mi, sagittis vitae tortor nec, eleifend venenatis nulla. Vivamus ultricies, diam auctor pretium facilisis, tortor nibh mattis dui, a fermentum risus sapien et nibh. Fusce pharetra quam mauris, eu scelerisque nibh aliquet ac. Duis laoreet varius enim, ut tincidunt ipsum finibus ac. Vestibulum placerat enim ipsum, vitae lobortis massa mollis fringilla. In sit amet dui in velit euismod consectetur. Proin pharetra lectus id pretium maximus.';

const paragraph3 = 'Sed ullamcorper est enim, vitae ornare massa feugiat sit amet. Suspendisse potenti. Proin ut tortor quis mi molestie facilisis eget at enim. Donec in maximus est, vitae placerat lacus. Proin dapibus augue vitae maximus posuere. Nam in ex scelerisque, fermentum ante et, eleifend sapien. Morbi mollis commodo felis.';

// Construction HTML code

// Create Tittle
function createTittle(string, elemento) {
  const elementTittle = document.createElement('h1');
  elementTittle.innerText = 'Lorem Ipsum';
  elemento.appendChild(elementTittle);
}

// Create menu buttons
function createButtonMenu() {
  const elementSection = document.createElement('section');
  elementSection.id = 'button-menu';
  elementMain.appendChild(elementSection);
}

function createButton(string, element) {
  const button = document.createElement('button');
  button.innerText = string;
  element.appendChild(button);
}

function createButtonsDiv(array, string) {
  const elementSection = document.querySelector('#button-menu');
  const div = document.createElement('div');
  div.id = string;  
  const elementSpan = document.createElement('span');
  elementSpan.innerText = string;
  div.appendChild(elementSpan);
  elementSection.appendChild(div);
  for (const index of array) {
    createButton(index, div);
  }    
}
// Create article
function createArticle() {
  const elementArticle = document.createElement('article');
  elementMain.appendChild(elementArticle);
}

// Create Paragraphs
function createParagraphs(string) {
  const elementArticle = document.querySelector('article');
  const elementSection = document.createElement('section');
  elementSection.id = 'paragraphs';
  elementArticle.appendChild(elementSection);
  createTittle('Lorem Ipsum',elementSection);
  const p = document.createElement('p');
  p.innerText = string;
  elementSection.appendChild(p);  
}

// Creat functions 
function backgroundColor(event) {
  const elementArticle = document.querySelector('article');
  elementArticle.style.backgroundColor = event.target.innerText;
  localStorage.setItem("backgroundColor", event.target.innerText);
}

function fontColor(event) {
  const elementArticle = document.querySelector('article');
  elementArticle.style.color = event.target.innerText;
  localStorage.setItem("fontColor", event.target.innerText);
}

function fontSize(event) {
  const elementArticle = document.querySelector('article');
  elementArticle.style.fontSize = event.target.innerText;
  localStorage.setItem("fontSize", event.target.innerText);
}

function lineSpace(event) {
  const elementArticle = document.querySelector('article');
  elementArticle.style.lineHeight = event.target.innerText;
  localStorage.setItem("lineSpace", event.target.innerText);
}

function fontFamily(event) {
  const elementArticle = document.querySelector('article');
  elementArticle.style.fontFamily = event.target.innerText;
  localStorage.setItem("fontFamily", event.target.innerText);
}

// Listener Buttons

function listenerButtons(string) {
  let className = '#' + string + '>button';
  let buttons = document.querySelectorAll(className)
  for (let index of buttons) {
    switch (string) {
      case 'button-background':
        index.addEventListener("click", backgroundColor);
        break;
      case 'button-font-color':
        index.addEventListener("click", fontColor);
        break;
      case 'button-font-size':
        index.addEventListener("click", fontSize);
        break;
      case 'button-line-space':
        index.addEventListener("click", lineSpace); 
        break;
      case 'button-font':
        index.addEventListener("click", fontFamily);
        break;
      default:
        break;
    }    
  }
}

// Load LocalStorage
function loadLocalStorage() {
  const elementArticle = document.querySelector('article');
  elementArticle.style.backgroundColor = localStorage.getItem('backgroundColor');
  elementArticle.style.color = localStorage.getItem('fontColor');
  elementArticle.style.fontSize = localStorage.getItem('fontSize');
  elementArticle.style.lineHeight = localStorage.getItem('lineSpace');
  elementArticle.style.fontFamily = localStorage.getItem('fontFamily');
}
window.onload = function() {
  createTittle('Lorem Ipsum',elementHeader);
  createButtonMenu();
  createButtonsDiv(['black', 'white', 'gray'], 'button-background');
  createButtonsDiv(['black', 'white', 'red'], 'button-font-color');
  createButtonsDiv(['10px', '15px', '20px'], 'button-font-size');
  createButtonsDiv(['1.0', '1.5', '2.0'], 'button-line-space');
  createButtonsDiv(['Arial', 'Montserrat', 'Oswald'], 'button-font'); 
  createArticle();
  createParagraphs(paragraph1);
  createParagraphs(paragraph2);
  createParagraphs(paragraph3);
  listenerButtons('button-background');
  listenerButtons('button-font-color');
  listenerButtons('button-font-size');
  listenerButtons('button-line-space');
  listenerButtons('button-font');
  loadLocalStorage();
}
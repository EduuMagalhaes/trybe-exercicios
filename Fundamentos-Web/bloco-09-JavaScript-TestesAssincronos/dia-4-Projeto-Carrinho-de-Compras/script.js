let cartItem = [];

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const calculateCartPrice = () => {
  const cartPrice = cartItem.reduce((acc, item) => item.salePrice + acc, 0);
  const finalPriceElement = document.querySelector('.total-price');
  finalPriceElement.innerText = cartPrice; 
};

const cartItemClickListener = async (event) => {
  let iRemove = 0;
  for (let index = 0; index < cartItem.length; index += 1) {    
    if (cartItem[index].sku === event.target.id) {
      iRemove = index;
    }
  }  
  cartItem.splice(iRemove, 1);
  calculateCartPrice();
  await saveCartItems(JSON.stringify(cartItem));
  event.target.parentElement.removeChild(event.target);
};

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.id = sku;
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addCartItem = async (idItem) => {
  const item = await fetchItem(idItem);
  document.querySelector('.cart__items').appendChild(createCartItemElement(
    { sku: item.id, name: item.title, salePrice: item.price },
  ));
  return { sku: item.id, name: item.title, salePrice: item.price };  
};

const loadProducts = async () => {
  const load = document.createElement('span');
  load.className = 'loading';
  load.innerText = 'carregando...';
  document.querySelector('.items').appendChild(load);
  const { results } = await fetchProducts();
  document.querySelector('.items').removeChild(document.querySelector('.loading'));
  results.forEach((item) => {
    const elementitem = createProductItemElement(
      { sku: item.id, name: item.title, image: item.thumbnail },
      );        
    document.querySelector('.items').appendChild(elementitem);
  });
};

const listenerButtonsCart = async () => {
  const elementsButton = document.querySelectorAll('.item__add');
  elementsButton.forEach((button) => button.addEventListener('click', async (event) => {
    const idTarget = event.target.parentElement.firstChild.innerText;
    const itemCart = await addCartItem(idTarget);
    cartItem.push(itemCart);
    calculateCartPrice();
    await saveCartItems(JSON.stringify(cartItem));
  }));
};

const loadCartItems = () => {  
  cartItem = JSON.parse(getSavedCartItems());
  if (!cartItem) cartItem = [];
  if (cartItem.length > 0) {
    for (let index = 0; index < cartItem.length; index += 1) {
      addCartItem(cartItem[index].sku);
    }
  }
  calculateCartPrice();  
};

const listenerButtonsEmpty = () => {
  const elementBtn = document.querySelector('.empty-cart');
  elementBtn.addEventListener('click', () => {
    const elementsItem = document.querySelectorAll('.cart__item');
    elementsItem.forEach((element) => element.parentElement.removeChild(element));
    localStorage.removeItem('cartItems');
    cartItem = [];
    calculateCartPrice();
  });
};

window.onload = async () => {
  await loadProducts();
  listenerButtonsCart();
  loadCartItems();
  listenerButtonsEmpty(); 
 };

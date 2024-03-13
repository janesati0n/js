//Form Events Exercise
const form = document.querySelector('form');
const List = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addToList(productInput.value, qtyInput.value);
    productInput.value = "";
    qtyInput.value = "";
});

const addToList = (product, qty) => {
    const newProduct = document.createElement('li');
    newProduct.innerText = (`${qty} ${product}`);
    list.appendChild(newProduct);
}
const productNameInput = document.querySelector (".new-product-name");
const productPriceInput = document.querySelector (".new-product-price");
const productNameItem = document.querySelector (".product-name"); 
const productList = []

let productName
let productPrice

const addNewProduct = () => {
    const newProduct = {
        name: productNameInput.value,
        price: productPriceInput.value
    }

    if(newProduct.name && newProduct.price) {
        productList.push(newProduct);
        productNameInput.value = ""; 
        productPriceInput.value = undefined;
    };
    console.log(productList);
    createListItem(newProduct.name, newProduct.price)
}

const createListItem = (name, price) => {
    const shopingList = document.querySelector('.shoping-list');
    const shopungListItem = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete"

    shopungListItem.classList.add('shoping-list-item');
    shopungListItem.innerHTML = name + price;
    const listItem = shopingList.appendChild(shopungListItem);
    listItem.appendChild(deleteButton)
}

const deleteItem = (itemId) => {
    
} 
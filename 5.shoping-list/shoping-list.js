const productNameInput = document.querySelector (".new-product-name");
const productPriceInput = document.querySelector (".new-product-price");
const productNameItem = document.querySelector (".product-name"); 
const shopingList = document.querySelector(".shoping-list");
const totalPriceBlock = document.querySelector(".sum-value")

const productList = [];

let totalPrice = 0;
let productName;
let productPrice;

const generateProductId = () => {
    const randomNumber = Math.random()*10000;
    return Math.round(randomNumber);
};

const deleteListItem = (event) => {
    const id = event.target.id;
    deletedItem = document.getElementById(id).parentElement;
    const price = deletedItem.querySelector('.item-price').innerHTML;
    totalPrice = totalPrice - Number(price);
    totalPriceBlock.innerHTML = totalPrice;
    deletedItem.parentElement.removeChild(deletedItem);
}

const createListItem = (name, price) => {
    // create item element
    const shopingListItem = document.createElement("div");
    shopingListItem.classList.add('shoping-list-item');
    shopingListItem.innerHTML = name;

    // create price span in item element
    const priceBlock = document.createElement('span');
    priceBlock.classList.add('item-price');
    priceBlock.innerHTML = price;

    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "delete";
    deleteButton.id = generateProductId();
    deleteButton.addEventListener('click', deleteListItem)

    // add elements in document
    shopingListItem.appendChild(priceBlock);
    shopingListItem.appendChild(deleteButton);
    shopingList.appendChild(shopingListItem);
}

const clearInputs = () => {
    productNameInput.value = ""; 
    productPriceInput.value = "";
}

const addNewProduct = () => {
    const isInputsInvalid = productPriceInput.value === "" || productNameInput.value === "" || productPriceInput.value < 0;

    if (isInputsInvalid) {
        console.log("data error");       
        clearInputs();
        return;
    }

    const newProduct = {
        id:generateProductId(),
        name: productNameInput.value,
        price: productPriceInput.value
    }

    if (newProduct.name && newProduct.price) {
        productList.push(newProduct);
        totalPrice = totalPrice + Number(newProduct.price);
        totalPriceBlock.innerHTML = totalPrice;
        clearInputs();
    };

    console.log(productList);
    createListItem(newProduct.name, newProduct.price)
}

const deleteAll = () => {
    shopingList.innerHTML = "";
    totalPrice = 0
    totalPriceBlock.innerHTML = 0
}
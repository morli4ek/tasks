const productNameInput = document.querySelector (".new-product-name");
const productPriceInput = document.querySelector (".new-product-price");
const productNameItem = document.querySelector (".product-name"); 
const shopingList = document.querySelector(".shoping-list")

const productList = [];

let productName;
let productPrice;

const generateProductId = () => {
    const randomNumber = Math.random()*10000;
    return Math.round(randomNumber);
};

const deleteListItem = (event) => {
    const id = event.target.id;
    deletedItem = document.getElementById(id).parentElement;
    deletedItem.parentElement.removeChild(deletedItem)
}

const createListItem = (name, price) => {
    // create element
    const shopingListItem = document.createElement("div");
    shopingListItem.classList.add('shoping-list-item');
    shopingListItem.innerHTML = name + ' ' + price

    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "delete";
    deleteButton.id = generateProductId();
    deleteButton.addEventListener('click', deleteListItem)

    shopingListItem.appendChild(deleteButton);
    shopingList.appendChild(shopingListItem);
}

const clearInputs = () => {
    productNameInput.value = ""; 
    productPriceInput.value = "";
}

const addNewProduct = () => {
    const isInputsInvalid = productPriceInput.value === "" || productNameInput.value === "";

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
        clearInputs();
    };

    console.log(productList);
    createListItem(newProduct.name, newProduct.price)
}

const deleteAll = () => {
    shopingList.innerHTML = "";
}
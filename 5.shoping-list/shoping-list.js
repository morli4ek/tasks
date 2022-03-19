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
}

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
    createShopingListItem(newProduct.name, newProduct.price)
}
const createShopingListItem = (name, price) => {

    const shopingList = document.querySelector(".shoping-list")
    // create element
    const shopingListItem = document.createElement("div");
    shopingListItem.classList.add('shoping-list-item');
    shopingListItem.innerHTML = name + ' ' + price
    //create delete button
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button")
    deleteButton.innerHTML = "delete"

    shopingListItem.appendChild(deleteButton);
    shopingList.appendChild(shopingListItem);

    /*
       <div class="shoping-list">
           <div class="shoping-list-item">
              груша  2
              <button class="delete-button">delete</button>
           </div>
            <div class="shoping-list-item">
              груша  2
              <button class="delete-button">delete</button>
           </div>
           
       </div>
    */

}
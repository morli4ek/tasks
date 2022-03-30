const modal = document.createElement("div");
const deleteButton = document.createElement("button");

const openModal = () => {
    createModal();
}

const createModal = () => {
    modal.classList.add("modal-window")
    
    //create delete button
    deleteButton.classList.add("modal-delete-button");
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", closeModal)

    //append model to document
    document.body.appendChild(modal);
    modal.appendChild(deleteButton);
}

const closeModal = () => {
    modal.removeChild(deleteButton)
    document.body.removeChild(modal);
}
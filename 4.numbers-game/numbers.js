let selectedNumber;
const resultBlock = document.querySelector(".result");

const selectNumber = (number) => {
    selectedNumber = number;
}

const generatePlayNumber = () => {
    const randomNumber =  Math.random()*3 + 1;
    return Math.round(randomNumber);
}

const play = () => {
    const randomNumber = generatePlayNumber();

    if (randomNumber === selectedNumber) {
        resultBlock.innerHTML = "Win";
    } else {
        resultBlock.innerHTML = "lose";
    }
}



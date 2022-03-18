let selectedNumber;
const resultBlock = document.querySelector(".result");
const selectedNumberBlock = document.querySelector(".selected-number");
const randomNumberBlock = document.querySelector(".random-number")

const selectNumber = (number) => {
    selectedNumber = number;
    selectedNumberBlock.innerHTML = selectedNumber;
}

const generatePlayNumber = () => {
    const randomNumber =  Math.random()*3 + 1;
    return Math.round(randomNumber);
}

const play = () => {
    const randomNumber = generatePlayNumber();
    randomNumberBlock.innerHTML = randomNumber;
    if (randomNumber === selectedNumber) {
        resultBlock.innerHTML = "Win";
    } else {
        resultBlock.innerHTML = "lose";
    }
}



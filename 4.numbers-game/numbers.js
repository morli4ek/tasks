let selectedNumber;
let randomNumber;
const resultBlock = document.querySelector(".result");
const selectedNumberBlock = document.querySelector(".selected-number");
const randomNumberBlock = document.querySelector(".random-number")

const selectNumber = (number) => {
    randomNumber = undefined;
    randomNumberBlock.innerHTML = '';
    selectedNumber = number;
    selectedNumberBlock.innerHTML = selectedNumber;
}

const generatePlayNumber = () => {
    const randomNumber =  Math.random()*3 + 1;
    return Math.round(randomNumber);
}

const play = () => {
    randomNumber = generatePlayNumber();
    randomNumberBlock.innerHTML = randomNumber;
    if (randomNumber === selectedNumber) {
        resultBlock.innerHTML = "Win";
    } else {
        resultBlock.innerHTML = "lose";
    }
}



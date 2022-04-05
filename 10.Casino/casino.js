const gameScreenNumberOne = document.querySelector(".one")
const gameScreenNumberTwo = document.querySelector(".two")
const gameScreenNumberThree = document.querySelector(".three")

const numbersAmount = 3

const generateRandomNumber = () => {
    const randomNumber =  Math.random()*4 + 1;
    return Math.round(randomNumber);
}
const play = () => {
    const numbersArray = [];

    for (i = 0; i < numbersAmount; i++) {
        numbersArray.push( generateRandomNumber() )
    }

    console.log (numbersArray)
    writeNumbers(numbersArray)
}

const writeNumbers = (numsArray) => {
    gameScreenNumberOne.innerHTML = numsArray[0];
    gameScreenNumberTwo.innerHTML = numsArray[1];
    gameScreenNumberThree.innerHTML = numsArray[2];
    // TODO refactor this
}
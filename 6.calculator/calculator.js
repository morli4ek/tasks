const firstNumberInput = document.querySelector(".number-one");
const secondNumberInput = document.querySelector(".number-two");
const resultBlock = document.querySelector(".result");
const equalButton = document.querySelector(".see-result-button");

const clearBlocks = () => {
    firstNumberInput.value = "";
    secondNumberInput.value = "";
    resultBlock.innerHTML  = "";
}

const seeResult = () => {
    const num1 = Number(firstNumberInput.value);
    const num2 = Number(secondNumberInput.value);

    console.log(num1)

    const isInputsValid = typeof (num1) === 'number' 
        &&  typeof (num2) === 'number' 
        && num1 >= num2 
        && num1 !== 0 
        && num2 !== 0

    if (isInputsValid) {
        result = num1 - num2;
        resultBlock.innerHTML = result;
        return;
    }

    console.log('Error');
    clearBlocks();
}
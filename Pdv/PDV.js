const resultBlock = document.querySelector(".pdv-result");
const sumInput = document.querySelector(".sum-input")

const clearInput = () => {
    sumInput.value = ""
}

const calculatePDV = () => {
    const number = Number(sumInput.value)

    const isInputsValid = 
        typeof (number) === "number"
        && number !== 0 
    
    if (isInputsValid) {
            const calculate = (sumInput.value) * 0.2
            resultBlock.innerHTML= Math.round(calculate);
            clearInput()
            return;
    }

    clearInput()

    console.log("error")

}
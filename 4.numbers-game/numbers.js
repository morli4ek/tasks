const selectNumber = (number) => {
    const selectedNumber = number;
    console.log(selectedNumber)
}

const generatePlayNumber = () => {
    const randomNumber =  Math.random()*10
    return Math.round(randomNumber)
}

const play = () => {
    console.log('play')
     generatePlayNumber()
}
 
play()
//  console.log(generatePlayNumber() )



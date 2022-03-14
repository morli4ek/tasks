
/*
Завданя:стрворити функцію яка буде приймати в якості аргумента число т
а поверати строку negative якщо від'ємне та positive якщо число буде 
більше нуля якщо передано нуль функція повертає нуль
якщо передано не число функція виводить в консоль повідомленя про помилку

*/
const  checkNumber = (number) => {
    
    const isNumber = typeof(number) === 'number';

    if(!isNumber) {
        console.log(number + "is not a number");
        return
    }

    if(number > 0) {
        return "number is positive"
    } 
    if (number < 0 ) {
        return "number is negative" 

    } else {
        return "number is 0"

    }
}

// tests

console.log(checkNumber(12))
console.log(checkNumber(0))
console.log(checkNumber(-12))
console.log(checkNumber("0"))
console.log(checkNumber(["0"]))
console.log(checkNumber({ test: "0"}))


/*
Завданя:стрворити функцію яка буде приймати в якості аргумента число т
а поверати строку negative якщо від'ємне та positive якщо число буде 
більше нуля якщо передано нуль функція повертає нуль
якщо передано не число функція виводить в консоль повідомленя про помилку

*/

const  checkNumber = (number) => {
    
    const isNumber = typeof(number) === 'number';

    if (!isNumber) {
        return "number is not a number"
    }

    if(number > 0) {
        return "number is positive "
    } 
    if (number < 0 ) {
        return "number is negative" 

    } else {
        return "number is 0"

    }
}

// tests

const test = ( condition ) => {
     if (condition) {
         console.log('test PASS');
         return;
     }
    console.log('test FAIL')
}

test(checkNumber(12) === 'number is positive')
test(checkNumber(0) ===  "number is 0")
test(checkNumber(-10) === "number is negative")
test(checkNumber('string') === "number is not a number") 



/*

if ( умова ) {

} else if ( умова ) {

} else {

}


*/
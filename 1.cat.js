/*'

створити функцію cat яка приймає аргумент name та повертає строку hello, name якщо name теж строка,

або name is not a cat якщо name не стррока 

*/

const cat = (name) => {
    if(typeof(name) ==="string") {
      return"hello, " + name
    }  else {
      return name + " is not a cat"
    }
   
}

console.log( cat("kitty") )
console.log( cat(true) )
/*
 if ( вираз який true) {
    виконується якшо true 
} else {

}
*/ 
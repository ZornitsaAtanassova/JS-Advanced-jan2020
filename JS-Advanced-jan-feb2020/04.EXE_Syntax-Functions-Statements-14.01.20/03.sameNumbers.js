// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not. Print on the console true if all numbers are same and false if not. On the next line print the sum of all the digits.

function sameNumbers(number) {
      let strNumber = number.toString().split('');
      let allTrue = true;
      let sum = 0;

      for (let i = 0; i < strNumber.length; i++) {
            if (allTrue) {
                  allTrue = strNumber[i] === strNumber[0];
            }
            
            sum += Number(strNumber[i]);
      }

      return `${allTrue} \n ${sum}`;
}


/* // Using ARRAY methods
function sameNumbers(number) {
      let allTrue = number.toString().split('')
      .filter(x => number.toString()[0] === x).length === number.toString().length;

      let sum = number.toString().split('').reduce((acc, x) => Number(acc) + Number(x));

      return `${allTrue} \n ${sum}`;
} */

console.log(sameNumbers(2222222));        // true  14
console.log(sameNumbers(1234));        // false  10

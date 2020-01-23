// Write a function that finds the elements at even positions in an array. The input comes as array of string elements. The output is the return value of your function. Collect all elements in a string, separated by space.

function evenPosition(inputArr) {
      let evenElementsInline = '';
      for (let i = 0; i < inputArr.length; i+=2) {
            evenElementsInline += inputArr[i] + ' ';
      }

      return evenElementsInline;
}

console.log(evenPosition(['20', '30', '40']));      // 20 40
console.log(evenPosition(['5', '10']));      // 5

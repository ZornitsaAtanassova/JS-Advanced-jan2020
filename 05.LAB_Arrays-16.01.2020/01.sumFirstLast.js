// Write a function that calculates and prints the sum of the first and the last elements in an array.

function sumFirstLast(inputArr) {
      let first = Number(inputArr[0]);
      let last = Number(inputArr[inputArr.length - 1]);
      let sum = first + last;
      
      return sum;
}

console.log(sumFirstLast(['20', '30', '40']));      // 60
console.log(sumFirstLast(['5', '10']));      // 15

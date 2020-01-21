// Write a program that receives a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// • chop - divide the number by two
// • dice - square root of number
// • spice - add 1 to number
// • bake - multiply number by 3
// • fillet - subtract 20% from number

function cookingByNumbers(inputArr) {
      let n = parseInt(inputArr[0]);

      let func = {
            chop: (x) => x / 2,
            dice: (x) => Math.sqrt(x),
            spice: (x) => x + 1,
            bake: (x) => x * 3,
            fillet: (x) => (0.8 * x).toFixed(1)
      }

      for (let i = 1; i < inputArr.length; i++) {
            n = func[inputArr[i]](n);
            console.log(n);
      }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);    // 16  8  4  2  1
console.log('**************************************');
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);    // 3  4  2  6  4.8

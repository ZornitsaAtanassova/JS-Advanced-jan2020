// Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property and print it on the console.

// Imperative way:
function calorieObject(inputArr) {
      const obj = {};
      for (let i = 0; i < inputArr.length; i+=2) {
            obj[inputArr[i]] = parseInt(inputArr[i+1]);
      }

      return obj;
}

/* // Declarative way:
function calorieObject(inputArr) {
      return inputArr.reduce((acc, x, i, arr) => {
            if(i % 2 === 0) {
                  acc[x] = undefined;
            }else{
                  acc[arr[i-1]] = +x;
            }

            return acc;
      }, {});
} */

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));       // { Yoghurt: 48, Rise: 138, Apple: 52 }
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));       // { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }

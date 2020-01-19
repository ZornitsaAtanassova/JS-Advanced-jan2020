function aggregateElements(elements = []) {
      function aggregate(arr = [], initVal, func) {
            let val = initVal;
            for (let i = 0; i < arr.length; i++) {
                  val = func(val, arr[i]);
            }
            console.log(val);
      }

      aggregate(elements, 0, (a,b) => a + b);
      aggregate(elements, 0, (a,b) => a + 1 / b);
      aggregate(elements, '', (a,b) => a + b);
}

/* function aggregateElements(arr, func) {
      return func(arr);
}

function sum(arr) {
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            result += element;
      }

      return result;
}

function inversSum(arr) {
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
            const element = 1 /arr[i];
            result += element;
      }

      return result;
}

function concat(arr) {
      let result = '';
      for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            result += element;
      }

      return result;
} */

aggregateElements([1, 2, 4]);       // 7  1.75  124
/* console.log(aggregateElements([1, 2, 4], sum));       // 7
console.log(aggregateElements([1, 2, 4], inversSum));       // 1.75
console.log(aggregateElements([1, 2, 4], concat));       // 124
 */
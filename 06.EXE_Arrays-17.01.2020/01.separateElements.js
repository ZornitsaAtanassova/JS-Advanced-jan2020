// Print an Array with a Given Delimiter.
// The input comes as an array of strings. The last element of the array is the delimiter.
// The output is the same array, printed on the console, each element separated from the others by the given delimiter.

function separateElements(inputArr) {
      // console.log(inputArr);
      let separator = inputArr.pop();
      //console.log(inputArr);
      let result = inputArr.join(separator);

      return result;
}

console.log(separateElements(
      [
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            '-'
      ]
));    // One-Two-Three-Four-Five
console.log(separateElements(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));    // How about no?_I_will_not_do_it!

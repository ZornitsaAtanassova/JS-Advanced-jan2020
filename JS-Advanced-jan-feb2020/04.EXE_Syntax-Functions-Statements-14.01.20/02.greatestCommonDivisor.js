// Най-голям общ делител - Greatest Common Divisor (GCD). Write a function that takes two positive numbers as input and compute the greatest common divisor.
// See: https://bg.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D1%8A%D0%BC_%D0%BD%D0%B0_%D0%95%D0%B2%D0%BA%D0%BB%D0%B8%D0%B4

/* // Recursive description:
function gcd(a, b) {
      if (b === 0) {
            return a;
      } else {
            return gcd(b, a%b);
      }
} */

// Procedure description:
function gcd(a, b) {
      let copyA = a;
      let copyB = b;
      while (copyB !== 0) {
            let tempMod = copyA % copyB;
            copyA = copyB;
            copyB = tempMod;
      }

      return copyA;
}

/* // Used DESTRUCTURING to reverse value of two variables!
function gcd(a, b) {
      let copyA = a;
      let copyB = b;
      while (copyB !== 0) {
            [copyA, copyB] = [copyB, copyA % copyB];
      }

      return copyA;
} */

console.log(gcd(15, 5));      // 5
console.log(gcd(2154, 458));      // 2

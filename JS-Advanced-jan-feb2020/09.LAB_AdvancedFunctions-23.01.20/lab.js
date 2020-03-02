/* //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function sayHello() {
      return 'Hello, ';
}
function greeting(helloMessage, name) {
      return helloMessage() + name;
}

console.log(greeting(sayHello, 'JS')); 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* //===========================================================
// Currying - декомпозиране на функцията. Типично за функционалното програмиране!
function trippleSum(a, b, c) {
      return a + b +c;
}
console.log(trippleSum(1,2,3));
function trippleSumCurrying(a) {
      return function(b) {
            return function(c) {
                  return a + b + c;
            };
      };
};
console.log(trippleSumCurrying(1)(2)(3));
//=========================================================== */


/* //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var person = (function() {
      var age = 0;
      var name;

      function grow() {
            if (age > 100) {
                  reborn();
            }
            age++;
      }

      function howOld() {
            return age;
      }

      function reborn() {
            age = 0;
      }
      // Privite miss here, Publick is here!
      return {
            name: name,
            grow: grow,
            howOldAreYou: howOld
      }
}) ();

var person2 = Object.create(person);

person2.name = 'Pesho';
person.name = 'Gosho';
console.log(person.name);
console.log(person.howOldAreYou());
person.grow();
person.grow();
console.log(person.howOldAreYou());
console.log(person.age);
console.log(person2.name, person.name);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* //===========================================================
var sequence = (function(){
      let counter = 0;
      function getCurrentValue() {
            return counter;
      }

      function getNextValue() {
            return ++counter;
      }

      return {
            getCurrentValue,
            getNextValue
      };
})();

console.log(sequence.getCurrentValue());
console.log(sequence.getNextValue());
console.log(sequence.getCurrentValue());
console.log(sequence.getNextValue());
console.log(sequence.getCurrentValue());
//=========================================================== */



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var proc = (function() {
      var text = '';

      function append(str) {
            text += str;
      }

      function removeStart(n) {
            text = text.substring(n);
      }

      function removeEnd(n) {
            if (text.length >= n) {
                  text = text.substring(0, text.length - n);
            }
      }

      function print() {
            console.log(text);
      }

      return {
            append,
            removeStart,
            removeEnd,
            print
      };
})();

proc.print();
proc.append('Marko');
proc.removeStart(1);
proc.removeEnd(1);
proc.print();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* // The characteristic of the reference types is expressed in the assignment operation! For example:
const num = {
      n: 1
};
console.log(`num = ${num.n}`);
const num1 = num;
console.log(`num1 = ${num1.n} and num = ${num.n}`);
num1.n = 100;
console.log(`After change num1: num1 = ${num1.n} and num = ${num.n}`); */

// This указател - дава достъп до свойствата на обекта, когато се споменават в метод в същия!
const person = {
      firstName: 'Jhon',
      lastName: 'Doe',
      fullName: function(){
            return `${this.firstName} ${this.lastName}`;
      }
};
console.log(person.fullName());


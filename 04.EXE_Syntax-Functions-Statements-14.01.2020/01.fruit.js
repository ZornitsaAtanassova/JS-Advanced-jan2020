// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams and another number for the price per kilogram.

function fruit(typeOfFruit, weight, price) {
      let weightInKg = weight / 1000;
      let totalPrice = (weightInKg * price).toFixed(2);
      
      // console.log(`I need $${totalPrice} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
      return `I need $${totalPrice} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`;
}

fruit('orange', 2500, 1.80);    // I need $4.50 to buy 2.50 kilograms orange.
fruit('apple', 1563, 2.35);    // I need $3.67 to buy 1.56 kilograms apple.

// Write a program that receives two points in the format [x1, y1, x2, y2]. Check if the distance between each point and the start of the cartesian coordinate system (0, 0) is valid. A distance between two points is considered valid, if it is an integer value. 
// In case a distance is valid, print"{x1, y1} to {x2, y2} is valid"
// If the distance is invalid, print "{x1, y1} to {x2, y2} is invalid"
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}

function validityChecker(coordinates) {
      let x1 = coordinates[0];
      let y1 = coordinates[1];
      let x2 = coordinates[2];
      let y2 = coordinates[3];
  
      let distance1 = Math.sqrt(x1 * x1 + y1 * y1);
      let distance2 = Math.sqrt(x2 * x2 + y2 * y2);
      let distance3 = Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2));
  
      if (Number.isInteger(distance1)) {
          console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
      } else {
          console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
      }
  
      if (Number.isInteger(distance2)) {
          console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
      } else {
          console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
      }
  
      if (Number.isInteger(distance3)) {
          console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
      } else {
          console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
      }
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);

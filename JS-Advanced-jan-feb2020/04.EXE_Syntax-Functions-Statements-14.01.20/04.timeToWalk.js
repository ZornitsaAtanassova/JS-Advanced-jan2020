// Write a function that calculates how long it takes a student to get to university. The function takes three numbers:
// • The first is the number of steps the student takes from their home to the university
// • Тhe second number is the length of the student's footprint in meters
// • Тhe third number is the student speed in km/h
// Every 500 meters the students a rest and takes a 1 minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: 'hours:minutes:seconds'.

function timeToWalk(steps, stepLength, speed) {
      let length = steps * stepLength;
      let totalRestTimeInMin = Math.floor(length / 500);
      let totalTime = length / speed / 1000 * 60;
      let totalTimeInSec = Math.ceil((totalRestTimeInMin + totalTime) * 60);
      let result = new Date(null, null, null, null, null, totalTimeInSec);
      // console.log (length, totalRestTimeInMin, totalTime, totalTimeInSec, result);

      return result.toTimeString().split(' ')[0];
}

console.log(timeToWalk(4000, 0.60, 5));      // 00:32:48
console.log(timeToWalk(2564, 0.70, 5.5));      // 00:22:35


// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// • On the motorway the limit is 130 km/h
// • On the interstate the limit is 90 km/h
// • In the city the limit is 50 km/h 
// • Within a residential area the limit is 20 km/h
// If the driver is within the limits, there should not be any output. If the driver is over the limit, however, your function should print the severity of the infraction. 
// For speeding up to 20 km/h over the limit, speeding should be printed 
// For speeding up to 40 km/h over the limit, excessive speeding should be printed
// For anything else, reckless driving should be printed

function roadRadar([speed, area]) {
      let calculateOverLimit = (limit, speed) => {
            if(limit >= speed) {
                  console.log();
                  return;
            }

            let overLimit = speed - limit;

            if(overLimit <= 20) {
                  console.log('speeding');
            }else if(overLimit <= 40) {
                  console.log('excessive speeding');
            }else if(overLimit > 40) {
                  console.log('reckless driving');
            }
      }

      switch (area) {
            case 'motorway':
                  calculateOverLimit(130, speed);
                  break;
            case 'interstate':
                  calculateOverLimit(90, speed);
                  break;
            case 'city':
                  calculateOverLimit(50, speed);
                  break;
            case 'residential':
                  calculateOverLimit(20, speed);
                  break;
            default:
                  break;
      }
}

/* // Solution through Object:
function roadRadar([speed, area]) {
      const objLimits = {
            'motorway': 130,
            'interstate': 90,
            'city': 50,
            'residential': 20
      }

      let calculateOverLimit = (limit, speed) => {
            if(limit >= speed) {
                  console.log();
                  return;
            }

            let overLimit = speed - limit;

            if(overLimit <= 20) {
                  console.log('speeding');
            }else if(overLimit <= 40) {
                  console.log('excessive speeding');
            }else if(overLimit > 40) {
                  console.log('reckless driving');
            }
      }

      switch (area) {
            case 'motorway':
                  calculateOverLimit(objLimits[area], speed);
                  break;
            case 'interstate':
                  calculateOverLimit(objLimits[area], speed);
                  break;
            case 'city':
                  calculateOverLimit(objLimits[area], speed);
                  break;
            case 'residential':
                  calculateOverLimit(objLimits[area], speed);
                  break;
            default:
                  break;
      }
} */

roadRadar([40, 'city']);     // 
roadRadar([21, 'residential']);     // speeding
roadRadar([120, 'interstate']);     // excessive speeding
roadRadar([200, 'motorway']);     // reckless driving

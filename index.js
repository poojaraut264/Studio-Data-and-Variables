// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
//let astronautCount = 7;
const input = require('readline-sync');
let astronautCount = input.question("Enter astronaut count: ");
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg =	74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius	= -225;
let fuelLevel	= '100%';
let weatherStatus	= 'clear';

const dottedLine = '-------------------------------------';
const header1 = '> LC04 - LAUNCH CHECKLIST';
const header2 = '> ASTRONAUT INFO';
const header3 = '> FUEL DATA';
const header4 = '> MASS DATA';
const header5 = '> FLIGHT PLAN';
const header6 = '> OVERALL STATUS';
const space = ' ';

// Write code to generate the LC04 report here:
console.log(dottedLine);
console.log(header1);
console.log(dottedLine);
console.log("Date: " + date);
console.log("Time: " + time + "\n");

console.log(dottedLine);
console.log(header2);
console.log(dottedLine);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log();

console.log(dottedLine);
console.log(header3);
console.log(dottedLine);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel);
console.log(space);

console.log(dottedLine);
console.log(header4);
console.log(dottedLine);
console.log("* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");
console.log(space);

console.log(dottedLine);
console.log(header5);
console.log(dottedLine);
console.log("* weather: " + weatherStatus);
console.log(space);

console.log(dottedLine);
console.log(header6);
console.log(dottedLine);
console.log("* Clear for takeoff: YES");

// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
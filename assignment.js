// *Done* Values & Variables
// Data Types
// Let, Const, and Var
// Basic Operators
// Strings and Template Liters
// Taking Decisions: if / else Statements
// Type Conversion and Coersion 
// Equality Operators: == vs ===
// Logical Operators
// The switch Statement
// The Conditional (Ternary) Operator

//Country is City
//Continent is team 
//Population is fan
//Language is era

const city = 'Memphis, TN';
const team = 'Grizzlies';
let fan = '630000';

console.log(city);
console.log(team);
console.log(fan);

const isPopular = true;
let era = 'Big Memphis';

console.log(typeof isPopular);
console.log(typeof fan);
console.log(typeof city);
console.log(typeof era);

console.log(fan / 2);
//population++; <-- This will just add 1 to the overall population number
console.log(fan);
console.log(fan > 6);
console.log(fan < 33);
const cityTeamDescription =
    `The ${team} are based out of ${city}. The ${team} recently transitioned from the Grit n Grind era to the ${era} era. `;
console.log(cityTeamDescription);
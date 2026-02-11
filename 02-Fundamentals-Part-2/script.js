/**
 * Strict mode for only specific function or blocks
 */

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio';
const private = 345;

/**
 * Functions -
 */

function logger() {
    console.log('My name is jonas');
}

function fruitProcessor(apples, oranges) {
    return `Juice is ${apples} apples and ${oranges} oranges`;
}

/**
 * calling or running or invoking function
 */
logger();
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/**
 * function declaration
 *
 */

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge1(2026));

/**
 * function expression
 * @param birthYear
 * @returns {number}
 */
const calcAge2 = function (birthYear) {
    return 2027 - birthYear;
}

console.log(calcAge2(2026));

/**
 * Arrow function
 */

const calcAge3 = birthYear => 2037- birthYear;
console.log(calcAge3(2025));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 -birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'Dip Ghosh'));

/**
 * Coding challenges
 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(85, 54, 41);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins  >= 2 * avgKoalas) {
         return `Dolphins wins (${avgDolphins} vs ${avgKoalas})`;
    }
    else if (avgKoalas  >= 2 * avgDolphins) {
        return `Kolas wins (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `No team wins...`;
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
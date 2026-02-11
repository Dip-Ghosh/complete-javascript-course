/**
 * Strict mode for only specific function or blocks
 */

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 345;

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

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins,scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins  >= avgKoalas * 2) {
         console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas  >= avgDolphins * 2) {
        console.log(`Kolas wins (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(578, 111);

scoreDolphins = calcAverage(85,54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
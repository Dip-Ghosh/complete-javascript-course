// /**
//  * Strict mode for only specific function or blocks
//  */
//
// 'use strict';
//
// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');
//
// // const interface = 'Audio';
// // const private = 345;
//
// /**
//  * Functions -
//  */
//
// function logger() {
//     console.log('My name is jonas');
// }
//
// function fruitProcessor(apples, oranges) {
//     return `Juice is ${apples} apples and ${oranges} oranges`;
// }
//
// /**
//  * calling or running or invoking function
//  */
// logger();
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
//
// /**
//  * function declaration
//  *
//  */
//
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
//
// console.log(calcAge1(2026));
//
// /**
//  * function expression
//  * @param birthYear
//  * @returns {number}
//  */
// const calcAge2 = function (birthYear) {
//     return 2027 - birthYear;
// }
//
// console.log(calcAge2(2026));
//
// /**
//  * Arrow function
//  */
//
// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(2025));
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//
//     return `${firstName} retires in ${retirement}`;
// }
//
// console.log(yearsUntilRetirement(1991, 'Dip Ghosh'));
//
// /**
//  * Coding challenges
//  */
//
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
//
// console.log(scoreDolphins, scoreKoalas);
//
// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Kolas wins (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// }
//
// checkWinner(scoreDolphins, scoreKoalas);
//
// checkWinner(578, 111);
//
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
//
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);
//
// /**
//  * Array
//  */
//
// const friends = ['Dip', 'Dip Ghosh','Michale', 'Dipu'];
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
//
// const years = new Array('2021', '1099', '2020');
// console.log(years);
//
// friends[2] = 'Jay';
// console.log(friends);
//
// const jonas = ['jonas', 'Ai', 2037 - 1991, friends];
// console.log(jonas);
//
// /**
//  * array method
//  * push method insert element at the end of an array
//  * unshift method insert element at the beginning of an array
//  * shift method remove element at the beginning of an array
//  * pop method remove from the last index from array
//  * include method check if the element is present or not in stead of index
//  */
//
// friends.push('jonas');
// console.log(friends);
// friends.unshift('jonas1');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('Dip'));
// console.log(friends.includes('Dip'));
// console.log(friends.includes('BOB'));
//
// if (friends.includes('Peter')) {
//     console.log('You have a friend called peter');
// }
//
// /**
//  * object
//  */
// const jonaObject = {
//     firstName: 'Jonas',
//     lastName: 'SIn',
//     email: 'jonas@jonas',
//     password: 'password',
//     age: 19,
//     friends: friends,
// }
//
// console.log(jonaObject);
// console.log(jonaObject.email);
// console.log(jonaObject['email']);
// const nameKey = 'Name';
// console.log(jonaObject['first' + nameKey]);
// console.log(jonaObject['last' + nameKey]);
//
// // const interestedIn =prompt('What do you want to know? choose between firstname, lastname?');
// // console.log(jonaObject[interestedIn]);
//
// jonaObject['twitter'] = '@gmail.com';
// jonaObject.location = 'Dhaka';
// console.log(jonaObject.friends);
// console.log(`${jonaObject.firstName} has ${jonaObject.friends.length} friends and his best friends is call ${jonaObject.friends[3]}`);
//
// const jonaO = {
//     firstName: 'Jonas',
//     lastName: 'SIn',
//     email: 'jonas@jonas',
//     password: 'password',
//     birthYear: '1991',
//     job:'teacher',
//     friends: friends,
//     hasDriversLicense: false,
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary:function () {
//         return `${this.firstName} ${this.lastName} is a ${this.calcAge()} years old ${this.job} `;
//     }
// }
//
// console.log(jonaO.calcAge());
// console.log(jonaO.getSummary());
//
// /**
//  * code Challenge
//  */
//
// /* Write your code below. Good luck! 🙂 */
// const mark = {
//     fullName: 'mark',
//     mass : 78,
//     height :1.69,
//     calcBMI: function() {
//         this.bmi = this.mass/ (this.height * this.height);
//         return this.bmi;
//     }
// };
//
// const john = {
//     fullName: 'john',
//     mass : 92,
//     height :1.95,
//     calcBMI: function() {
//         this.bmi = this.mass/ (this.height * this.height);
//         return this.bmi;
//     }
// };
//
// mark.calcBMI();
// john.calcBMI();
//
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }

/**
 * Loop Lecture
 */

console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');
console.log('Lifting weight repitation');

for (let i = 0; i < 50; i++) {
    console.log('Lifting weight repitation' + i);
}
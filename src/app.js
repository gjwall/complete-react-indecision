// import './utils.js'
import subtract, { square, add } from './utils.js';

console.log('app.js is running');

// console.log(square(4));
// console.log(add(4, 3));
// console.log(subtract(4, 3));

import isSenior, { isAdult, canDrink } from './person.js';
console.log(isAdult(18));
console.log(isAdult(17));
console.log(canDrink(18));
console.log(canDrink(17)); 
console.log(isSenior(65)); 
console.log(isSenior(64)); 
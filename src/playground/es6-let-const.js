// npx babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch

var nameVar = 'Tom';
var nameVar = 'Adam';
console.log('nameVar', nameVar);

let nameLet = 'Debbie';
nameLet = 'Naomi';
// let nameLet = 'Joe' // Not allowed with let
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Naomi' // Not allowed with const
// let nameLet = 'Joe' // Not allowed with let
console.log('nameLet', nameConst);

function getPetName() {
    var petName = 'Mandy';
    return petName;
}

getPetName();
console.log(getPetName());
// console.log(petName) Not defined, not accessable

const fullName = 'Firstname surname';
let firstName; 
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName); // Works with var and not with let or const
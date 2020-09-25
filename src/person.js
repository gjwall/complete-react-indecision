
const isAdult = (age) => {
    if(age >= 18) {
        return true;
    } else {
        return false; 
    }
}

const canDrink = (age) => {
    return isAdult(age); 
}

const isSenior = (age) => {
    return age>=65;
}

export { isAdult, canDrink, isSenior as default };
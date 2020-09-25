
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

export { isAdult, canDrink };
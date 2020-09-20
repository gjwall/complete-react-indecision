
const add = function(a,b) {
    console.log(arguments);
    return a + b;
}

const addArrow = (a,b) => {
    //console.log(arguments);
    return a + b; 
}

console.log(add(55,1));
console.log(addArrow(55,1));

const user = {
    name: 'Andrea',
    cities: ['Glasgow', 'New England', 'Dublin'],
    //printPlacesLived: function() { // ES5 version
    // ES6 method of the above
    printPlacesLived() {
        //console.log(this.name);
        //console.log(this.cities);
        // Workarounds
        //const that = this;
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
        // Using 'this' needs the ES5 function definition (without arrows)
        //this.cities.forEach(function(city) {
        //this.cities.forEach((city) => {
            // Workaround solution
            //console.log(that.name + ' has lived in ' + city);
            //console.log(this.name + ' has lived in ' + city);
        //});
    }
};
// user.printPlacesLived();
console.log(user.printPlacesLived());

console.log('Challenge below') 

const multiplier = {
    // Numbers - array of numbers
    // multipleby - single number
    // multiply - return a new array where the numbers have been multiplied
    numbers: [10,20,30],
    multiplyBy: 2,

    multiply() {
        //console.log(multiplyBy);
        //console.log(this.numbers);
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply())


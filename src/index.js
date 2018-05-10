"use strict";



const helloWorld = (name = "Hello World") => {

    return name
};

console.log(helloWorld());




const data = require('./data.js');

const m = require('./math.js');

console.log(data.whichSideOfTheForce); // outputs "The Dark Side"

console.log(m.add(5,5))
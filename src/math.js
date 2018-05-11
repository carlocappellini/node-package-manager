
const sub = (x, y) => x - y;
const div = (x, y) => x / y;
const mult = (x, y) => x * y;


const mduls = (x, y) => {


    if ((x + y ) % 2 === 0) {
        console.log("even " + (x+y))


    }

    else  {

        console.log("odd " + (x + y))
    }

};


module.exports = {sub, div, mult, mduls};

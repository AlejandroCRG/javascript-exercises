const sumAll = function(a, b) {
    let sum = 0;
    if ((Math.sign(a) === -1 || Math.sign(b) === -1 || typeof a === 'string' || typeof a === 'object' || typeof b === 'string' || typeof b === 'object')){
        return 'ERROR'
    }
    if (a > b){
        second = a;
        first = b;
    }
    else if (b > a) {
        second = b;
        first = a;
    }
    let i = first
    while (i <= second){
        sum = sum + i;
        i++;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

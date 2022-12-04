const leapYears = function(year) {
    if (year%4 === 0) {
        if (year%100 === 0 && year%400 ===0){
            return true
        }
        else if (year%100 != 0){
            return true
        }
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;


// Is leap year if it is divisible by 4, but if divisible by 100 is lap if divisible by 400
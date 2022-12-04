
const repeatString = function(string, num) {
    finalString = ''
    let i = 0
    while (i < num) {
        finalString = (finalString + string);
        i++;
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;

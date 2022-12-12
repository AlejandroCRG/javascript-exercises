const findTheOldest = function(array) {
    return array.reduce(function(a, b){
        const aage = getAge(a.yearOfBirth, a.yearOfDeath)
        const bage = getAge(b.yearOfBirth, b.yearOfDeath)
        return aage < bage ? b : a;
    })
};

function getAge(a, b){
    if (!b){
        b = new Date().getFullYear();
    }
    return b-a
}




// Do not edit below this line
module.exports = findTheOldest;

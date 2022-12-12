const palindromes = function (string) {
    let str1 = string.toLowerCase()
    let str2 = str1.replace(/[^\w\s\']|_/g, "")
    let str3 = str2.replace(/\s+/g, "");
    let i = (str3.length-1)
    let finalString = ''
    while (i >= 0){
        finalString = finalString + str3[i];
        i--;
    }
    if (finalString === str3){
        return true
    }
    else return false
}

// Do not edit below this line
module.exports = palindromes;

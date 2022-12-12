const fibonacci = function(n) {
    fib = [1, 1]
    let i = 1
    while (i <= 25){
        let result = 0
        result = fib[i] + fib[i-1]
        fib.push(result)
        i++
    }
    if (Math.sign(n) === -1){
        return 'OOPS'
    }
    return fib[n-1]
};

// Do not edit below this line
module.exports = fibonacci;

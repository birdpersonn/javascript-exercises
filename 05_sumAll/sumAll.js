const sumAll = function(num1, num2) {
    // check num1 is positive number
    if((typeof num1 !== "number") || (num1 < 0)) {
        return "ERROR";
    }

    // check num2 is positive number
    if((typeof num2 !== "number") || (num2 < 0)) {
        return "ERROR";
    }

    const startNum = Math.min(num1, num2);
    const endNum = Math.max(num1, num2);
    let sum = 0;

    for(let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

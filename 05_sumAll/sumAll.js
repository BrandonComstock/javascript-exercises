const sumAll = function(num1, num2) {
let sum = 0;
let smaller;
let bigger;

if (num1 < 0 || num2 < 0) {
    sum = "ERROR"
} else {
    if (num1 < num2) {
        smaller = num1;
        bigger = num2;
    } else {
        smaller = num2;
        bigger = num1;
    }
    
        for (let i = smaller - 1; i < bigger; i++) {
            sum += i + 1;
        }   
    
}

return sum;


};

// Do not edit below this line
module.exports = sumAll;

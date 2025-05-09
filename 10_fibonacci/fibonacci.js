const fibonacci = function(num) {
    let sequence = [1, 1];
    for (let i = 0; i <= num; i++) {
        let first = sequence[i - 1];
        let second = sequence[i - 1];
        if (typeof first !== "number") {
            first = 0;
        }
        if (typeof second !== "number") {
            second = 0;
        }
        sequence.push(first + second);
    }
    return sequence[num];

};

// Do not edit below this line
module.exports = fibonacci;

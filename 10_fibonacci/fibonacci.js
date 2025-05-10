const fibonacci = function(num) {
    num = Number(num);
    let sequence = [1, 1];
    if (num === 0) return 0;
    if (num < 0) return "OOPS";

    for (let i = 2;  i < num; i++) {
        let first = sequence[i - 1];
        let second = sequence[i - 2];
        
        sequence.push(first + second);
    }
    return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

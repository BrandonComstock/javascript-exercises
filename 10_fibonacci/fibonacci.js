const fibonacci = function(num) {
    let sequence = [1, 1];
    for (let i = 1; i < num; i++) {
        sequence.push((i-1) + (i-2));
    }
    return sequence[num];

};

// Do not edit below this line
module.exports = fibonacci;

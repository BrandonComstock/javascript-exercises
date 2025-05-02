const removeFromArray = function(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j <= arguments.length - 1; j++) {
            if (array[i] != arguments[j]) {
                newArray.push(array[i]);
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

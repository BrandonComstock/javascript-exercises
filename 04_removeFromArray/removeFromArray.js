const removeFromArray = function(array) {
const newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = 0; j < arguments.length - 1; j++) {
            //pushes value to newArray for each arugment, only need to push it one time.
            if (array[i] !== arguments[j + 1]) {
                newArray.push(array[i]);
            } 
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

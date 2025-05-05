const removeFromArray = function(array) {
    const newArray = array.slice();
    let subtractor = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = 0; j < arguments.length - 1; j++) {
            if (array[i] === arguments[j + 1]) {
                newArray.splice(i + subtractor, 1);
                subtractor--;
            } 
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

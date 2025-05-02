const repeatString = function(str, num) {
    let newString = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            newString += str;
        }
        return newString;
    } else {
        return "ERROR";
    }
   
};

// Do not edit below this line
module.exports = repeatString;

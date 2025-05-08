const palindromes = function (text) {
    text = text.replaceAll(" ","").toLowerCase();
    let textBackwards = "";
    for (let i = text.length - 1; i >= 0; i--) {
        textBackwards += text[i];
    }

    return (text === textBackwards);
};

// Do not edit below this line
module.exports = palindromes;

const palindromes = function (text) {
    text = text.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let textBackwards = "";
    for (let i = text.length - 1; i >= 0; i--) {
        textBackwards += text[i];
    }

    return (text === textBackwards);
};

// Do not edit below this line
module.exports = palindromes;

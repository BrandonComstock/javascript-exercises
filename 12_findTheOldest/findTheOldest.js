const findTheOldest = function(people) {
    let person = {};
    function reducer (personAccumulator, personCurrent, index)  {
        let age1 = personAccumulator.yearOfDeath - personAccumulator.yearOfBirth;
        let age2 = personCurrent.yearOfDeath - personCurrent.yearOfBirth;
        
        if (age1 > age2) {
            return age1;
        } else {
            return age2;
        }
    };

    return people.reduce(reducer);
};

// Do not edit below this line
module.exports = findTheOldest;

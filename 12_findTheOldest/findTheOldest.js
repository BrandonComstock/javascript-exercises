const findTheOldest = function(people) {
    let person = {};
    function reducer (personAccumulator, personCurrent, index)  {
        let age1 = personAccumulator.yearOfDeath - personAccumulator.yearOfBirth;
        let age2 = personCurrent.yearOfDeath - personCurrent.yearOfBirth;
        
        if (age1 > age2) {
            return personAccumulator;
        } else {
            return personCurrent;
        }
    };

    return people.reduce(reducer);
};

// Do not edit below this line
module.exports = findTheOldest;

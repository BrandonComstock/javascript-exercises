const findTheOldest = function(people) {
    let person = {};
    function reducer (personAccumulator, personCurrent)  {
        const currentDate = new Date();
        let age1 = 0;
        let age2 = 0;
        if  (personAccumulator.yearOfDeath && personCurrent.yearOfDeath) {
            age1 = personAccumulator.yearOfDeath - personAccumulator.yearOfBirth;
            age2 = personCurrent.yearOfDeath - personCurrent.yearOfBirth;
        } else if (!personAccumulator.yearOfDeath) {
            age1 = currentDate.getFullYear() - personAccumulator.yearOfBirth;
            age2 = personCurrent.yearOfDeath - personCurrent.yearOfBirth;
        } else if (!personCurrent.yearOfDeath) {
            age2 = currentDate.getFullYear() - personAccumulator.yearOfBirth;
            age1 = personAccumulator.yearOfDeath - personAccumulator.yearOfBirth;
        }
   
        
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

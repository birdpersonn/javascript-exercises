const findTheOldest = function(people) {
    const ages = people.map((person) => {
        if(person["yearOfDeath"]) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return new Date().getFullYear() - person.yearOfBirth;
        }
    });
    
    const max = Math.max(...ages);
    const i = ages.indexOf(max);
    console.log(people[i]);
    return people[i];
};

// Do not edit below this line
module.exports = findTheOldest;

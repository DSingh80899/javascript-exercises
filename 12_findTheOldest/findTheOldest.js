const findTheOldest = function(people) {

    const ordered = people.sort((a,b)=> 
    {
        if(a.yearOfDeath == undefined) a.yearOfDeath= new Date().getFullYear()                
        if(b.yearOfDeath == undefined) b.yearOfDeath= new Date().getFullYear()

        if((a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth))
            return -1
        else
            return 1
    })
    
    
    return ordered[0]
};

// Do not edit below this line
module.exports = findTheOldest;

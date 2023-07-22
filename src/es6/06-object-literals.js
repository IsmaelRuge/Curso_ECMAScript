// enachced onject literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Ismael', 24, 'CO', 1));
function newUser(name, age, country){
    var name = name || 'Ismael';
    var age = age || 24;
    var country = country || 'Colombia';
    console.log(name,age,country);
}

newUser();
newUser('Isamar', 30, 'Colombia');


function newAdmin(name='Ismael', age=24, country='Colombia'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Febe', 50, 'Colombia');
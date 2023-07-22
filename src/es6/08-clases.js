//Declarando
class User {};

//Instancia de una Clase
//const newUser = new User();


class user {  
    // Metodos
    greeting() { 
        return 'Hello'; 
    } 
};

const isma = new user();
console.log(isma.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());


// Constructor
class user {
    // Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting() { 
        return 'Hello'; 
    }
}

const ruge = new user();

// this

class user{
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const irg = new user('Ismael');
console.log(irg.greeting());

// setter getters
class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new user('Ismael', 24)
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);